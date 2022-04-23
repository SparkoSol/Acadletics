<template>
  <div>
    <!-- HEADER -->
    <v-main class="homeHeaderBG">
      <div class="homeHeader">
        <v-card-text id="homeHeader-content1">
          <v-card-title id="homeHeader-content1-title"
            >Lorem ipsum dolor</v-card-title
          >
          <v-card-subtitle id="homeHeader-content1-subtitle"
            >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae
          </v-card-subtitle>
          <v-card-actions>
            <v-row id="homeHeader-content1-btnRow">
              <v-btn
                id="homeHeader-content1-btn"
                outlined
                rounded
                style="margin-right: 20px"
                >Learn More</v-btn
              >
              <v-btn id="homeHeader-content1-btn" outlined rounded
                >Download</v-btn
              >
            </v-row>
          </v-card-actions>
        </v-card-text>

        <v-card-text id="homeHeader-content2">
          <v-img
            id="homeHeader-football"
            src="../assets/images/football.png"
          ></v-img>

          <v-img
            id="homeHeader-man"
            src="../assets/images/main img.png"
          ></v-img>

          <v-img id="homeHeader-seek" src="../assets/images/Seek.png"></v-img>
        </v-card-text>
      </div>
    </v-main>

    <!-- Our Stars -->
    <!-- Our Stars -->
    <!-- Our Stars -->
    <v-container
      style="display: flex; justify-content: center; margin-top: 20px"
    >
      <v-card-title
        style="
          text-transform: uppercase;
          color: #4173a3;
          font-size: 30px;
          font-weight: 700;
        "
        >Our Stars</v-card-title
      >
    </v-container>

    <div
      style="
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
        margin-top: 15px;
      "
    >
      <div id="ourStars-card1" style="display: flex">
        <v-card class="stars-card1" style="display: flex">
          <v-img
            height="100%"
            width="150px"
            src="../assets/images/1x.png"
          ></v-img>

          <v-card-text style="margin-top: -8px">
            <v-img
              height="100px"
              width="80px"
              src="../assets/images/Group 39745.png"
            ></v-img>
            <v-card-title
              style="
                margin-left: -24px;
                margin-bottom: -24px;
                margin-top: 10px;
                color: #3d3d3d;
                font-size: 15px;
                font-weight: bold;
              "
              >John</v-card-title
            >
            <v-row style="display: flex">
              <v-icon small>school</v-icon>
              <h6 style="margin-left: 5px; color: #4169e1">Harward</h6>
            </v-row>
            <v-row style="display: flex; margin-top: 8px">
              <v-icon small>book</v-icon>
              <h6 style="margin-left: 5px">BasketBall</h6>
            </v-row>
            <v-row
              style="
                display: flex;
                justify-content: space-around;
                margin-top: 20px;
              "
            >
              <h6 style="font-size: 8px">April</h6>
              <h6 style="font-size: 8px">
                <span style="color: #3d3d3d">Votes:</span> 350
              </h6>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card
          class="stars-card2"
          style="display: flex; margin: 0px 0px 0px 30px"
        >
          <v-img
            height="100%"
            width="150px"
            src="../assets/images/2x.png"
          ></v-img>

          <v-card-text style="margin-top: -8px">
            <v-img
              height="100px"
              width="80px"
              src="../assets/images/Group 39745.png"
            ></v-img>
            <v-card-title
              style="
                margin-left: -24px;
                margin-bottom: -24px;
                margin-top: 10px;
                color: #3d3d3d;
                font-size: 15px;
                font-weight: bold;
              "
              >Anna</v-card-title
            >
            <v-row style="display: flex">
              <v-icon small>school</v-icon>
              <h6 style="margin-left: 5px; color: #4169e1">Harward</h6>
            </v-row>
            <v-row style="display: flex; margin-top: 8px">
              <v-icon small>book</v-icon>
              <h6 style="margin-left: 5px">Biology</h6>
            </v-row>
            <v-row
              style="
                display: flex;
                justify-content: space-around;
                margin-top: 20px;
              "
            >
              <h6 style="font-size: 8px">April</h6>
              <h6 style="font-size: 8px">
                <span style="color: #3d3d3d">Votes:</span> 350
              </h6>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
      <div id="ourStars-card2" style="display: flex">
        <v-card
          class="stars-card3"
          style="display: flex; margin: 0px 0px 0px 30px"
        >
          <v-img
            height="100%"
            width="150px"
            src="../assets/images/3x.png"
          ></v-img>

          <v-card-text style="margin-top: -8px">
            <v-img
              height="100px"
              width="80px"
              src="../assets/images/Group 39745.png"
            ></v-img>
            <v-card-title
              style="
                margin-left: -24px;
                margin-bottom: -24px;
                margin-top: 10px;
                color: #3d3d3d;
                font-size: 15px;
                font-weight: bold;
              "
              >Rick</v-card-title
            >
            <v-row style="display: flex">
              <v-icon small>school</v-icon>
              <h6 style="margin-left: 5px; color: #4169e1">Harward</h6>
            </v-row>
            <v-row style="display: flex; margin-top: 8px">
              <v-icon small>book</v-icon>
              <h6 style="margin-left: 5px">Physics</h6>
            </v-row>
            <v-row
              style="
                display: flex;
                justify-content: space-around;
                margin-top: 20px;
              "
            >
              <h6 style="font-size: 8px">April</h6>
              <h6 style="font-size: 8px">
                <span style="color: #3d3d3d">Votes:</span> 350
              </h6>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card
          class="stars-card4"
          style="display: flex; margin: 0px 0px 0px 30px"
        >
          <v-img
            height="100%"
            width="150px"
            src="../assets/images/4x.png"
          ></v-img>

          <v-card-text style="margin-top: -8px">
            <v-img
              height="100px"
              width="80px"
              src="../assets/images/Group 39745.png"
            ></v-img>
            <v-card-title
              style="
                margin-left: -24px;
                margin-bottom: -24px;
                margin-top: 10px;
                color: #3d3d3d;
                font-size: 15px;
                font-weight: bold;
              "
              >Fib</v-card-title
            >
            <v-row style="display: flex">
              <v-icon small>school</v-icon>
              <h6 style="margin-left: 5px; color: #4169e1">Harward</h6>
            </v-row>
            <v-row style="display: flex; margin-top: 8px">
              <v-icon small>book</v-icon>
              <h6 style="margin-left: 5px">Swimming</h6>
            </v-row>
            <v-row
              style="
                display: flex;
                justify-content: space-around;
                margin-top: 20px;
              "
            >
              <h6 style="font-size: 8px">April</h6>
              <h6 style="font-size: 8px">
                <span style="color: #3d3d3d">Votes:</span> 350
              </h6>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </div>

    <!-- PAST MAGAZINES -->
    <!-- PAST MAGAZINES -->
    <!-- PAST MAGAZINES -->
    <div style="background-color: #e6eaf1">
      <v-container style="display: flex; justify-content: center">
        <v-card-title
          style="
            text-transform: uppercase;
            font-size: 30px;
            font-weight: bold;
            color: #3d3d3d;
          "
          >Past Magazines</v-card-title
        >
      </v-container>
      <v-sheet style="background-color: transparent; padding-bottom: 40px">
        <v-slide-group
          v-model="moddel"
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item style="margin-left: 24px">
            <v-card
              style="width: 260px; height: 300px; margin: 0px 50px 0px 0px"
            >
              <v-card-text>
                <v-img
                  height="160px"
                  width="100%"
                  src="../assets/images/432-0001.png"
                ></v-img>
              </v-card-text>
              <v-card-text>
                <v-card-title
                  style="
                    margin: -36px 0px 8px -16px;
                    color: #0c1125;
                    font-weight: bold;
                    font-size: 14px;
                  "
                  >Best Scholar</v-card-title
                >
                <v-card-subtitle
                  style="
                    color: #8d9598;
                    font-size: 12px;
                    line-height: 16px;
                    margin: -20px 0px 10px -16px;
                  "
                  >otam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto</v-card-subtitle
                >
                <h6
                  style="color: #3d3d3d; text-align: right; margin-top: -22px"
                >
                  March, 2022
                </h6>
              </v-card-text>
            </v-card>
          </v-slide-item>

          <v-slide-item>
            <v-card
              style="width: 260px; height: 300px; margin: 0px 50px 0px 0px"
            >
              <v-card-text>
                <v-img
                  height="160px"
                  width="100%"
                  src="../assets/images/432-0001.png"
                ></v-img>
              </v-card-text>
              <v-card-text>
                <v-card-title
                  style="
                    margin: -36px 0px 8px -16px;
                    color: #0c1125;
                    font-weight: bold;
                    font-size: 14px;
                  "
                  >Best Scholar</v-card-title
                >
                <v-card-subtitle
                  style="
                    color: #8d9598;
                    font-size: 12px;
                    line-height: 16px;
                    margin: -20px 0px 10px -16px;
                  "
                  >otam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto</v-card-subtitle
                >
                <h6
                  style="color: #3d3d3d; text-align: right; margin-top: -22px"
                >
                  March, 2022
                </h6>
              </v-card-text>
            </v-card>
          </v-slide-item>

          <v-slide-item>
            <v-card
              style="width: 260px; height: 300px; margin: 0px 50px 0px 0px"
            >
              <v-card-text>
                <v-img
                  height="160px"
                  width="100%"
                  src="../assets/images/432-0001.png"
                ></v-img>
              </v-card-text>
              <v-card-text>
                <v-card-title
                  style="
                    margin: -36px 0px 8px -16px;
                    color: #0c1125;
                    font-weight: bold;
                    font-size: 14px;
                  "
                  >Best Scholar</v-card-title
                >
                <v-card-subtitle
                  style="
                    color: #8d9598;
                    font-size: 12px;
                    line-height: 16px;
                    margin: -20px 0px 10px -16px;
                  "
                  >otam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto</v-card-subtitle
                >
                <h6
                  style="color: #3d3d3d; text-align: right; margin-top: -22px"
                >
                  March, 2022
                </h6>
              </v-card-text>
            </v-card>
          </v-slide-item>

          <v-slide-item>
            <v-card
              style="width: 260px; height: 300px; margin: 0px 50px 0px 0px"
            >
              <v-card-text>
                <v-img
                  height="160px"
                  width="100%"
                  src="../assets/images/432-0001.png"
                ></v-img>
              </v-card-text>
              <v-card-text>
                <v-card-title
                  style="
                    margin: -36px 0px 8px -16px;
                    color: #0c1125;
                    font-weight: bold;
                    font-size: 14px;
                  "
                  >Best Scholar</v-card-title
                >
                <v-card-subtitle
                  style="
                    color: #8d9598;
                    font-size: 12px;
                    line-height: 16px;
                    margin: -20px 0px 10px -16px;
                  "
                  >otam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto</v-card-subtitle
                >
                <h6
                  style="color: #3d3d3d; text-align: right; margin-top: -22px"
                >
                  March, 2022
                </h6>
              </v-card-text>
            </v-card>
          </v-slide-item>

          <v-slide-item>
            <v-card
              style="width: 260px; height: 300px; margin: 0px 50px 0px 0px"
            >
              <v-card-text>
                <v-img
                  height="160px"
                  width="100%"
                  src="../assets/images/432-0001.png"
                ></v-img>
              </v-card-text>
              <v-card-text>
                <v-card-title
                  style="
                    margin: -36px 0px 8px -16px;
                    color: #0c1125;
                    font-weight: bold;
                    font-size: 14px;
                  "
                  >Best Scholar</v-card-title
                >
                <v-card-subtitle
                  style="
                    color: #8d9598;
                    font-size: 12px;
                    line-height: 16px;
                    margin: -20px 0px 10px -16px;
                  "
                  >otam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto</v-card-subtitle
                >
                <h6
                  style="color: #3d3d3d; text-align: right; margin-top: -22px"
                >
                  March, 2022
                </h6>
              </v-card-text>
            </v-card>
          </v-slide-item>

          <v-slide-item>
            <v-card style="width: 260px; height: 300px">
              <v-card-text>
                <v-img
                  height="160px"
                  width="100%"
                  src="../assets/images/432-0001.png"
                ></v-img>
              </v-card-text>
              <v-card-text>
                <v-card-title
                  style="
                    margin: -36px 0px 8px -16px;
                    color: #0c1125;
                    font-weight: bold;
                    font-size: 14px;
                  "
                  >Best Scholar</v-card-title
                >
                <v-card-subtitle
                  style="
                    color: #8d9598;
                    font-size: 12px;
                    line-height: 16px;
                    margin: -20px 0px 10px -16px;
                  "
                  >otam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto</v-card-subtitle
                >
                <h6
                  style="color: #3d3d3d; text-align: right; margin-top: -22px"
                >
                  March, 2022
                </h6>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>

    <!-- Nomination Details -->
    <!-- Nomination Details -->
    <!-- Nomination Details -->
    <v-container style="display: flex; margin-top: 40px">
      <v-container-text style="width: 50%">
        <v-card-title
          style="
            font-size: 35px;
            color: #3d3d3d;
            font-weight: 600;
            text-transform: uppercase;
          "
          >Nomination Details</v-card-title
        >
        <v-card-subtitle style="margin-top: 10px; color: #646464; width: 80%"
          >similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </v-card-subtitle>
        <v-container
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-right: 140px;
          "
        >
          <v-img
            height="239px"
            width="239px"
            src="../assets/images/form.png"
          ></v-img>
          <v-btn
            rounded
            style="
              width: 300px;
              height: 60px;
              margin-top: 30px;
              font-size: 16px;
              font-weight: regular;
              color: white;
              background-color: #4173a3;
            "
            >Submit form</v-btn
          >
        </v-container>
      </v-container-text>
      <v-container-text style="width: 50%">
        <v-expansion-panels v-model="model">
          <v-expansion-panel
            v-for="(item, i) in items"
            :key="i"
            style="margin: 10px; padding: 17px; border-radius: 5px"
          >
            <v-expansion-panel-header
              style="color: #0c1125; font-weight: bold"
              >{{ item.question }}</v-expansion-panel-header
            >
            <v-expansion-panel-content
              style="font-size: 10px; color: #8d9598; font-weight: bold"
            >
              {{ item.answer }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container-text>
    </v-container>
    <v-main class="schoolBg" style="margin-top: 50px">
      <v-container style="display: flex; margin-top: 122px">
        <v-card-text style="margin-left: -40px">
          <v-card-title style="font-size: 30px; font-weight: bold; color: white"
            >SCHOOLS</v-card-title
          >
          <v-card-subtitle
            style="font-size: 12px; color: white; margin-top: 0px"
            >Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nihil impedit quo minus id quod maxime placeat facere possimus,
            omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
            autem quibusdam et aut officiis debitis aut rerum necessitatibus
            saepe eveniet ut et voluptates repudiandae sint</v-card-subtitle
          >
          <v-btn
            rounded
            style="
              margin-left: 18px;
              background-color: #5291cc;
              color: white;
              border: 1px solid white;
            "
          >
            Explore More
          </v-btn>
        </v-card-text>

        <v-card-text style="display: flex; margin-right: -50px">
          <div style="display: flex">
            <v-card
              style="
                width: 160px;
                height: 185px;
                padding-top: 1px;
                margin: 0px 30px 0px 0px;
              "
            >
              <v-img
                width="130px"
                height="62px"
                src="../assets/images/pngegg (1).png"
                style="margin-left: 15px; margin-top: 20px"
              ></v-img>
              <v-card-title
                style="
                  color: #0c1125;
                  font-size: 10px;
                  font-weight: bold;
                  margin-bottom: -22px;
                  margin-left: -5px;
                "
                >APS model school
              </v-card-title>
              <v-card-subtitle
                style="
                  color: #8d9598;
                  font-size: 8px;
                  line-height: 14px;
                  margin-left: -5px;
                "
                >100% result on recent result, more than 20 athletes playing on
                national level.</v-card-subtitle
              >
              <h6
                style="
                  font-size: 8px;
                  text-align: right;
                  padding-right: 10px;
                  margin-top: -20px;
                "
              >
                Location123
              </h6>
            </v-card>

            <v-card
              style="
                width: 160px;
                height: 185px;
                padding-top: 1px;
                margin: 0px 30px 0px 0px;
              "
            >
              <v-img
                width="130px"
                height="62px"
                src="../assets/images/pngegg (1).png"
                style="margin-left: 15px; margin-top: 20px"
              ></v-img>
              <v-card-title
                style="
                  color: #0c1125;
                  font-size: 10px;
                  font-weight: bold;
                  margin-bottom: -22px;
                  margin-left: -5px;
                "
                >APS model school
              </v-card-title>
              <v-card-subtitle
                style="
                  color: #8d9598;
                  font-size: 8px;
                  line-height: 14px;
                  margin-left: -5px;
                "
                >100% result on recent result, more than 20 athletes playing on
                national level.</v-card-subtitle
              >
              <h6
                style="
                  font-size: 8px;
                  text-align: right;
                  padding-right: 10px;
                  margin-top: -20px;
                "
              >
                Location123
              </h6>
            </v-card>
          </div>

          <div style="display: flex">
            <v-card
              style="
                width: 160px;
                height: 185px;
                padding-top: 1px;
                margin: 0px 30px 0px 0px;
              "
            >
              <v-img
                width="130px"
                height="62px"
                src="../assets/images/pngegg (1).png"
                style="margin-left: 15px; margin-top: 20px"
              ></v-img>
              <v-card-title
                style="
                  color: #0c1125;
                  font-size: 10px;
                  font-weight: bold;
                  margin-bottom: -22px;
                  margin-left: -5px;
                "
                >APS model school
              </v-card-title>
              <v-card-subtitle
                style="
                  color: #8d9598;
                  font-size: 8px;
                  line-height: 14px;
                  margin-left: -5px;
                "
                >100% result on recent result, more than 20 athletes playing on
                national level.</v-card-subtitle
              >
              <h6
                style="
                  font-size: 8px;
                  text-align: right;
                  padding-right: 10px;
                  margin-top: -20px;
                "
              >
                Location123
              </h6>
            </v-card>

            <v-card
              style="
                width: 160px;
                height: 185px;
                padding-top: 1px;
                margin: 0px 30px 0px 0px;
              "
            >
              <v-img
                width="130px"
                height="62px"
                src="../assets/images/pngegg (1).png"
                style="margin-left: 15px; margin-top: 20px"
              ></v-img>
              <v-card-title
                style="
                  color: #0c1125;
                  font-size: 10px;
                  font-weight: bold;
                  margin-bottom: -22px;
                  margin-left: -5px;
                "
                >APS model school
              </v-card-title>
              <v-card-subtitle
                style="
                  color: #8d9598;
                  font-size: 8px;
                  line-height: 14px;
                  margin-left: -5px;
                "
                >100% result on recent result, more than 20 athletes playing on
                national level.</v-card-subtitle
              >
              <h6
                style="
                  font-size: 8px;
                  text-align: right;
                  padding-right: 10px;
                  margin-top: -20px;
                "
              >
                Location123
              </h6>
            </v-card>
          </div>
        </v-card-text>
      </v-container>
    </v-main>

    <!-- TESTIMONIALS -->
    <!-- TESTIMONIALS -->
    <!-- TESTIMONIALS -->
    <v-main style="background-color: #e6eaf1">
      <v-container
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        "
      >
        <v-card-title style="color: #3d3d3d; font-size: 30px; font-weight: bold"
          >TESTIMONIALS</v-card-title
        >

        <v-container style="display: flex; justify-content: center">
          <iframe
            width="700"
            height="350"
            src="https://www.youtube.com/embed/2gqgSmsA_Oo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <v-img
            style="position: absolute; right: 0px; bottom: 0px; width: 260px"
            src="../assets/images/poll.png"
          ></v-img>
        </v-container>
      </v-container>
    </v-main>

    <!-- Acadletics App -->
    <!-- Acadletics App -->
    <!-- Acadletics App -->
    <v-container style="display: flex; margin-top: 20px">
      <v-card-text style="width: 50%; margin-top: 40px">
        <v-card-title style="color: #3d3d3d; font-weight: bold; font-size: 35px"
          >ACADLETICS APP</v-card-title
        >
        <v-card-subtitle style="color: #646464; margin-top: 4px; width: 130%">
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </v-card-subtitle>
        <v-card-actions style="padding: 40px; margin-top: 20px">
          <v-card style="width: 180px; padding: 10px 20px 10px 20px">
            <router-link to="">
              <v-img width="100%" src="../assets/images/Image 7.png"></v-img>
            </router-link>
          </v-card>
          <v-card
            style="
              width: 180px;
              margin-left: 40px;
              padding: 10px 20px 10px 20px;
            "
          >
            <router-link to="">
              <v-img width="100%" src="../assets/images/Image 6.png"></v-img>
            </router-link>
          </v-card>
        </v-card-actions>
      </v-card-text>
      <v-card-text style="width: 50%; margin-left: 220px">
        <v-img
          height="450px"
          width="350px"
          src="../assets/images/mobile3.png"
        ></v-img>
      </v-card-text>
    </v-container>

    <!-- Home Footer -->
    <!-- Home Footer -->
    <!-- Home Footer -->

    <v-main style="background-color: #4173a3">
      <v-container style="display: flex">
        <v-card-text style="width: 36%">
          <v-img
            style="margin-left: 100px"
            width="200px"
            height="110px"
            src="../assets/images/Academics white.png"
          ></v-img>
          <v-card-subtitle style="color: white; font-size: 12px"
            >sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            Ut enim ad minim.
          </v-card-subtitle>

          <v-card-title style="color: white; font-size: 12px"
            >Registered address:
          </v-card-title>
          <v-card-subtitle
            style="color: white; font-size: 12px; margin-top: -20px"
            >uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat..
          </v-card-subtitle>
          <v-row
            style="display: flex; justify-content: center; margin: 15px 0px"
          >
            <v-card-actions
              style="height: 10px; width: 10px; padding: 0px 20px"
            >
              <router-link to="">
                <v-img
                  width="80%"
                  height="80%"
                  src="../assets/images/facebook.png"
                ></v-img>
              </router-link>
            </v-card-actions>
            <v-card-actions
              style="height: 10px; width: 10px; padding: 0px 20px"
            >
              <router-link to="">
                <v-img
                  width="80%"
                  height="80%"
                  src="../assets/images/instagram.png"
                ></v-img>
              </router-link>
            </v-card-actions>
            <v-card-actions
              style="height: 10px; width: 10px; padding: 0px 20px"
            >
              <router-link to="">
                <v-img
                  width="80%"
                  height="80%"
                  src="../assets/images/twitter.png"
                ></v-img>
              </router-link>
            </v-card-actions>
            <v-card-actions
              style="height: 10px; width: 10px; padding: 0px 20px"
            >
              <router-link to="">
                <v-img
                  width="80%"
                  height="80%"
                  src="../assets/images/linkedin.png"
                ></v-img>
              </router-link>
            </v-card-actions>
          </v-row>
        </v-card-text>
        <v-card-text style="width: 30%">
          <div style="display: flex; margin-top: 105px; margin-left: 100px">
            <v-divider
              vertical
              style="
                margin-right: 10px;
                border-color: white;
                height: 125px;
                margin-top: 22px;
              "
            ></v-divider>
            <v-list style="background-color: transparent">
              <v-list-item-content>
                <v-list-item-title style="color: white; font-size: 13px"
                  ><router-link
                    style="text-decoration: none; color: inherit"
                    to=""
                    >Magazines</router-link
                  ></v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title style="color: white; font-size: 13px"
                  ><router-link
                    style="text-decoration: none; color: inherit"
                    to=""
                    >Votes</router-link
                  ></v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title style="color: white; font-size: 13px"
                  ><router-link
                    style="text-decoration: none; color: inherit"
                    to=""
                    >Terms and conditions / Security</router-link
                  >
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title style="color: white; font-size: 13px"
                  ><router-link
                    style="text-decoration: none; color: inherit"
                    to=""
                    >Privacy / Cookies</router-link
                  >
                </v-list-item-title>
              </v-list-item-content>
            </v-list>
          </div>
        </v-card-text>
        <v-card-text style="width: 30%; margin-left: -40px">
          <div style="display: flex; margin-top: 120px; margin-left: 80px">
            <v-divider
              vertical
              style="
                margin-right: 10px;
                border-color: white;
                height: 90px;
                margin-top: 22px;
              "
            ></v-divider>
            <v-list style="background-color: transparent">
              <v-list-item-content>
                <v-list-item-title style="color: white; font-size: 13px"
                  ><router-link
                    style="text-decoration: none; color: inherit"
                    to=""
                    >Schools</router-link
                  ></v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title style="color: white; font-size: 13px"
                  ><router-link
                    style="text-decoration: none; color: inherit"
                    to=""
                    >About us</router-link
                  >
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title style="color: white; font-size: 13px"
                  ><router-link
                    style="text-decoration: none; color: inherit"
                    to=""
                    >Contact</router-link
                  >
                </v-list-item-title>
              </v-list-item-content>
            </v-list>
          </div>
        </v-card-text>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moddel: null,
      model: [],
      items: [
        {
          question:
            'Do I need to confirm in advance if travelling on a different train?',
          answer:
            "You don't need to let us know if you want to change trains, but you'ill need to check the terms of your ticket to see if it'll still be valid for a different train."
        },
        {
          question: 'How much luggage can I take on the train?',
          answer:
            "You don't need to let us know if you want to change trains, but you'ill need to check the terms of your ticket to see if it'll still be valid for a different train."
        },
        {
          question: 'How will I receive my tickets?',
          answer:
            "You don't need to let us know if you want to change trains, but you'ill need to check the terms of your ticket to see if it'll still be valid for a different train."
        },
        {
          question: 'What do the different seat options mean?',
          answer:
            "You don't need to let us know if you want to change trains, but you'ill need to check the terms of your ticket to see if it'll still be valid for a different train."
        }
      ]
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
* {
  font-family: poppins;
}
.homeHeaderBG {
  background: url('../assets/images/Group 133.png') no-repeat center center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
}
.homeHeader {
  display: flex;
}
#homeHeader-content1 {
  width: 50%;
  margin-top: 120px;
  padding: 0px 50px;
}
#homeHeader-content1-title {
  font-size: 40px;
  font-weight: 700;
  color: white;
}
#homeHeader-content1-subtitle {
  font-size: 23px;
  line-height: 40px;
  color: white;
  margin-top: 25px;
}
#homeHeader-content1-btnRow {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
#homeHeader-content1-btn {
  width: 120px;
  height: 40px;
  border: 1px solid white;
  color: white;
  background-color: #5291cc;
}
#homeHeader-content2 {
  width: 50%;
  display: flex;
}
#homeHeader-football {
  width: 100px;
  position: absolute;
  margin: 70px 0px 0px 0px;
  margin-left: 11%;
}
#homeHeader-man {
  height: 560px;
  margin-bottom: -15px;
}
#homeHeader-seek {
  width: 180px;
  height: 160px;
  position: absolute;
  margin: 38px 0px 0px 0px;
  margin-left: 28%;
}
.schoolBg {
  background: url('../assets/images/Intersection 1.png') no-repeat center center;
  height: 420px;
  top: 0;
  left: 0;
  background-size: cover;
}

