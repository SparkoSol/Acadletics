<template>
  <div>
    <!-- HEADER -->
    <v-main class="homeHeaderBG">
      <div class="homeHeader">
        <v-card-text id="homeHeader-content1">
          <v-card-title id="homeHeader-content1-title">Lorem ipsum dolor</v-card-title>
          <v-card-subtitle id="homeHeader-content1-subtitle">"Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae
          </v-card-subtitle>
          <v-card-actions>
            <v-row id="homeHeader-content1-btnRow">
              <v-btn id="homeHeader-content1-btn" outlined rounded style="margin-right: 20px">Learn More</v-btn>
              <v-btn id="homeHeader-content1-btn" outlined rounded>Download</v-btn>
            </v-row>
          </v-card-actions>
        </v-card-text>

        <v-card-text id="homeHeader-content2">
          <v-img id="homeHeader-football" src="../assets/images/football.png"></v-img>

          <v-img id="homeHeader-man" src="../assets/images/main img.png"></v-img>

          <v-img id="homeHeader-seek" src="../assets/images/Seek.png"></v-img>
        </v-card-text>
      </div>
    </v-main>

    <!-- Our Stars -->
    <!-- Our Stars -->
    <!-- Our Stars -->
    <v-container style="display: flex; justify-content: center; margin-top: 20px">
      <v-card-title style="
          text-transform: uppercase;
          color: #4173a3;
          font-size: 30px;
          font-weight: 700;
        ">Our Stars</v-card-title>
    </v-container>

    <div id="starsMain" style="
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
        margin-top: 15px;
      ">
      <div id="ourStars-card1" style="display: flex">
        <v-card id="stars-card1" style="display: flex;">
          <v-img height="100%" width="150px" src="../assets/images/1x.png"></v-img>

          <v-card-text style="margin-top: -8px">
            <v-img height="100px" width="80px" src="../assets/images/Group 39745.png"></v-img>
            <v-card-title style="
                margin-left: -24px;
                margin-bottom: -24px;
                margin-top: 10px;
                color: #3d3d3d;
                font-size: 15px;
                font-weight: bold;
              ">John</v-card-title>
            <v-row style="display: flex">
              <v-icon small>school</v-icon>
              <h6 style="margin-left: 5px; color: #4169e1">Harward</h6>
            </v-row>
            <v-row style="display: flex; margin-top: 8px">
              <v-icon small>book</v-icon>
              <h6 style="margin-left: 5px">BasketBall</h6>
            </v-row>
            <v-row style="
                display: flex;
                justify-content: space-around;
                margin-top: 20px;
              ">
              <h6 style="font-size: 8px">April</h6>
              <h6 style="font-size: 8px">
                <span style="color: #3d3d3d">Votes:</span> 350
              </h6>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card id="stars-card2" style="display: flex; margin: 0px 0px 0px 30px">
          <v-img height="100%" width="150px" src="../assets/images/2x.png"></v-img>

          <v-card-text style="margin-top: -8px">
            <v-img height="100px" width="80px" src="../assets/images/Group 39745.png"></v-img>
            <v-card-title style="
                margin-left: -24px;
                margin-bottom: -24px;
                margin-top: 10px;
                color: #3d3d3d;
                font-size: 15px;
                font-weight: bold;
              ">Anna</v-card-title>
            <v-row style="display: flex">
              <v-icon small>school</v-icon>
              <h6 style="margin-left: 5px; color: #4169e1">Harward</h6>
            </v-row>
            <v-row style="display: flex; margin-top: 8px">
              <v-icon small>book</v-icon>
              <h6 style="margin-left: 5px">Biology</h6>
            </v-row>
            <v-row style="
                display: flex;
                justify-content: space-around;
                margin-top: 20px;
              ">
              <h6 style="font-size: 8px">April</h6>
              <h6 style="font-size: 8px">
                <span style="color: #3d3d3d">Votes:</span> 350
              </h6>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
      <div id="ourStars-card2" style="display: flex">
        <v-card id="stars-card3" style="display: flex; margin: 0px 0px 0px 30px">
          <v-img height="100%" width="150px" src="../assets/images/3x.png"></v-img>

          <v-card-text style="margin-top: -8px">
            <v-img height="100px" width="80px" src="../assets/images/Group 39745.png"></v-img>
            <v-card-title style="
                margin-left: -24px;
                margin-bottom: -24px;
                margin-top: 10px;
                color: #3d3d3d;
                font-size: 15px;
                font-weight: bold;
              ">Rick</v-card-title>
            <v-row style="display: flex">
              <v-icon small>school</v-icon>
              <h6 style="margin-left: 5px; color: #4169e1">Harward</h6>
            </v-row>
            <v-row style="display: flex; margin-top: 8px">
              <v-icon small>book</v-icon>
              <h6 style="margin-left: 5px">Physics</h6>
            </v-row>
            <v-row style="
                display: flex;
                justify-content: space-around;
                margin-top: 20px;
              ">
              <h6 style="font-size: 8px">April</h6>
              <h6 style="font-size: 8px">
                <span style="color: #3d3d3d">Votes:</span> 350
              </h6>
            </v-row>
          </v-card-text>
        </v-card>
        <div style="height: 20px"></div>

        <v-card id="stars-card4" style="display: flex; margin: 0px 0px 0px 30px">
          <v-img height="100%" width="150px" src="../assets/images/4x.png"></v-img>

          <v-card-text style="margin-top: -8px">
            <v-img height="100px" width="80px" src="../assets/images/Group 39745.png"></v-img>
            <v-card-title style="
                margin-left: -24px;
                margin-bottom: -24px;
                margin-top: 10px;
                color: #3d3d3d;
                font-size: 15px;
                font-weight: bold;
              ">Fib</v-card-title>
            <v-row style="display: flex">
              <v-icon small>school</v-icon>
              <h6 style="margin-left: 5px; color: #4169e1">Harward</h6>
            </v-row>
            <v-row style="display: flex; margin-top: 8px">
              <v-icon small>book</v-icon>
              <h6 style="margin-left: 5px">Swimming</h6>
            </v-row>
            <v-row style="
                display: flex;
                justify-content: space-around;
                margin-top: 20px;
              ">
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
        <v-card-title style="
            text-transform: uppercase;
            font-size: 30px;
            font-weight: bold;
            color: #3d3d3d;
          ">Past Magazines</v-card-title>
      </v-container>
      <v-sheet style="background-color: transparent; padding-bottom: 40px">
        <v-slide-group v-model="moddel" class="pa-4" active-class="success" show-arrows>
          <v-slide-item style="margin-left: 24px">
            <v-card style="width: 260px; height: 300px; margin: 0px 50px 0px 0px">
              <v-card-text>
                <v-img height="160px" width="100%" src="../assets/images/432-0001.png"></v-img>
              </v-card-text>
              <v-card-text>
                <v-card-title style="
                    margin: -36px 0px 8px -16px;
                    color: #0c1125;
                    font-weight: bold;
                    font-size: 14px;
                  ">Best Scholar</v-card-title>
                <v-card-subtitle style="
                    color: #8d9598;
                    font-size: 12px;
                    line-height: 16px;
                    margin: -20px 0px 10px -16px;
                  ">otam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto</v-card-subtitle>
                <h6 style="color: #3d3d3d; text-align: right; margin-top: -22px">
                  March, 2022
                </h6>
              </v-card-text>
            </v-card>
          </v-slide-item>

          <v-slide-item>
            <v-card style="width: 260px; height: 300px; margin: 0px 50px 0px 0px">
              <v-card-text>
                <v-img height="160px" width="100%" src="../assets/images/432-0001.png"></v-img>
              </v-card-text>
              <v-card-text>
                <v-card-title style="
                    margin: -36px 0px 8px -16px;
                    color: #0c1125;
                    font-weight: bold;
                    font-size: 14px;
                  ">Best Scholar</v-card-title>
                <v-card-subtitle style="
                    color: #8d9598;
                    font-size: 12px;
                    line-height: 16px;
                    margin: -20px 0px 10px -16px;
                  ">otam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto</v-card-subtitle>
                <h6 style="color: #3d3d3d; text-align: right; margin-top: -22px">
                  March, 2022
                </h6>
              </v-card-text>
            </v-card>
          </v-slide-item>

          <v-slide-item>
            <v-card style="width: 260px; height: 300px; margin: 0px 50px 0px 0px">
              <v-card-text>
                <v-img height="160px" width="100%" src="../assets/images/432-0001.png"></v-img>
              </v-card-text>
              <v-card-text>
                <v-card-title style="
                    margin: -36px 0px 8px -16px;
                    color: #0c1125;
                    font-weight: bold;
                    font-size: 14px;
                  ">Best Scholar</v-card-title>
                <v-card-subtitle style="
                    color: #8d9598;
                    font-size: 12px;
                    line-height: 16px;
                    margin: -20px 0px 10px -16px;
                  ">otam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto</v-card-subtitle>
                <h6 style="color: #3d3d3d; text-align: right; margin-top: -22px">
                  March, 2022
                </h6>
              </v-card-text>
            </v-card>
          </v-slide-item>

          <v-slide-item>
            <v-card style="width: 260px; height: 300px; margin: 0px 50px 0px 0px">
              <v-card-text>
                <v-img height="160px" width="100%" src="../assets/images/432-0001.png"></v-img>
              </v-card-text>
              <v-card-text>
                <v-card-title style="
                    margin: -36px 0px 8px -16px;
                    color: #0c1125;
                    font-weight: bold;
                    font-size: 14px;
                  ">Best Scholar</v-card-title>
                <v-card-subtitle style="
                    color: #8d9598;
                    font-size: 12px;
                    line-height: 16px;
                    margin: -20px 0px 10px -16px;
                  ">otam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto</v-card-subtitle>
                <h6 style="color: #3d3d3d; text-align: right; margin-top: -22px">
                  March, 2022
                </h6>
              </v-card-text>
            </v-card>
          </v-slide-item>

          <v-slide-item>
            <v-card style="width: 260px; height: 300px; margin: 0px 50px 0px 0px">
              <v-card-text>
                <v-img height="160px" width="100%" src="../assets/images/432-0001.png"></v-img>
              </v-card-text>
              <v-card-text>
                <v-card-title style="
                    margin: -36px 0px 8px -16px;
                    color: #0c1125;
                    font-weight: bold;
                    font-size: 14px;
                  ">Best Scholar</v-card-title>
                <v-card-subtitle style="
                    color: #8d9598;
                    font-size: 12px;
                    line-height: 16px;
                    margin: -20px 0px 10px -16px;
                  ">otam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto</v-card-subtitle>
                <h6 style="color: #3d3d3d; text-align: right; margin-top: -22px">
                  March, 2022
                </h6>
              </v-card-text>
            </v-card>
          </v-slide-item>

          <v-slide-item>
            <v-card style="width: 260px; height: 300px">
              <v-card-text>
                <v-img height="160px" width="100%" src="../assets/images/432-0001.png"></v-img>
              </v-card-text>
              <v-card-text>
                <v-card-title style="
                    margin: -36px 0px 8px -16px;
                    color: #0c1125;
                    font-weight: bold;
                    font-size: 14px;
                  ">Best Scholar</v-card-title>
                <v-card-subtitle style="
                    color: #8d9598;
                    font-size: 12px;
                    line-height: 16px;
                    margin: -20px 0px 10px -16px;
                  ">otam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto</v-card-subtitle>
                <h6 style="color: #3d3d3d; text-align: right; margin-top: -22px">
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
    <v-container id="mainNomination" style="display: flex; margin-top: 40px">
      <v-container-text id="nominationContent">
        <v-card-title style="
            font-size: 27px;
            color: #3d3d3d;
            font-weight: 600;
            text-transform: uppercase;
          ">Nomination Details</v-card-title>

        <v-card-subtitle style="margin-top: 10px; color: #646464">similique sunt in culpa qui officia deserunt mollitia
          animi, id est
          laborum et dolorum fuga.
        </v-card-subtitle>
        <v-container style="display: flex; flex-direction: column; align-items: center">
          <v-img height="239px" width="239px" src="../assets/images/form.png"></v-img>
          <v-btn rounded style="
              width: 260px;
              height: 60px;
              margin-top: 30px;
              font-size: 16px;
              font-weight: regular;
              color: white;
              background-color: #4173a3;
            ">Submit form</v-btn>
        </v-container>
      </v-container-text>
      <v-container-text style="width: 80%">
        <v-expansion-panels v-model="model">
          <v-expansion-panel v-for="(item, i) in items" :key="i"
            style="margin: 10px; padding: 17px; border-radius: 5px">
            <v-expansion-panel-header id="nominationQues" style="color: #0c1125; font-weight: bold">{{ item.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content id="nominationAns" style="font-size: 10px; color: #8d9598; font-weight: bold">
              {{ item.answer }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container-text>
    </v-container>

    <!-- Schools -->
    <!-- Schools -->
    <!-- Schools -->
    <v-main id="mainSchools" class="schoolBg" style="margin-top: 50px">
      <v-container id="mainSchol" style="display: flex; margin-top: 122px">
        <v-card-text id="schoolContent" style="margin-left: -40px">
          <div id="schoolText">
            <v-card-title style="font-size: 30px; font-weight: bold; color: white">SCHOOLS</v-card-title>
            <v-card-subtitle id="schoolsText" style="font-size: 12px; color: white; margin-top: 0px">Nam libero tempore,
              cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint</v-card-subtitle>
          </div>
          <div id="schoolBtn">
            <v-btn rounded style="
                margin-left: 18px;
                background-color: #5291cc;
                color: white;
                border: 1px solid white;
              ">
              Explore More
            </v-btn>
          </div>
        </v-card-text>

        <v-card-text id="schCards" style="display: flex; margin-right: -50px">
          <div id="schoolsCard" style="display: flex">
            <div id="schoolsCard1" style="width: 200px">
              <v-card id="scards" style="padding-top: 1px; margin: 0px 30px 0px 0px">
                <v-img id="schImg" width="130px" height="62px" src="../assets/images/pngegg (1).png"
                  style="margin-left: 10%; margin-top: 10%"></v-img>

                <v-card-title style="
                    color: #0c1125;
                    font-size: 10px;
                    font-weight: bold;
                    margin-bottom: -22px;
                    margin-left: -5px;
                  ">APS model school
                </v-card-title>
                <v-card-subtitle style="
                    color: #8d9598;
                    font-size: 8px;
                    line-height: 14px;
                    margin-left: -5px;
                  ">100% result on recent result, more than 20 athletes playing
                  on national level.</v-card-subtitle>
                <h6 style="
                    font-size: 8px;
                    text-align: right;
                    padding-right: 10px;
                    margin-top: -20px;
                  ">
                  Location123
                </h6>
              </v-card>
            </div>
            <div style="height: 20px"></div>
            <div id="schoolsCard2" style="width: 200px">
              <v-card id="scards" style="padding-top: 1px; margin: 0px 30px 0px 0px">
                <v-img id="schImg" width="130px" height="62px" src="../assets/images/pngegg (1).png"
                  style="margin-left: 10%; margin-top: 10%"></v-img>

                <v-card-title style="
                    color: #0c1125;
                    font-size: 10px;
                    font-weight: bold;
                    margin-bottom: -22px;
                    margin-left: -5px;
                  ">APS model school
                </v-card-title>
                <v-card-subtitle style="
                    color: #8d9598;
                    font-size: 8px;
                    line-height: 14px;
                    margin-left: -5px;
                  ">100% result on recent result, more than 20 athletes playing
                  on national level.</v-card-subtitle>
                <h6 style="
                    font-size: 8px;
                    text-align: right;
                    padding-right: 10px;
                    margin-top: -20px;
                  ">
                  Location123
                </h6>
              </v-card>
            </div>
            <div style="height: 20px"></div>
          </div>

          <div id="schoolsCard" style="display: flex">
            <div id="schoolsCard3" style="width: 200px">
              <v-card id="scards" style="padding-top: 1px; margin: 0px 30px 0px 0px">
                <v-img id="schImg" width="130px" height="62px" src="../assets/images/pngegg (1).png"
                  style="margin-left: 10%; margin-top: 10%"></v-img>

                <v-card-title style="
                    color: #0c1125;
                    font-size: 10px;
                    font-weight: bold;
                    margin-bottom: -22px;
                    margin-left: -5px;
                  ">APS model school
                </v-card-title>
                <v-card-subtitle style="
                    color: #8d9598;
                    font-size: 8px;
                    line-height: 14px;
                    margin-left: -5px;
                  ">100% result on recent result, more than 20 athletes playing
                  on national level.</v-card-subtitle>
                <h6 style="
                    font-size: 8px;
                    text-align: right;
                    padding-right: 10px;
                    margin-top: -20px;
                  ">
                  Location123
                </h6>
              </v-card>
            </div>
            <div style="height: 20px"></div>

            <div id="schoolsCard4" style="width: 200px">
              <v-card id="scards" style="padding-top: 1px; margin: 0px 30px 0px 0px">
                <v-img id="schImg" width="130px" height="62px" src="../assets/images/pngegg (1).png"
                  style="margin-left: 10%; margin-top: 10%"></v-img>

                <v-card-title style="
                    color: #0c1125;
                    font-size: 10px;
                    font-weight: bold;
                    margin-bottom: -22px;
                    margin-left: -5px;
                  ">APS model school
                </v-card-title>
                <v-card-subtitle style="
                    color: #8d9598;
                    font-size: 8px;
                    line-height: 14px;
                    margin-left: -5px;
                  ">100% result on recent result, more than 20 athletes playing
                  on national level.</v-card-subtitle>
                <h6 style="
                    font-size: 8px;
                    text-align: right;
                    padding-right: 10px;
                    margin-top: -20px;
                  ">
                  Location123
                </h6>
              </v-card>
            </div>
          </div>
        </v-card-text>
      </v-container>
    </v-main>

    <!-- TESTIMONIALS -->
    <!-- TESTIMONIALS -->
    <!-- TESTIMONIALS -->
    <v-main style="background-color: #e6eaf1">
      <v-container style="
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        ">
        <v-card-title style="color: #3d3d3d; font-size: 30px; font-weight: bold">TESTIMONIALS</v-card-title>

        <v-container style="display: flex; justify-content: center">
          <iframe id="testVidio" width="700" height="350" src="https://www.youtube.com/embed/2gqgSmsA_Oo"
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <v-img id="testImg" style="position: absolute; right: 0px; bottom: 0px; width: 260px"
            src="../assets/images/poll.png"></v-img>
        </v-container>
      </v-container>
    </v-main>

    <!-- Acadletics App -->
    <!-- Acadletics App -->
    <!-- Acadletics App -->
    <v-container id="acadApp" style="display: flex; margin-top: 20px">
      <v-card-text id="acadAppContent" style="width: 50%; margin-top: 40px">
        <div id="appText">
          <h2 class="appTitle" style="color: #3d3d3d; font-weight: bold; font-size: 35px">
            ACADLETICS APP
          </h2>
          <div class="appSubtitle">
            <p style="color: #646464; margin-top: 30px; width: 130%">
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div id="appRow" style="display: flex; padding: 40px 0px 0px 60px">
          <v-card id="appBtn" style="width: 180px; padding: 10px 20px 10px 20px">
            <router-link to="">
              <v-img width="100%" src="../assets/images/Image 7.png"></v-img>
            </router-link>
          </v-card>
          <v-card style="
              width: 180px;
              margin-left: 40px;
              padding: 10px 20px 10px 20px;
            ">
            <router-link to="">
              <v-img width="100%" src="../assets/images/Image 6.png"></v-img>
            </router-link>
          </v-card>
        </div>
      </v-card-text>
      <v-card-text id="acadAppImg" style="width: 50%; margin-left: 220px">
        <v-img id="appImg" style="width: 300px; height: 380px" src="../assets/images/mobile3.png"></v-img>
      </v-card-text>
    </v-container>

    <!-- Home Footer -->
    <!-- Home Footer -->
    <!-- Home Footer -->

    <v-main style="background-color: #4173a3">
      <v-container id="footerMain" style="display: flex">
        <v-card-text id="footerContent" style="width: 36%">
          <div id="footerImg">
            <v-img style="margin-left: 100px" width="200px" height="110px" src="../assets/images/Academics white.png">
            </v-img>
          </div>
          <v-card-subtitle id="footerContentText" style="color: white; font-size: 12px">sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua
            Ut enim ad minim.
          </v-card-subtitle>

          <v-card-title id="footerContentText" style="color: white; font-size: 12px">Registered address:
          </v-card-title>
          <v-card-subtitle id="footerContentText" style="color: white; font-size: 12px; margin-top: -20px">uis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat..
          </v-card-subtitle>
          <v-row id="footerIconRow" style="display: flex; justify-content: center; margin: 15px 0px">
            <v-card-actions style="height: 10px; width: 10px; padding: 0px 20px">
              <router-link to="">
                <v-img width="80%" height="80%" src="../assets/images/facebook.png"></v-img>
              </router-link>
            </v-card-actions>
            <v-card-actions style="height: 10px; width: 10px; padding: 0px 20px">
              <router-link to="">
                <v-img width="80%" height="80%" src="../assets/images/instagram.png"></v-img>
              </router-link>
            </v-card-actions>
            <v-card-actions style="height: 10px; width: 10px; padding: 0px 20px">
              <router-link to="">
                <v-img width="80%" height="80%" src="../assets/images/twitter.png"></v-img>
              </router-link>
            </v-card-actions>
            <v-card-actions style="height: 10px; width: 10px; padding: 0px 20px">
              <router-link to="">
                <v-img width="80%" height="80%" src="../assets/images/linkedin.png"></v-img>
              </router-link>
            </v-card-actions>
          </v-row>
        </v-card-text>
        <div id="footerList" style="display: flex">
          <v-card-text style="width: 30%">
            <div id="footerList1" style="display: flex; margin-top: 105px; margin-left: 100px">
              <v-divider vertical style="
                  margin-right: 10px;
                  border-color: white;
                  height: 125px;
                  margin-top: 22px;
                "></v-divider>
              <v-list style="background-color: transparent">
                <v-list-item-content>
                  <v-list-item-title style="color: white; font-size: 13px">
                    <router-link style="text-decoration: none; color: inherit" to="">Magazines</router-link>
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title style="color: white; font-size: 13px">
                    <router-link style="text-decoration: none; color: inherit" to="">Votes</router-link>
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title style="color: white; font-size: 13px">
                    <router-link style="text-decoration: none; color: inherit" to="">Terms and conditions / Security
                    </router-link>
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title style="color: white; font-size: 13px">
                    <router-link style="text-decoration: none; color: inherit" to="">Privacy / Cookies</router-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list>
            </div>
          </v-card-text>
          <v-card-text style="width: 30%; margin-left: 100px">
            <div id="footerList2" style="display: flex; margin-top: 120px; margin-left: 80px">
              <v-divider vertical style="
                  margin-right: 10px;
                  border-color: white;
                  height: 90px;
                  margin-top: 22px;
                "></v-divider>
              <v-list style="background-color: transparent">
                <v-list-item-content>
                  <v-list-item-title style="color: white; font-size: 13px">
                    <router-link style="text-decoration: none; color: inherit" to="">Schools</router-link>
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title style="color: white; font-size: 13px">
                    <router-link style="text-decoration: none; color: inherit" to="">About us</router-link>
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title style="color: white; font-size: 13px">
                    <router-link style="text-decoration: none; color: inherit" to="">Contact</router-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list>
            </div>
          </v-card-text>
        </div>
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

@media only screen and (max-width: 1264px) {
  #mainSchools {
    height: 480px;
  }

  #schoolsCard {
    margin-top: -100px;
    flex-direction: column;
  }

  #footerImg {
    margin-left: -60px;
  }

  #footerList2 {
    padding: 0px 0px 0px 10px;
  }
}

