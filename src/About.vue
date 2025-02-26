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
        <h4>Front end developer</h4>
        <hr />
        <h4>Profile</h4>
        <p>
          I am a determined and flexible Front-End Developer with extensive experience in web design and development across multiple industries, including Gambling, Hotel, Online Courses, Security Servers, Online Games, and Digital Marketing.
          My expertise is creating responsive, user-friendly interfaces for any device and implementing business strategies effectively into websites and apps.
        </p>
        <div class="block">
          <h2>Skill</h2>
          <ul class="listProgram">
            <li>
              <h4>Programming languages</h4>
              <h6>Proficiency</h6>
              <div class="tag-cloud">
                <span>CSS</span>
                <span>SCSS/SASS</span>
                <span>HTML</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
              </div>
              <h6>Base</h6>
              <div class="tag-cloud">
                <span>Node.js</span>
                <span>GraphQL</span>
              </div>
            </li>
            <li>
              <h4>JavaScript Framework</h4>
              <h6>Proficiency</h6>
              <div class="tag-cloud">
                <span>Vue.js</span>
                <span>Vuex</span>
                <span>React.js</span>
                <span>React native</span>
                <span>jQuery</span>
                <span>chart.js</span>
              </div>
              <h6>Base</h6>
              <div class="tag-cloud">
                <span>Node.js</span>
                <span>D3.js</span>
                <span>JEST</span>
                <span>React-test</span>
                <span>Cypress</span>
                <span>Webpack</span>
                <span>Redux</span>
              </div>
            </li>
            <li>
              <h4>System software/Internet protocol:</h4>
              <h6>Proficiency</h6>
              <div class="tag-cloud">
                <span>Git</span>
                <span>Wordpress</span>
                <span>webSocket</span>
                <span>Github</span>
                <span>Gitlab</span>
                <span>restFul api</span>
              </div>
              <h6>Base</h6>
              <div class="tag-cloud">
                <span>Docker</span>
                <span>k8s</span>
                <span>jenkins</span>
              </div>
            </li>
            <li>
              <h4>UI/UX</h4>
              <h6>Proficiency</h6>
              <div class="tag-cloud">
                <span>Adobe Photoshop</span>
                <span>Adobe illustrater</span>
                <span>Figama</span>
              </div>
              <h6>Base</h6>
              <div class="tag-cloud">
                <span>Sketch</span>
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
                  <h4><b>Melodi | United Kingdom </b></h4>
                  <h5><b>Front-end developer </b></h5>
                  <h6>May 2023 - Present</h6>
                </li>
                <ol>
                  <li>
                    Enhanced website competition components with dynamic display and responsive design, integrating app and other domains requests.
                  </li>
                  <li>
                    Implemented competition features such as promo codes, countdowns, ticket limits, and dynamic date labels.
                  </li>
                  <li>
                    Developed the "My Account" page, including features like history records, phone verification, password settings, and personal information
                  </li>
                  <li>
                    Debugged website issues and customized a redesign of the website.
                  </li>
                </ol>
              </ul>
            </li>
            <li class="year">
              <ul>
                <li>
                  <h4><b>Freelancer | United Kingdom </b></h4>
                  <h5><b>Front-end developer </b></h5>
                  <h6>Sep 2022 - April 2023</h6>
                </li>
                <ol>
                  <li>
                    Developed an online course article priority display and detailed page.
                  </li>
                  <li>
                    Created a digital commercial bank website page, compatible across all devices, developed other commercial like data visualization tables for stock,and customized house mortgage rate calculators.
                  </li>
                  <li>
                    Debugged online course page display errors and fixed commercial content inaccuracies..
                  </li>
                  <li>
                    Developed a member management page for online courses, including purchase records, personal information, student feedback, and teacher reviews.
                  </li>
                </ol>
              </ul>
            </li>
            <li class="year">
              <ul>
                <li>
                  <h4><b>Network box | Hong Kong </b></h4>
                  <h5><b>Front-end developer </b></h5>
                  <h6>March 2020 – Aug 2022 (2 years +)</h6>
                </li>
                <ol>
                  <li>
                    implemented recursive dynamic form settings, including input fields, options, messages, and date inputs.
                  </li>
                  <li>
                    Strengthened the responsiveness of dashboard widgets across all devices, visualizing data using APIs and WebSockets.
                  </li>
                  <li>
                    Coded data visualizations including maps, tables, charts, and donut charts.
                  </li>
                  <li>
                    Developed a mobile app version of the CyberSecurity System Dashboard.
                  </li>
                </ol>
              </ul>
            </li>
            <li class="year">
              <ul>
                <li>
                  <h4><b>Gama Technology | Taichung, Taiwan</b></h4>
                  <h5><b>Front-End Developer </b></h5>
                  <h6>May 2013 – Sep 2019 (5 years +)</h6>
                </li>
                <ol>
                  <li>
                    Built iGame platform pages for slot machines, poker, lottery, and sports
                  </li>
                  <li>
                    Developed iGame CMS settings, including filter options, optional fields, and responsive design elements.
                  </li>
                  <li>
                    Customized the iGame website interface using responsive design with carousel and thumbnail banners for all devices.
                  </li>
                  <li>
                    Created mobile animations, interactive widgets, and thumbnail swipers for a dynamic user experience.
                  </li>
                  <li>
                    Designed digital marketing websites for hotel tourism and online game sales and official website, google commercial animation,EDM.
                  </li>
                  <li>Developed a hotel gift shop booking system with contact info and gift categories.</li>
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
