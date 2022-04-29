<template>
  <v-main style="margin-bottom: 50px">
    <div>
      <div
        style="
          margin-top: 50px;
          display: flex;
          justify-content: space-between;
          padding: 0px 140px;
        "
      >
        <div id="select">
          <v-select
            style="width: 150px"
            :items="items"
            rounded
            label="Active"
            outlined
          ></v-select>
        </div>
        <v-btn color="#4173A3" rounded id="vote" style="margin-top: 10px">
          <router-link to="" style="color: white; text-decoration: none">
            Vote Now
          </router-link>
        </v-btn>
      </div>
      <div style="padding: 0px 140px">
        <v-divider style="margin-top: -15px"></v-divider>
      </div>
    </div>
    <div style="display: flex">
      <div id="main" style="width: 70%">
        <div>
          <div style="margin-top: 50px; padding-left: 140px; width:600px">
            <v-divider></v-divider>
          </div>
          <div style="width: 500px; margin-left: 150px; margin-top: 20px">
            <v-row>
              <v-card-title id="title"
                >What's your favourite JS framework?</v-card-title
              >
            </v-row>
            <div style="margin-top: 10px">
              <v-row
                style="
                  background: linear-gradient(90deg, #e6eaf1 100%, white 0%);
                  height: 30px;
                  width: 200px;
                "
              >
                <v-card-subtitle style="margin-top: -10px; color: black"
                  >42%</v-card-subtitle
                >
                <v-card-subtitle style="margin-top: -10px">Vue</v-card-subtitle>
                <v-icon small style="margin-left: -12px; margin-top: -10px"
                  >done</v-icon
                >
              </v-row>
              <v-row
                style="
                  background: linear-gradient(90deg, #e6eaf1 25%, white 0%);
                  height: 30px;
                  margin-top: 25px;
                "
              >
                <v-card-subtitle style="margin-top: -10px; color: black"
                  >27%</v-card-subtitle
                >
                <v-card-subtitle style="margin-top: -10px"
                  >React</v-card-subtitle
                >
              </v-row>
              <v-row
                style="
                  background: linear-gradient(90deg, #e6eaf1 20%, white 0%);
                  height: 30px;
                  margin-top: 25px;
                "
              >
                <v-card-subtitle style="margin-top: -10px; color: black"
                  >23%</v-card-subtitle
                >
                <v-card-subtitle style="margin-top: -10px"
                  >Angular</v-card-subtitle
                >
              </v-row>
              <v-row
                style="
                  background: linear-gradient(90deg, #e6eaf1 10%, white 0%);
                  height: 30px;
                  margin-top: 25px;
                "
              >
                <v-card-subtitle style="margin-top: -10px; color: black"
                  >8%</v-card-subtitle
                >
                <v-card-subtitle style="margin-top: -10px; margin-left: 7px"
                  >Other</v-card-subtitle
                >
              </v-row>
            </div>
            <v-row>
              <v-card-subtitle
                style="color: #8d9598; font-size: 12px; margin-top: 10px"
                >129 Votes</v-card-subtitle
              >
            </v-row>
          </div>
        </div>

        <div>
          <div style="margin-top: 50px; padding-left: 140px; width:600px">
            <v-divider></v-divider>
          </div>
          <div style="width: 500px; margin-left: 150px; margin-top: 20px">
            <v-row>
              <v-card-title id="title"
                >What's your favourite JS framework?</v-card-title
              >
            </v-row>
            <div style="margin-top: 10px">
              <v-row
                style="
                  background: linear-gradient(90deg, #e6eaf1 100%, white 0%);
                  height: 30px;
                  width: 200px;
                "
              >
                <v-card-subtitle style="margin-top: -10px; color: black"
                  >42%</v-card-subtitle
                >
                <v-card-subtitle style="margin-top: -10px">Vue</v-card-subtitle>
                <v-icon small style="margin-left: -12px; margin-top: -10px"
                  >done</v-icon
                >
              </v-row>
              <v-row
                style="
                  background: linear-gradient(90deg, #e6eaf1 25%, white 0%);
                  height: 30px;
                  margin-top: 25px;
                "
              >
                <v-card-subtitle style="margin-top: -10px; color: black"
                  >27%</v-card-subtitle
                >
                <v-card-subtitle style="margin-top: -10px"
                  >React</v-card-subtitle
                >
              </v-row>
              <v-row
                style="
                  background: linear-gradient(90deg, #e6eaf1 20%, white 0%);
                  height: 30px;
                  margin-top: 25px;
                "
              >
                <v-card-subtitle style="margin-top: -10px; color: black"
                  >23%</v-card-subtitle
                >
                <v-card-subtitle style="margin-top: -10px"
                  >Angular</v-card-subtitle
                >
              </v-row>
              <v-row
                style="
                  background: linear-gradient(90deg, #e6eaf1 10%, white 0%);
                  height: 30px;
                  margin-top: 25px;
                "
              >
                <v-card-subtitle style="margin-top: -10px; color: black"
                  >8%</v-card-subtitle
                >
                <v-card-subtitle style="margin-top: -10px; margin-left: 7px"
                  >Other</v-card-subtitle
                >
              </v-row>
            </div>
            <v-row>
              <v-card-subtitle
                style="color: #8d9598; font-size: 12px; margin-top: 10px"
                >129 Votes</v-card-subtitle
              >
            </v-row>
          </div>
        </div>

        <div>
          <div style="margin-top: 50px; padding-left: 140px; width:600px">
            <v-divider></v-divider>
          </div>
          <div style="width: 500px; margin-left: 150px; margin-top: 20px">
            <v-row>
              <v-card-title id="title"
                >What's your favourite JS framework?</v-card-title
              >
            </v-row>
            <div style="margin-top: 10px">
              <v-row
                style="
                  background: linear-gradient(90deg, #e6eaf1 100%, white 0%);
                  height: 30px;
                  width: 200px;
                "
              >
                <v-card-subtitle style="margin-top: -10px; color: black"
                  >42%</v-card-subtitle
                >
                <v-card-subtitle style="margin-top: -10px">Vue</v-card-subtitle>
                <v-icon small style="margin-left: -12px; margin-top: -10px"
                  >done</v-icon
                >
              </v-row>
              <v-row
                style="
                  background: linear-gradient(90deg, #e6eaf1 25%, white 0%);
                  height: 30px;
                  margin-top: 25px;
                "
              >
                <v-card-subtitle style="margin-top: -10px; color: black"
                  >27%</v-card-subtitle
                >
                <v-card-subtitle style="margin-top: -10px"
                  >React</v-card-subtitle
                >
              </v-row>
              <v-row
                style="
                  background: linear-gradient(90deg, #e6eaf1 20%, white 0%);
                  height: 30px;
                  margin-top: 25px;
                "
              >
                <v-card-subtitle style="margin-top: -10px; color: black"
                  >23%</v-card-subtitle
                >
                <v-card-subtitle style="margin-top: -10px"
                  >Angular</v-card-subtitle
                >
              </v-row>
              <v-row
                style="
                  background: linear-gradient(90deg, #e6eaf1 10%, white 0%);
                  height: 30px;
                  margin-top: 25px;
                "
              >
                <v-card-subtitle style="margin-top: -10px; color: black"
                  >8%</v-card-subtitle
                >
                <v-card-subtitle style="margin-top: -10px; margin-left: 7px"
                  >Other</v-card-subtitle
                >
              </v-row>
            </div>
            <v-row>
              <v-card-subtitle
                style="color: #8d9598; font-size: 12px; margin-top: 10px"
                >129 Votes</v-card-subtitle
              >
            </v-row>
          </div>
        </div>
      </div>
      <div
        id="ad"
        style="
          margin-top: 50px;
          margin-right:2%
          width: 20%;
          border: 1px solid #4173a3;
          width: 300px;
          height: 640px;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        place ad here
      </div>
    </div>
  </v-main>
</template>

<style>
@media only screen and (max-width: 850px) {
  #ad {
    display: none !important;
  }
}

@media only screen and (max-width: 600px) {
  #main {
    margin-left: -20%;
  }
  #vote {
    margin-left: 50% !important;
  }
  #select {
    margin-left: -100px !important;
  }
}

@media only screen and (max-width: 450px) {
  #main {
    margin-left: -30%;
    font-size: 10px;
  }
  #title {
    font-size: 17px;
    margin-left: -10px;
  }
}
</style>