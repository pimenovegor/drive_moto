<template>
  <MainLayout />
  <router-view />
  <Footer />
</template>

<script>
import MainLayout from "@/layouts/Main";
import Footer from "./components/Footer.vue";

export default {
  components: {
    MainLayout,
    Footer,
  },
};
</script>

<style>
@import url("http://fonts.cdnfonts.com/css/sf-pro-display");
@import url("https://fonts.googleapis.com/css?family=Proxima+Nova");
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@700&family=Roboto:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@700&display=swap");


* {
  margin: 0;
  padding: 0;
  font-family: "SF Pro Display", sans-serif;
  color: #2f3035;
}
</style>
