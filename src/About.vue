<script setup>
import { onMounted } from "vue";
import { ABOUT_SEO, setPageMeta } from "@/plugin/seo.js";

onMounted(() => {
  setPageMeta(ABOUT_SEO);
});
</script>

<template lang="pug">
.aboutus-wrapper
  .resume
    .left
      .decoration
      h1 Brian Li
      h4 Front-end developer
      hr
      h4 Profile
      p.
        I am a determined and adaptable front-end developer with experience across gambling, hotels, online courses, security platforms, online games, and digital marketing.
        I build responsive, user-friendly interfaces for every device and turn business goals into clear websites and apps.
      .block
        h2 Skill
        ul.listProgram
          li
            h4 Programming languages
            h6 Proficiency
            .tag-cloud
              span CSS
              span SCSS/SASS
              span HTML
              span JavaScript
              span TypeScript
            h6 Base
            .tag-cloud
              span Node.js
              span GraphQL
          li
            h4 JavaScript frameworks
            h6 Proficiency
            .tag-cloud
              span Vue.js
              span Vuex
              span React.js
              span React Native
              span jQuery
              span Chart.js
            h6 Base
            .tag-cloud
              span Node.js
              span D3.js
              span Jest
              span React Testing Library
              span Cypress
              span Webpack
              span Redux
          li
            h4 Systems and internet protocols
            h6 Proficiency
            .tag-cloud
              span Git
              span WordPress
              span WebSocket
              span GitHub
              span GitLab
              span RESTful API
            h6 Base
            .tag-cloud
              span Docker
              span Kubernetes
              span Jenkins
          li
            h4 UI/UX
            h6 Proficiency
            .tag-cloud
              span Adobe Photoshop
              span Adobe Illustrator
              span Figma
            h6 Base
            .tag-cloud
              span Sketch
    .right
      .block
        h4 My History
        h2 Experience / Works
        ul.listExperience
          li.year
            ul
              li
                h4
                  b Melodi | United Kingdom
                h5
                  b Front-end developer
                h6 May 2023 – Present
              ol
                li Improved competition components with dynamic layouts and responsive design, and connected them with the app and other domains.
                li Added competition features such as promo codes, countdowns, ticket limits, and dynamic date labels.
                li Built the My Account page, including history, phone verification, password settings, and personal information.
                li Fixed site bugs and delivered a custom redesign.
          li.year
            ul
              li
                h4
                  b Freelancer | United Kingdom
                h5
                  b Front-end developer
                h6 Sep 2022 – April 2023
              ol
                li Built article priority listing and detail pages for an online course platform.
                li Created a responsive commercial bank site, including stock data tables and a custom mortgage-rate calculator.
                li Fixed course-page display bugs and corrected commercial content errors.
                li Built a member management page for online courses, covering purchase history, personal details, student feedback, and teacher reviews.
          li.year
            ul
              li
                h4
                  b Network Box | Hong Kong
                h5
                  b Front-end developer
                h6 March 2020 – Aug 2022 (2 years +)
              ol
                li Implemented recursive dynamic forms with inputs, options, messages, and date fields.
                li Made dashboard widgets responsive across devices and visualized data through APIs and WebSockets.
                li Built data visualizations including maps, tables, charts, and donut charts.
                li Developed a mobile app version of the cybersecurity system dashboard.
          li.year
            ul
              li
                h4
                  b Gama Technology | Taichung, Taiwan
                h5
                  b Front-end developer
                h6 May 2013 – Sep 2019 (5 years +)
              ol
                li Built iGame platform pages for slots, poker, lottery, and sports.
                li Developed iGame CMS settings, including filters, optional fields, and responsive layouts.
                li Customized the iGame site with responsive carousels and thumbnail banners for all devices.
                li Created mobile animations, interactive widgets, and thumbnail galleries.
                li Designed digital marketing sites for hotel tourism and game sales, plus official sites, Google ad animations, and EDMs.
                li Built a hotel gift-shop booking system with contact details and gift categories.
</template>

<style scoped></style>
