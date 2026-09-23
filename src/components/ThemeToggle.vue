<script setup>
import { ref, onMounted } from "vue";

const THEME_KEY = "site-theme";
const theme = ref("dark");

const applyTheme = (next) => {
  theme.value = next;
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(THEME_KEY, next);
};

onMounted(() => {
  const saved = localStorage.getItem(THEME_KEY);
  applyTheme(saved === "light" ? "light" : "dark");
});
</script>

<template>
  <div class="theme-toggle" role="group" aria-label="Theme">
    <button
      type="button"
      :class="{ active: theme === 'light' }"
      :aria-pressed="theme === 'light'"
      @click="applyTheme('light')"
    >
      Light
    </button>
    <button
      type="button"
      :class="{ active: theme === 'dark' }"
      :aria-pressed="theme === 'dark'"
      @click="applyTheme('dark')"
    >
      Dark
    </button>
  </div>
</template>
