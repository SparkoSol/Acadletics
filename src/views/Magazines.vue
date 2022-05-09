<template>
  <v-main>
    <div style="display: flex">
      <div id="img" style="width: 10%; justify-content: center; align-items: center">
        <v-img style="margin-left: 20px; margin-top: 60px" width="68px" height="58px"
          src="../assets/images/Group 39699.png"></v-img>
      </div>

      <div id="main" style="margin-top: 20px">
        <div id="serach" style="display: flex">
          <v-col id="sbar" cols="12" sm="6" md="7">
            <v-text-field label="Search" outlined dense style="border-radius: 10px"></v-text-field>
          </v-col>
          <v-btn id="sicon" color="primary" style="margin-top: 12px; margin-left: -2%; height: 40px">
            <v-icon>search</v-icon>
          </v-btn>

          <v-btn id="setting" style="
              margin-left: 2%;
              margin-top: 13px;
              background-color: transparent;
            ">
            <v-icon color="#4173A3">tune</v-icon>
          </v-btn>
        </div>

        <div style="display: flex; margin-bottom: 100px">
          <div id="cards" style="width: 80%">
            <v-row id="row1">
              <v-card id="card1" style="width: 280px; height: 310px; margin: 0px 20px 0px 0px">
                <v-img width="100%" src="../assets/images/Singapore1.png"></v-img>
                <v-card-title style="font-size: 15px; font-weight: bold; margin-top: -20px">Ron Champion of 2022
                </v-card-title>
                <v-card-subtitle style="font-size: 9px; line-height: 16px">otam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis
                  et quasi architectoconsectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore
                </v-card-subtitle>
                <v-row style="padding-left: 55%">
                  <p style="font-size: 8px; margin-right: 10px; margin-top: 4px">
                    1 month ago
                  </p>
                  <h6 style="font-size: 12px">View more</h6>
                </v-row>
              </v-card>
              <div style="height: 20px"></div>

              <v-card id="card2" style="width: 280px; height: 310px; margin: 0px 20px 0px 0px">
                <v-img width="100%" src="../assets/images/Singapore2.png"></v-img>
                <v-card-title style="font-size: 15px; font-weight: bold; margin-top: -20px">John A+ Record
                </v-card-title>
                <v-card-subtitle style="font-size: 9px; line-height: 16px">otam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis
                  et quasi architectoconsectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore
                </v-card-subtitle>
                <v-row style="padding-left: 55%">
                  <p style="font-size: 8px; margin-right: 10px; margin-top: 4px">
                    1 month ago
                  </p>
                  <h6 style="font-size: 12px">View more</h6>
                </v-row>
              </v-card>
              <div style="height: 20px"></div>

              <v-card id="card3" style="width: 280px; height: 310px; margin: 0px 20px 0px 0px">
                <v-img width="100%" src="../assets/images/Singapore3.png"></v-img>
                <v-card-title style="font-size: 15px; font-weight: bold; margin-top: -20px">Why Rick is the best A.D?
                </v-card-title>
                <v-card-subtitle style="font-size: 9px; line-height: 16px">otam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis
                  et quasi architectoconsectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore
                </v-card-subtitle>
                <v-row style="padding-left: 55%">
                  <p style="font-size: 8px; margin-right: 10px; margin-top: 4px">
                    1 month ago
                  </p>
                  <h6 style="font-size: 12px">View more</h6>
                </v-row>
              </v-card>
            </v-row>

            <v-row id="row2" style="margin-top: 40px">
              <v-card id="card4" style="width: 280px; height: 310px; margin: 0px 20px 0px 0px">
                <v-img width="100%" src="../assets/images/Singapore4.png"></v-img>
                <v-card-title style="font-size: 15px; font-weight: bold; margin-top: -20px">Richard A.A of the month
                </v-card-title>
                <v-card-subtitle style="font-size: 9px; line-height: 16px">otam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis
                  et quasi architectoconsectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore
                </v-card-subtitle>
                <v-row style="padding-left: 55%">
                  <p style="font-size: 8px; margin-right: 10px; margin-top: 4px">
                    1 month ago
                  </p>
                  <h6 style="font-size: 12px">View more</h6>
                </v-row>
              </v-card>
              <div style="height: 20px"></div>

              <v-card id="card5" style="width: 280px; height: 310px; margin: 0px 20px 0px 0px">
                <v-img width="100%" src="../assets/images/Singapore2.png"></v-img>
                <v-card-title style="font-size: 15px; font-weight: bold; margin-top: -20px">John A+ Record
                </v-card-title>
                <v-card-subtitle style="font-size: 9px; line-height: 16px">otam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis
                  et quasi architectoconsectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore
                </v-card-subtitle>
                <v-row style="padding-left: 55%">
                  <p style="font-size: 8px; margin-right: 10px; margin-top: 4px">
                    1 month ago
                  </p>
                  <h6 style="font-size: 12px">View more</h6>
                </v-row>
              </v-card>
              <div style="height: 20px"></div>
              <v-card id="card6" style="width: 280px; height: 310px; margin: 0px 20px 0px 0px">
                <v-img width="100%" src="../assets/images/Singapore3.png"></v-img>
                <v-card-title style="font-size: 15px; font-weight: bold; margin-top: -20px">Why Rick is the best A.D?
                </v-card-title>
                <v-card-subtitle style="font-size: 9px; line-height: 16px">otam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis
                  et quasi architectoconsectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore
                </v-card-subtitle>
                <v-row style="padding-left: 55%">
                  <p style="font-size: 8px; margin-right: 10px; margin-top: 4px">
                    1 month ago
                  </p>
                  <h6 style="font-size: 12px">View more</h6>
                </v-row>
              </v-card>
            </v-row>
          </div>
          <div id="ad" style="
              width: 20%;
              border: 1px solid #4173a3;
              width: 300px;
              height: 640px;
              display: flex;
              justify-content: center;
              align-items: center;
            ">
            place ad here
          </div>
        </div>
      </div>
    </div>
  </v-main>
</template>

<style>
@media only screen and (max-width: 1287px) {
  #cards {
    display: flex;
    margin-left: 100px;
  }

  #row1 {
    margin-top: 40px;
  }

  #row2,
  #row1 {
    display: flex;
    flex-direction: column;
  }

  #serach {
    margin-left: 8%;
  }
}

@media only screen and (max-width: 1080px) {
  #img {
    display: none;
  }

  #main {
    margin-left: -40px;
  }
}

@media only screen and (max-width: 900px) {
  #cards {
    flex-direction: column;
  }

}

@media only screen and (max-width: 850px) {
  #main {
    margin-left: -30px !important;
  }
}

@media only screen and (max-width: 590px) {
  #sbar {
    width: 0px;
    margin-left: 4px;
  }
}

@media only screen and (max-width: 480px) {
  #setting {
    display: none;
  }
}

@media only screen and (max-width: 640px) {
  #ad {
    display: none !important;
  }
}
</style>