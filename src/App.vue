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
* {
  margin: 0;
  padding: 0;
  font-family: "SF Pro Display", sans-serif;
  color: #2f3035;
}
</style>
