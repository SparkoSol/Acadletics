<template>
  <v-main>
    <div>
      <v-img style="width: 100%" src="../assets/images/Group 39722.png"></v-img>

      <v-img
      id="contact_map"
        style="margin: 20px 0px; margin-left: 25%"
        width="50%"
        src="../assets/images/Group 66.png"
      ></v-img>
    </div>

    <div style="margin-top: 40px; margin-left: 80px">
      <v-card-title
      id="form-title"
        style="
          color: #3d3d3d;
          font-weight: bold;
          font-size: 30px;
          margin-left: -12px;
        "
        >Contact us to get free support</v-card-title
      >
      <div id="contact_form" style="display: flex; margin-bottom: 20px">
        <div
          id="contact_form1"
          style="display: flex; width: 70%; margin-top: 10px"
        >
          <div id="contact_desc" style="width: 50%">
            <v-textarea
              rows="8"
              outlined
              background-color="#E6EAF1"
              label="Description"
            ></v-textarea>
          </div>
          <div id="contact_inputs" style="margin: 0px 10px">
            <v-text-field
              outlined
              background-color="#E6EAF1"
              label="Subject"
            ></v-text-field>
            <v-text-field
              style="margin-top: -20px"
              outlined
              background-color="#E6EAF1"
              label="Name / Surname"
            ></v-text-field>
            <v-text-field
              style="margin-top: -20px"
              outlined
              background-color="#E6EAF1"
              label="Email"
            ></v-text-field>
            <v-btn
              style="
                margin-top: -20px;
                color: white;
                background-color: #4173a3;
                width: 100%;
                height: 50px;
                font-size: 18px;
              "
              >Send
              <v-icon style="margin-left: 6px" small color="white">send</v-icon>
            </v-btn>
          </div>
        </div>
        <div
          id="contact_form2"
          style="width: 30%; display: flex; margin-left: -5%"
        >
          <div style="margin-right: 8%; height: 270px">
            <v-divider
              id="divider"
              style="background-color: #4173a3"
              vertical
            ></v-divider>
          </div>
          <div>
            <v-row style="display: flex; align-items: center">
              <div>
                <v-btn small color="#4173A3" fab>
                  <v-icon color="white">location_on</v-icon>
                </v-btn>
              </div>
              <div>
                <v-card-title
                  style="
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: -22px;
                  "
                  >Location</v-card-title
                >
                <v-card-subtitle style="font-size: 12px"
                  >Accusamus et iusto odio dignissimos
                </v-card-subtitle>
                <v-card-subtitle style="margin-top: -34px; font-size: 12px"
                  >praesentium voluptatum deleniti</v-card-subtitle
                >
              </div>
            </v-row>

            <v-row style="display: flex; align-items: center">
              <div>
                <v-btn small color="#4173A3" fab>
                  <v-icon color="white">phone</v-icon>
                </v-btn>
              </div>
              <div>
                <v-card-title
                  style="
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: -22px;
                  "
                  >Phone</v-card-title
                >
                <v-card-subtitle style="font-size: 12px"
                  >202-555-0105
                </v-card-subtitle>
                <v-card-subtitle style="font-size: 12px; margin-top: -34px"
                  >+1-202-555-0105</v-card-subtitle
                >
              </div>
            </v-row>

            <v-row style="display: flex; align-items: center">
              <div>
                <v-btn small color="#4173A3" fab>
                  <v-icon color="white">mail</v-icon>
                </v-btn>
              </div>
              <div>
                <v-card-title
                  style="
                    font-size: 15px;
                    font-weight: bold;
                    margin-bottom: -22px;
                  "
                  >Email</v-card-title
                >
                <v-card-subtitle style="font-size: 12px"
                  >example@yahoo.com
                </v-card-subtitle>
                <v-card-subtitle style="font-size: 12px; margin-top: -38px"
                  >exampleemail2@yahoo.com</v-card-subtitle
                >
              </div>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </v-main>
</template>

<style>
@media only screen and (max-width: 1280px) {
  #contact_form1 {
    margin-left: -65px;
  }
  #contact_form2 {
    margin-left: 1% !important;
  }
}

@media only screen and (max-width: 1075px) {
  #contact_form {
    flex-direction: column;
    width: 100%;
  }
  #contact_form1 {
    width: 100% !important;
    margin-left: 0px;
  }

  #contact_form2 {
    width: 100% !important;
  }
  #divider {
    display: none;
  }
}

@media only screen and (max-width: 800px) {
  #contact_form1 {
    flex-direction: column;
    margin-left: -50px;
  }
  #contact_form2 {
    margin-top: 50px;
    margin-left: -70px !important;
  }

  #contact_desc {
    width: 100% !important;
  }

  #contact_inputs {
    width: 100% !important;
    margin-left: 0px !important;
  }
}

@media only screen and (max-width: 620px) {
  #form-title {
    font-size: 20px !important;
    margin-left: -60px !important;
  }
  #contact_map {
    height: 150px;
    width: 70% !important;
    margin-left: 15% !important;
  }
}

@media only screen and (max-width: 400px) {
  #contact_form2 {
    margin-left: -30px !important;
  }
  #form-title {
    font-size: 16px !important;
  }
}
</style>