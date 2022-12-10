<script setup>
import { onMounted, nextTick } from "vue";
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectFlip,
  Lazy,
} from "swiper";
import { getImageUrl } from "@/plugin/common.js";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import { useI18n } from "vue-i18n";
// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// install Swiper components
const { locale, t } = useI18n({
  inheritLocale: true,
});
SwiperCore.use([Navigation, Pagination, A11y, Lazy]);
const emit = defineEmits(["dialogStaus"]);
// const closeButton = (id) => emit("dialogStaus", val);
const props = defineProps({
  dialogData: Object,
  dialogVisibility: Boolean,
});
const swiperown = useSwiper();
const onSwiper = function (swiper) {
  console.log(swiper, Swiper, "差別");
  // swiper.lazy.load();
};

// Import Swiper styles
// export default {
//   components: {
//     Swiper,
//     SwiperSlide,
//   },
//   methods: {
//     onSwiper(swiper) {
//       // console.log(swiper)
//     },
//     onSlideChange() {
//       // console.log('slide change')
//     },
//   },
// };
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
        <swiper
          :slides-per-view="1"
          :space-between="100"
          navigation
          :pagination="{ clickable: true }"
          @afterInit="onSwiper"
          :grabCursor="true"
          @slideChange="onSlideChange"
          :autoHeight="true"
          :preloadImages="false"
          :lazyLoading="true"
          :lazy="true"
        >
          <template v-for="(item, key) in dialogData.detailPage" :key="key">
            <swiper-slide>
              <p class="title">{{ t(item.title) }}</p>
              <img class="swiper-lazy" :data-src="item.img" alt="" />
              <div class="swiper-lazy-preloader"></div>
            </swiper-slide>
          </template>

          <!-- <swiper-slide>
            <h2>Slide 2</h2>
          </swiper-slide>
          <swiper-slide>
            <h2>Slide 3</h2>
          </swiper-slide> -->
        </swiper>
      </div>
    </div>
  </div>
</template>