@media only screen and (max-width: 1250px) {
  #homeHeader-football {
    margin-left: 8%;
  }
}

@media only screen and (max-width: 1160px) {

  #ourStars-card1,
  #ourStars-card2 {
    flex-direction: column;
    justify-content: space-between;
  }

  #stars-card1 {
    margin: 0px 0px 20px 30px;
  }

  #stars-card1,
  #stars-card2,
  #stars-card3,
  #stars-card4 {
    height: 240px;
  }

  #appImg {
    margin-left: -30%;
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

@media only screen and (max-width: 960px) {
  #mainSchol {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 15%;
  }

  #schoolContent {
    padding-right: 180px;
    margin-top: 40px;
  }

  #schoolsCard {
    margin-top: 0px;
    margin-right: 5%;
  }

  #mainSchools {
    height: 880px;
  }

  #acadApp {
    flex-direction: column;
    align-items: center;
  }

  #appImg {
    display: none;
  }

  #appText {
    width: 140%;
    margin-left: -130px;
  }

  #appRow {
    margin-left: -15%;
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

  #mainNomination {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  #nominationContent {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media only screen and (max-width: 800px) {
  #footerMain {
    flex-direction: column;
  }

  #footerContent {
    margin-bottom: -100px;
    margin-left: 100px;
  }

  #footerContentText {
    width: 200%;
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

  #appRow {
    margin-left: -140px;
  }

  .appTitle {
    width: 200%;
  }

  #appText {
    margin-left: -100px;
  }
}

