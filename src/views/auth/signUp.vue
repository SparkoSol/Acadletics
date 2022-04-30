<template>
  <div id="background" class="bg">
    <v-card class="sign_in" elevation="10" style="width:550px">
      <h1 class="sign-in__title">Sign Up</h1>
      <p class="sign-in__message">Add your details to Sign Up</p>
      <v-form ref="form">
        <v-text-field label="Email" outlined :rules="[required(), email()]" />
        <v-text-field
          label="User Name"
          outlined
          :rules="[required('Do not leave this field empty')]"
        />
        <v-text-field
          :rules="[required('Do not leave this field empty')]"
          label="Password"
          type="password"
          outlined
        />
        <v-text-field
          :rules="[required('Do not leave this field empty')]"
          label="Confirm Password"
          type="password"
          outlined
        />

        <v-checkbox style="margin-top: -10px">
          <template v-slot:label>
            <div>
              I agree to the
              <router-link to=""> terms and conditions </router-link>
            </div>
          </template>
        </v-checkbox>

        <v-btn color="#4173A3" dark elevation="0" width="100%" height="45px">
          Sign Up
        </v-btn>

        <v-card-text id="already"
          >Already have an Account?
          <router-link to="/logIn">Log In</router-link>
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
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sign_in {
  width: 448px;
  padding: 20px 40px 40px 40px;
  background: white;
  text-align: center;
  border-radius: 8px;
}

@media only screen and (max-width:600px) {
  .sign_in {
    width: 400px !important;
  }
}

@media only screen and (max-width:450px) {
  .sign_in {
    width: 340px !important;
  }
  #already {
    font-size: 12px;
  }
}
</style>

<style>
html {
  overflow-y: auto;
}
</style>
