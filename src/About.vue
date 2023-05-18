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
        <p>
          I am a determined and adaptable front-end developer with 5 years of
          experience. With a diverse background in digital marketing, iGaming,
          and cybersecurity, I excel in creating seamless user experiences. I
          analyze user behavior, understand their needs, and translate them into
          intuitive interfaces. Collaborating closely with back-end developers,
          I ensure smooth integration and functionality. I have delivered
          exceptional results in digital commercials, customer management
          systems, and dashboard/web app development.
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
              <h4>System software</h4>
              <h6>Proficiency</h6>
              <div class="tag-cloud">
                <span>Git</span>
                <span>Wordpress</span>
                <span>webSocket</span>
              </div>
              <h6>Base</h6>
              <div class="tag-cloud">
                <span>Node.js</span>
                <span>D3.js</span>
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
                  <h4><b>Freelancer | United Kingdom </b></h4>
                  <h5><b>Front-end developer </b></h5>
                  <h6>Febuary 2023 - Present</h6>
                </li>
                <ol>
                  <li>
                    Created Bank “House mortgage calculator” Advertising
                    commercial and “Real-time american stock” commercial and
                    other animation landing page commercials increase bank’s
                    register member
                  </li>
                  <li>
                    Update and Debug Online Course website for “Blog priority
                    setting” and "Online course user admin page
                    setting",”admin’s blog and course CSV export file setting”.
                  </li>
                </ol>
              </ul>
            </li>
            <li class="year">
              <ul>
                <li>
                  <h4><b>Network box | Hong Kong </b></h4>
                  <h5><b>Front-end developer </b></h5>
                  <h6>March 2020 – Aug 2022</h6>
                </li>
                <ol>
                  <li>
                    Developed a mobile application for Cybersecurity,designed to
                    provide event tables,graphic charts,dynamic filter forms,
                    and real-time data widgets.The application is available for
                    both iOS and Android mobile devices,ensuring accessibility
                    and convenience.
                  </li>
                  <li>
                    Built a responsive web design website for
                    Cybersecurity,incorporating event tables,graphic
                    charts,dynamic filter forms, and real-time data widgets. The
                    website ensures cross-browser compatibility,allowing users
                    to access the information seamlessly across different
                    browsers and devices.
                  </li>
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
                  <li>
                    Designed and developed an iGame CMS(Content Management
                    System) with a focus on member services in casinos.The
                    system included features such as “membership enrollment” and
                    “point exchange”,providing a user-friendly for admin.
                  </li>
                  <li>
                    Designed and developed a centralized iGame website for
                    marketing in Thailand.The website incorporated features such
                    as game selection,user credit card settings, and lucky draw
                    settings,catering specifically to the Thai market.
                  </li>
                  <li>
                    Implemented a diversity theme for iGame centralized website
                    to efficiently customize the interface..
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
                    Developed and maintained official online game websites,
                    including creating animation commercials and optimizing
                    landing pages for improved SEO.
                  </li>
                  <li>
                    Created digital marketing materials,such as EDMs and Google
                    Banners,to attract and engage Hong Kong prospective
                    customers and players in online games.
                  </li>
                  <li>
                    Designed and developed lottery games that featured local
                    souvenirs,boosting tourism in specific villages and
                    attracting 80-150 additional visitors per game.
                  </li>
                  <li>
                    Developed a slot machine to sell tourism inventory souvenirs
                    during Chinese New Year,resulting in a weekly revenue
                    increase of 500 pounds.
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
