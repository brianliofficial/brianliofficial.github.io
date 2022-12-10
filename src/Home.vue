<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onBeforeMount, ref, computed, reactive, onMounted } from "vue";
import dataUrl from "@/profiledata/index.json";
import { useI18n } from "vue-i18n";
import { throttle, getImageUrl } from "./plugin/common.js";
import Dialog from "@/components/dialog.vue";
import { react } from "@babel/types";
const { locale, t } = useI18n({
  inheritLocale: true,
});
// import { fileURLToPath } from "url";
// const __dirname = fileURLToPath(import.meta.url);
// const dataUrl = require("@assets/data/profile.json");
// const currentProfile = ref([]);
const currentPageNum = ref(1);
const bannerStatus = ref(false);
const dialogStatus = ref(false);
const emit = defineEmits(["updateRoute"]);
// const getImageUrl = (name) => {
//   let path = name;
//   if (name !== undefined && name.indexOf("http") !== -1) {
//     return name;
//   }
//   const img = new URL(path, import.meta.url).href;
//   return img;

//   // }
// };
const props = defineProps({
  msg: String,
  projectName: {
    type: String,
    default: "allproject",
  },
});
console.log(dataUrl, "dataUrl");
const profile = reactive({
  pageContent: 6,
  pageNum: 1,
  type: "",
  originProfile: [],
  profileButton: true,
  //  tel: 0910xxxxxx,
  currentProfile: computed(() => {
    let currentData = [];
    if (props.projectName === "workproject") {
      // let tempProfile = JSON.parse(JSON.stringify(profile.originProfile));
      currentData = profile.originProfile.filter(
        (item) => item.type === "url" || item.type === "image"
      );
    } else if (props.projectName === "articlelink") {
      currentData = profile.originProfile.filter(
        (item) => item.type === "articlelink"
      );
    } else {
      currentData = profile.originProfile;
    }

    return currentData;
  }),
  displayProfile: computed(() => {
    // let dataLen = [];
    // profile.updateProfileSetting(props.projectNmae);
    let start = profile.pageNum * profile.pageContent;
    let newListData = [];
    let dataLen = profile.currentProfile.length;
    if (dataLen > start) {
      dataLen = start;
      profile.profileButton = true;
    } else {
      dataLen = profile.currentProfile.length;
      profile.profileButton = false;
    }

    for (let i = 0; i < dataLen; i++) {
      newListData.push(profile.currentProfile[i]);
    }

    return newListData;
  }),
  profileMore: () => {
    let start = profile.pageNum * profile.pageContent;
    let dataLen = profile.currentProfile.length;
    if (dataLen > start) {
      profile.pageNum++;
    }
  },
});
onBeforeMount(async () => {
  profile.originProfile = JSON.parse(JSON.stringify(dataUrl.events));
  // profile.updateProfileSetting();
  console.log("homeData", profile.displayProfile, dataUrl, props.projectNmae);
});
const handleScroll = async (event) => {
  console.log("scroll", window);
  if (window.scrollY > 0) {
    bannerStatus.value = true;
  } else {
    // let temp = bannerStatus.value;
    bannerStatus.value = false;
  }
};
onMounted(async () => {
  window.addEventListener("scroll", throttle(handleScroll));
});

const isDialogVisible = (status) => {
  return (dialogStatus.value = status);
};
const dialogData = ref({});
const getDialogData = (item) => {
  let { name, title, link, img, type } = item;
  let { jobDescription, detailPage } =
    dataUrl.detail.find((item) => item.id === name) || {};

  dialogData.value = {
    name,
    title,
    link,
    img,
    type,
    jobDescription,
    detailPage,
  };
  console.log("getDialogData", dialogData);
  isDialogVisible(true);
};
</script>

<template>
  <Dialog
    @dialogStaus="isDialogVisible"
    :dialogVisibility="dialogStatus"
    :dialogData="dialogData"
  ></Dialog>
  <div
    class="banner animated fadeIn"
    :class="{ fadeOut: bannerStatus || dialogStatus }"
  >
    <div id="index-banner-detail">
      <h1>BRIAN LI DESIGN</h1>
      <h4>
        I am a
        <b class="change-title"></b>
        <b class="splite">|</b>
      </h4>
      <h6>2013 - 2023</h6>
    </div>
  </div>
  <div class="profile animated fadeIn" :class="{ fadeOut: dialogStatus }">
    <ul class="profile-article" v-show="!dialogStatus">
      <template v-for="(item, index) in profile.displayProfile" :key="index">
        <li v-if="item.type === 'samllproject' || item.type === 'articlelink'">
          <a :href="item.url" target="_blank">
            <img
              :src="
                item.type !== 'articlelink' ? item.img : getImageUrl(item.img)
              "
            />
          </a>
          <span>
            <b class="title"> {{ $t(item.title) }} </b>
            <b class="data">{{ item.data }}</b>
          </span>
        </li>
        <li v-else>
          <a @click="getDialogData(item)">
            <img
              :src="item.type === 'url' ? item.img : getImageUrl(item.img)"
            />
            <img :src="item.img" v-if="item.type === 'url'" alt="" />
          </a>
          <span>
            <b class="title"> {{ $t(item.title) }} </b>
            <b class="data">{{ item.data }}</b>
          </span>
        </li>
      </template>
    </ul>
  </div>
  <div
    class="more animated fadeIn"
    :class="{ fadeOut: dialogStatus }"
    v-if="profile.profileButton"
    @click="profile.profileMore"
  >
    MORE
  </div>
  <!-- </div> -->

  <!-- <Swiper></Swiper> -->
</template>

<style scoped></style>
