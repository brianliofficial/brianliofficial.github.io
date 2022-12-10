<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onBeforeMount } from "vue";
onBeforeMount(async () => {
  // // GET request using fetch with async/await
  // const response = await fetch("@/profiledata/index.json");
  // const data = await response.json();
  // this.totalVuePackages = data.total;
});
</script>

<template>
  <div class="aboutus-wrapper">
    <div class="resume">
      <div class="left">
        <div class="decoration"></div>
        <h1>Brian Li</h1>
        <h4>Front end developer / UI Developer</h4>
        <hr />
        <h4>Profile</h4>
        <ol>
          <li>
            experienced developer in market diversification website design
          </li>
          <li>4 year experience in corporate and freelance web development.</li>
          <li>
            Strategic coding background to ensure integration with back-end
            developers and UI/UX designers.
          </li>
          <li>Looking for a full-time front end development position.</li>
        </ol>
        <div class="block">
          <h4>Programming Skill</h4>
          <h2>Skill</h2>
          <ul class="listProgram">
            <li>
              Css/Scss/Sass
              <div class="bar">
                <div class="value p80"></div>
              </div>
            </li>
            <li>
              Js/Jquery
              <div class="bar">
                <div class="value p80"></div>
              </div>
            </li>
            <li>
              Vue/Vuex
              <div class="bar">
                <div class="value p70"></div>
              </div>
            </li>
            <li>
              Html/Pug
              <div class="bar">
                <div class="value p80"></div>
              </div>
            </li>
            <li>
              React
              <div class="bar">
                <div class="value p60"></div>
              </div>
            </li>
            <li>
              Flash/AfterEffect
              <div class="bar">
                <div class="value p70"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="block">
          <h4>My History</h4>
          <h2>Experience / Works</h2>
          <ul class="listExperience">
            <li class="year">
              <ul>
                <li>
                  <h4><b>Network box | Hong Kong </b></h4>
                  <h5><b>Front-end developer </b></h5>
                  <h6>March 2020 – Aug 2022</h6>
                </li>
                <ol>
                  <li>
                    Built Dashboard Desktop version with Vue.js , websocket,
                    D3.js and Chart.js and restful api.
                  </li>
                  <li>Built Dashboard App version with React native.</li>
                </ol>
              </ul>
            </li>
            <li class="year">
              <ul>
                <li>
                  <h4><b>Gama Technology | Taichung, Taiwan</b></h4>
                  <h5><b>Front-End Developer </b></h5>
                  <h6>May 2017 – Sep 2019 (2 years +)</h6>
                </li>
                <ol>
                  <li>Built iGame websites with Vue and Vuex.</li>
                  <li>
                    Built CMS <span>(Content management system) </span>website
                  </li>
                  <li>Developed responsive design iGame websites</li>
                  <li>
                    Cooperated with UI/UX designers and back-end developers in
                    agile software development by Jira and Git.
                  </li>
                </ol>
              </ul>
            </li>
            <li class="year">
              <ul>
                <li>
                  <h4><b>Online game industry (gamefiler) | Taipei</b></h4>
                  <h4><b>Hotel industry (monster village) | Nantou </b></h4>
                  <h5><b>Front-end designer</b></h5>
                  <h6>March 2013 – Nov 2015 (2 years +)</h6>
                </li>
                <ol>
                  <li>
                    Designed Mockups of the business model website with Figma
                    and Sketch
                  </li>
                  <li>
                    Developed websites such as (iGame website,E-commerce
                    Websites,etc..) with Ajax and Wordpress, SASS, Pug , jQuery
                    and Bootstrap.
                  </li>
                  <li>
                    Cross-browser compatibility experience for all major
                    browser.
                  </li>
                  <li>
                    Worked on digital activities projects include HTML5/Flash
                    banner and eDM.
                  </li>
                </ol>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- <Swiper></Swiper> -->
</template>

<style scoped></style>
