<script setup>
import { ref, reactive, computed } from "vue";
import { useI18n } from "vue-i18n";
const currentPath = ref(window.location.hash);
const emit = defineEmits(["updateRoute", "updateProfile"]);
const props = defineProps({
  msg: String,
});
const triggleStatus = ref(false);
const toggle = () => {
  console.log("test", triggleStatus.value);
  let temp = triggleStatus.value;
  triggleStatus.value = !temp;
};
window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
  triggleStatus.value = false;
  emit("updateRoute", currentPath);
});

// const count = ref(0);
const updateProfile = (profilename) => {
  emit("updateProfile", profilename);
  triggleStatus.value = false;
};
</script>

<template>
  <div class="header">
    <div class="header_body">
      <a class="icon" href="/">
        <img src="@/assets/img/logo.svg" alt="首頁" />
      </a>
      <div id="toggle" @click="toggle" :class="{ on: triggleStatus }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="sharlink">
      <a href="https://github.com/brain00021" target="_blank"
        ><img src="@/assets/img/shareLink/github.svg"
      /></a>
      <a href="mailto:brianliofficial@gamil.com"
        ><img src="@/assets/img/shareLink/gmail.svg"
      /></a>
      <!-- <a href="#"><img src="@/assets/img/shareLink/instagram.svg" /></a> -->
      <a href="https://www.linkedin.com/in/bingyeli/" target="_blank"
        ><img src="@/assets/img/shareLink/linkedin.svg"
      /></a>
    </div>
  </div>
  <div id="menu" :class="{ open: triggleStatus, close: !triggleStatus }">
    <div id="border-circle">
      <div id="menu-wrapper">
        <ul class="menu-main-wrapper">
          <li>
            <a href="/" @click="updateProfile('allproject')">{{
              $t("allproject")
            }}</a>
          </li>
          <li>
            <a href="#/workproject" @click="updateProfile('workproject')">{{
              $t("worksproject")
            }}</a>
          </li>
          <li>
            <a href="#/articlelink" @click="updateProfile('articlelink')">{{
              $t("Article")
            }}</a>
          </li>
          <li>
            <a href="#/about">{{ $t("aboutUs") }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
</style>
