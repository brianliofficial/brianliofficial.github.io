<script setup>
import { getImageUrl } from "@/plugin/common.js";
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  inheritLocale: true,
});
const emit = defineEmits(["dialogStaus"]);
defineProps({
  dialogData: Object,
  dialogVisibility: Boolean,
});
</script>

<template>
  <div class="dialog-lightbox" v-if="dialogVisibility">
    <div class="dialog-wrapper">
      <div class="dialog-header">
        <h2 class="title">{{ $t(`${dialogData.title}`) }}</h2>

        <div class="cross-btn" @click="emit('dialogStaus', false)"></div>
      </div>
      <div class="dialog-content">
        <div class="banner"><img :src="getImageUrl(dialogData.img)" /></div>
        <h3>My Job Description</h3>
        <ul v-html="dialogData.jobDescription"></ul>
      </div>
      <div class="dialog-body">
        <div
          class="dialog-gallery-item"
          v-for="(item, key) in dialogData.detailPage"
          :key="key"
        >
          <p class="title">{{ t(item.title) }}</p>
          <img
            :src="getImageUrl(item.img)"
            :alt="item.title"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>
