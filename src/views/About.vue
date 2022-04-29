<template>
  <v-main>
    <div>
      <v-img id="footer_img" src="../assets/images/Group 39724.png"></v-img>
    </div>
    <v-container id="footer_main" style="display: flex; margin-top: 30px">
      <div id="footer_content1" style="width: 50%; margin-top: 40px">
        <v-card-title
          id="about_title"
          style="
            font-size: 40px;
            width: 70%;
            font-weight: bold;
            line-height: 50px;
          "
          >Trust and quality are our atuus</v-card-title
        >
        <v-card-subtitle
          id="about_subtitle1"
          style="margin-top: 2px; font-weight: 500; color: #3d3d3d"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.</v-card-subtitle
        >
        <v-card-subtitle
          id="about_subtitle2"
          style="font-size: 11px; margin-top: -15px"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. "At vero eos et accusamus et iusto
          odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque corrupti quos dolores et quas molestias excepturi sint
          occaecati cupiditate non provident, similique sunt in culpa qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
          harum quidem rerum facilis est et expedita distinctio.
        </v-card-subtitle>
      </div>
      <div id="footer_content2" style="width: 50%; padding: 30px">
        <v-row style="">
          <v-img style="margin: 10px" src="../assets/images/iStock.png"></v-img>
          <v-img
            style="margin: 10px"
            src="../assets/images/National.png"
          ></v-img>
        </v-row>
        <v-row>
          <v-img
            style="margin: 0px 10px"
            src="../assets/images/School-.png"
          ></v-img>
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>

<style>
@media only screen and (max-width: 1265px) {
  #about_title {
    width: 100% !important;
  }
}

@media only screen and (max-width: 800px) {
  #about_title {
    font-size: 30px !important;
    line-height: 40px !important;
  }
  #about_subtitle1 {
    font-size: 12px !important;
  }
  #about_subtitle2 {
    font-size: 10px !important;
  }
}

@media only screen and (max-width: 660px) {
  #footer_main {
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
  }

  #footer_content1,
  #footer_content2 {
    width: 80% !important;
  }
}
</style>