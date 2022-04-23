<template>
  <div>
    <v-app-bar style="background-color: #e6eaf1">
      <div class="logo">
        <v-img
          style="width: 150px; height: 55px; margin: 0px 150px 0px 60px"
          src="../assets/images/Asset 4@3x.png"
        ></v-img>
      </div>

      <template>
        <v-tabs id="tabs">
          <v-tab>
            <router-link style="text-decoration: none; color: inherit" to="/"
              >Home</router-link
            >
          </v-tab>
          <v-tab
            ><router-link
              style="text-decoration: none; color: inherit"
              to="/magazines"
              >Magazines</router-link
            ></v-tab
          >
          <v-tab
            ><router-link
              style="text-decoration: none; color: inherit"
              to="/students"
              >Students</router-link
            ></v-tab
          >
          <v-tab
            ><router-link
              style="text-decoration: none; color: inherit"
              to="/vote"
              >Vote</router-link
            ></v-tab
          >
          <v-tab
            ><router-link
              style="text-decoration: none; color: inherit"
              to="/schools"
              >Schools</router-link
            ></v-tab
          >
          <v-tab
            ><router-link
              style="text-decoration: none; color: inherit"
              to="/about"
              >About</router-link
            ></v-tab
          >
          <v-tab
            ><router-link
              style="text-decoration: none; color: inherit"
              to="/contact"
              >Contact</router-link
            ></v-tab
          >
        </v-tabs>
      </template>

      <div>
        <v-btn
          id="btn"
          rounded
          color="#4173A3"
          width="120px"
          height="40px"
          style="color: white; margin-right: 20px"
        >
          Log In
        </v-btn>
        <v-btn icon id="Icon">
          <v-icon large @click.stop="drawer = !drawer">
            mdi-format-list-bulleted
          </v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-img src="../assets/images/Asset 4@3x.png"></v-img>
          </v-list-item>
          <v-list-item>
            <v-list-item-title 
              ><router-link to="" style="text-decoration: none; color: inherit"
                >Home</router-link
              >
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><router-link to="" style="text-decoration: none; color: inherit"
                >Magazines</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><router-link to="" style="text-decoration: none; color: inherit"
                >Students</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><router-link to="" style="text-decoration: none; color: inherit"
                >Vote</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><router-link to="" style="text-decoration: none; color: inherit"
                >Schools</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><router-link to="" style="text-decoration: none; color: inherit"
                >About</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><router-link to="" style="text-decoration: none; color: inherit"
                >Contact</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-btn
            rounded
            color="#4173A3"
            width="200px"
            style="color: white; margin-top: 20px"
          >
            <router-link to="" style="text-decoration: none; color: inherit"
              >Log In</router-link
            >
          </v-btn>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
    <v-footer color="#2F5E8B">
      <div style="display: flex; width: 100%; height: 50px">
        <v-card-text style="width: 50%; text-align: right">
          <p style="color: white; font-size: 12px">
            Copyright &copy; 2022 Acadelatics.com limited. All rights reserved.
          </p>
        </v-card-text>

        <v-card-text
          style="
            display: flex;
            justify-content: center;
            width: 50%;
            font-size: 12px;
          "
        >
          <p style="color: white">Terms & Condition</p>
          <v-divider
            vertical
            color="white"
            style="margin: 0px 10px 0px 10px"
          ></v-divider>
          <p style="color: white">Privacy Policy</p>
        </v-card-text>
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>


<style>
#Icon {
  display: none;
}

@media only screen and (max-width: 1210px) {
  #tabs {
    margin-left: -100px;
  }
}

@media only screen and (max-width: 1115px) {
  #tabs {
    display: none;
  }

  #btn {
    display: none;
  }

  #Icon {
    display: block;
  }

  .logo {
    margin-left: -30px;
    margin-right: 56%;
  }
}

@media only screen and (max-width: 930px) {
  .logo {
    margin-left: -30px;
    margin-right: 45%;
  }
}

@media only screen and (max-width: 720px) {
  .logo {
    margin-right: 35%;
  }
}

@media only screen and (max-width: 600px) {
  .logo {
    margin-right: 25%;
  }
}

@media only screen and (max-width: 530px) {
  .logo {
    margin-left: -50px;
    margin-right: 15%;
  }
}

@media only screen and (max-width: 450px) {
  .logo {
    margin-right: 5%;
  }
}

@media only screen and (max-width: 400px) {
  .logo {
    margin-left: -50px;
    margin-right: -40px;
  }
}
</style>