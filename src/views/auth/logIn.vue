<template>
  <div id="background" class="bg" style="height:600px">
    <v-card class="sign-in" elevation="10" >
      <h1 class="sign-in__title">Login</h1>
      <p class="sign-in__message">Add your details to login</p>
      <v-form ref="form">
        <v-text-field
          v-model="username"
          label="Email"
          outlined
          :rules="[required(), email()]"
        />
        <v-text-field
          v-model="password"
          :rules="[required('Do not leave this field empty')]"
          @keypress.enter="signIn"
          label="Password"
          type="password"
          outlined
        />

        <v-card-text>Forgot your password?</v-card-text>

        <v-btn color="#4173A3" dark elevation="0" width="100%" height="45px">
          Log In
        </v-btn>

        <v-card-text
          >Don't have an Account?
          <router-link to="/signUp">Sign Up</router-link>
        </v-card-text>
      </v-form>
    </v-card>
    <loading-dialog
      v-model="loading"
      message="You are being authenticated, Please wait..."
    />
    <error-dialog v-model="error" :error="errorVal" />
  </div>
</template>

<script>
import { required, email } from '../../../utils/validators';
import LoadingDialog from '../../components/LoadingDialog';
import ErrorDialog from '../../components/ErrorDialog';

export default {
  name: 'SignIn',
  components: { ErrorDialog, LoadingDialog },

  data: () => ({
    error: false,
    errorVal: {},
    loading: false,
    username: '',
    password: ''
  }),

  methods: {
    email,
    required,
    async signIn() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        try {
          const token = (
            await this.$axios.post('/auth/login', {
              username: this.username,
              password: this.password
            })
          ).data;
          const user = (
            await this.$axios.get('/auth/user', {
              headers: { authorization: 'bearer ' + token.token }
            })
          ).data;
          localStorage.setItem('auth_token', token.token);
          localStorage.setItem('auth_user', JSON.stringify(user));
          await this.$router.push('/').then(() => this.$router.go());
        } catch (e) {
          this.error = true;
          this.errorVal = {
            title: 'Error while signing in',
            description: 'Email or Password incorrect!'
          };
          this.loading = false;
        }

        this.loading = false;
      }
    }
  }
};
</script>
<style>
.bg {
  background-image: url('../../assets/images/Group 133.png');
}
#background {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sign-in {
  width: 448px;
  padding: 20px 40px 40px 40px;
  background: white;
  text-align: center;
  border-radius: 8px;
}

@media only screen and (max-width:500px) {
  .sign-in {
    width: 360px;
  }
}

@media only screen and (max-width:400px) {
  .sign-in {
    width: 340px;
  }
}
</style>

<style>
html {
  overflow-y: auto;
}
</style>