@media only screen and (max-width: 560px) {
  #footerIconRow {
    width: 200%;
  }

  #footerList {
    margin-left: -20px;
  }

  #schImg {
    margin-left: 35px !important;
  }
}

@media only screen and (max-width: 500px) {
  #homeHeader-content1-subtitle {
    line-height: 24px;
  }

  #homeHeader-content1-btn {
    width: 100px;
    height: 35px;
  }

  #nominationQues {
    padding: 0;
    margin: 0;
    font-size: 12px;
  }

  #nominationAns {
    font-size: 9px !important;
    width: 110%;
    margin-left: -24px;
  }

  .appSubtitle {
    margin-top: -10px;
    font-size: 12px;
  }

  #appText {
    margin-left: -50%;
    width: 160%;
  }

  #footerContent {
    margin-left: 40px;
  }

  #footerImg {
    width: 300%;
  }

  #footerContentText {
    width: 250%;
  }

  #footerList {
    margin-left: -60px;
  }
}

@media only screen and (max-width: 600px) {

  #schoolsCard1,
  #schoolsCard2,
  #schoolsCard3,
  #schoolsCard4 {
    margin-left: -30px;
  }

  #scards {
    width: 100%;
  }

  #schoolContent {
    margin-top: 70px;
  }

  #mainSchools {
    height: 1400px;
  }

  #schCards {
    flex-direction: column;
  }

  #testVidio {
    height: 200px;
    width: 95%;
  }

  #testImg {
    display: none;
  }

  #appRow {
    margin-left: -50%;
  }

  #appRow {
    flex-direction: column;
    align-items: center;
  }

  #appBtn {
    margin-bottom: 20px;
    margin-left: 40px;
  }
}

