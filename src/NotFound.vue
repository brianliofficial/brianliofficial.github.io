<script setup>
import { onMounted } from "vue";
import { setPageMeta } from "@/plugin/seo.js";

onMounted(() => {
  setPageMeta({
    title: "Page not found | Brian Li",
    description: "This page is not available in Brian Li's portfolio.",
    keywords: "Brian Li, portfolio, 404",
  });
});
</script>

<template>
  <p>Not FUnd us</p>
</template>

<style scoped></style>
