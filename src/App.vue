<script setup>
import { ref, computed, onBeforeMount } from "vue";
import HeaderSetting from "./components/Header.vue";
import Home from "@/Home.vue";
import About from "@/About.vue";
import NotFound from "@/NotFound.vue";
import LocalSetting from "@/components/LocaleOptions.vue";
const routes = {
  "/": Home,
  "/workproject": Home,
  "/article": Home,
  "/articlelink": Home,
  "/about": About,
  "/notFound": NotFound,
};
const currentPath = ref(window.location.hash);
const currentProjectName = ref("");
const updateRoute = (routeSet) => {
  console.log("routeSet", routeSet);
  currentPath.value = window.location.hash;
};
const currentView = computed(() => {
  let routePath = currentPath.value.slice(1);
  let routeLine = routes[currentPath.value.slice(1) || "/"];

  console.log(routePath, "routeLine");
  return routeLine || NotFound;
});
const updateProfile = (projectName) => {
  console.log("projectName", projectName);
  currentProjectName.value = projectName;
};
</script>

<template>
  <HeaderSetting
    msg="Vite + Vue"
    @updateRoute="updateRoute"
    @updateProfile="updateProfile"
  />
  <LocalSetting></LocalSetting>
  <component :is="currentView" :projectName="currentProjectName" />
  <!-- <Swiper></Swiper> -->
</template>

<style scoped></style>
