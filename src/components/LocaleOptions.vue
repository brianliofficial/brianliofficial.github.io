<template>
  <div class="select">
    <select class="localeSet" v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="cn">繁體中文</option>
    </select>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale, global, t } = useI18n({
  inheritLocale: true,
});
// const onChange = (event) => {
//   console.log(event.target.value, locale);
// };
</script>
