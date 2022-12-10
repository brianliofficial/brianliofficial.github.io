import { createApp } from "vue";
// import "./style.css";
import "@/assets/scss/all.scss";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import messages from "@intlify/vite-plugin-vue-i18n/messages";

// console.log(EN, "EN");
const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages,
});

// createApp(App).mount("#app");
const app = createApp(App);
app.use(i18n).mount("#app");