@media only screen and (max-width: 680px) {
  .appTitle {
    font-size: 10px;
    line-height: 35px;
  }

  #appRow {
    margin-left: -130px;
  }
}

@media only screen and (max-width: 650px) {
  #starsMain {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -30px;
  }

  #ourStars-card2 {
    margin: 20px 0px;
  }

  #stars-card4 {
    margin-top: 100px;
  }

  #stars-card1,
  #stars-card3 {
    width: 340px;
  }
}

@media only screen and (max-width: 480px) {
  #homeHeader-content1-title {
    font-size: 24px;
  }

  #schoolContent {
    margin-top: 100px;
  }

  #mainSchools {
    height: 1460px;
  }

  #schoolsText {
    width: 130%;
  }

  #appRow {
    margin-left: -80%;
  }

  #footerList {
    margin-left: -80px;
  }

  #footerContentText {
    width: 340%;
    margin-left: -40px;
  }
}

@media only screen and (max-width: 420px) {
  #schoolText {
    width: 140%;
    margin-left: -50px;
  }

  #schoolBtn {
    margin-left: -50px;
  }

  #mainSchools {
    height: 1320px;
  }
}

@media only screen and (max-width: 400px) {
  #schoolContent {
    width: 130%;
  }

  #mainSchools {
    height: 1400px;
  }

  #footerList {
    margin-left: -110px;
  }

  #footerImg {
    margin-left: -100px;
  }
}

@media only screen and (max-width: 361px) {
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

  #schoolContent {
    margin-top: 150px;
  }

  #schoolText {
    width: 110%;
    margin-left: 0px;
  }

  #schoolBtn {
    margin-left: 0px;
  }

  #stars-card1 {
    width: 280px;
  }
}
</style>