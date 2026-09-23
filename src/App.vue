<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import HeaderSetting from "./components/Header.vue";
import Home from "@/Home.vue";
import About from "@/About.vue";
import NotFound from "@/NotFound.vue";
import LocalSetting from "@/components/LocaleOptions.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import { parseLocationHash } from "@/plugin/route.js";

const parsed = ref(parseLocationHash());

const syncRoute = () => {
  parsed.value = parseLocationHash();
};

const updateRoute = () => {
  syncRoute();
};

const updateProfile = (projectName) => {
  parsed.value = {
    view: "home",
    projectName,
    projectId: "",
  };
};

const currentView = computed(() => {
  if (parsed.value.view === "about") return About;
  if (parsed.value.view === "home") return Home;
  return NotFound;
});

onMounted(() => {
  window.addEventListener("hashchange", syncRoute);
});

onUnmounted(() => {
  window.removeEventListener("hashchange", syncRoute);
});
</script>

<template>
  <HeaderSetting
    msg="Vite + Vue"
    @updateRoute="updateRoute"
    @updateProfile="updateProfile"
  />
  <div class="site-tools">
    <LocalSetting></LocalSetting>
    <ThemeToggle />
  </div>
  <component
    :is="currentView"
    :projectName="parsed.projectName"
    :projectId="parsed.projectId"
  />
</template>

<style scoped></style>