@media only screen and (max-width: 1160px) {
  #ourStars-card1,
  #ourStars-card2 {
    flex-direction: column;
  }

  #stars-card2 {
    margin-right: 100px;
  }
}

@media only screen and (max-width: 1100px) {
  #homeHeader-content1-title {
    font-size: 30px;
  }
  #homeHeader-content1-subtitle {
    margin-top: 10px;
    font-size: 16px;
    line-height: 30px;
  }
  #homeHeader-football {
    margin-left: 6%;
  }
}

@media only screen and (max-width: 930px) {
  #homeHeader-seek {
    width: 150px;
    height: 150px;
    margin-top: 46px;
  }

  #homeHeader-man {
    height: 480px;
  }
}

@media only screen and (max-width: 860px) {
  #homeHeader-seek {
    width: 120px;
    height: 120px;
    margin-left: 30%;
  }
  #homeHeader-football {
    width: 80px;
    margin-top: 60px;
  }
  #homeHeader-man {
    height: 400px;
  }
  #homeHeader-content1-title {
    font-size: 20px;
  }
  #homeHeader-content1-subtitle {
    margin-top: -3px;
    font-size: 12px;
    line-height: 22px;
  }
  #homeHeader-content1-btnRow {
    margin-top: -2px;
  }
  #homeHeader-content1-btn {
    width: 80px;
    height: 30px;
    font-size: 10px;
  }
}

@media only screen and (max-width: 700px) {
  #homeHeader-content2 {
    display: none;
  }

  #homeHeader-content1 {
    width: 100%;
    margin: 50px 0px;
    padding: 0px 50px;
  }
  #homeHeader-content1-title {
    font-size: 30px;
    font-weight: 700;
    color: white;
  }
  #homeHeader-content1-subtitle {
    font-size: 16px;
    line-height: 30px;
    color: white;
    margin-top: 5px;
  }
  #homeHeader-content1-btnRow {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  #homeHeader-content1-btn {
    width: 120px;
    height: 40px;
    border: 1px solid white;
    color: white;
    background-color: #5291cc;
  }
}

@media only screen and (max-width: 360px) {
  #homeHeader-content1 {
    padding: 10px;
  }
  #homeHeader-content1-title {
    font-size: 22px;
  }
  #homeHeader-content1-subtitle {
    margin-top: 2px;
    font-size: 14px;
    line-height: 24px;
  }
}
</style>