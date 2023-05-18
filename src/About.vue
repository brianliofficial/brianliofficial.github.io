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
                <span>jenkins</span>>
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
                    Created bank advertising commercials and animation landing
                    pages to increase register members.
                  </li>
                  <li>
                    Updated and debugged online course website, implementing
                    blog priority setting and admin page configuration.
                  </li>
                  <li>
                    Developed user-friendly interfaces for seamless navigation
                    and enhanced user experience.
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
                    Developed a mobile application and responsive web design
                    website for cybersecurity, incorporating real-time data
                    widgets.
                  </li>
                  <li>
                    Implemented dynamic filter forms and graphic charts for
                    intuitive data visualization.
                  </li>
                  <li>
                    Ensured cross-browser compatibility and optimized website
                    performance for optimal user experience.
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
                    Designed and developed an iGame CMS with member service
                    features for casinos, including membership enrollment and
                    point exchange.
                  </li>
                  <li>
                    Built a centralized iGame website for marketing in Thailand,
                    featuring game selection, user credit card settings, and
                    lucky draw settings.
                  </li>
                  <li>
                    Implemented a diversity theme to customize the interface
                    efficiently, providing a visually appealing and personalized
                    experience.
                  </li>
                </ol>
              </ul>
            </li>
            <li class="year">
              <ul>
                <li>
                  <h4>
                    <b
                      >Soft-world Tech and Monster Village Hotel | Taipei -
                      Nantou, Taiwan
                    </b>
                  </h4>
                  <h5><b>Front-end designer</b></h5>
                  <h6>March 2013 – Nov 2015 (2 years +)</h6>
                </li>
                <ol>
                  <li>
                    Developed and maintained official online game websites,
                    optimizing landing pages for improved SEO.
                  </li>
                  <li>
                    Created digital marketing materials, including EDMs and
                    Google Banners, to attract and engage prospective customers.
                  </li>
                  <li>
                    Designed and developed lottery games featuring local
                    souvenirs, boosting tourism and attracting additional
                    visitors.
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
