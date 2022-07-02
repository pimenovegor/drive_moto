<template>
  <MainLayout />
  <router-view />
  <Footer />
</template>

<script>
import MainLayout from "@/layouts/Main";
import Footer from "./components/Footer.vue";
import { mapActions } from "vuex";

export default {
  components: {
    MainLayout,
    Footer,
  },
  created() {
    this.getProducts();
  },
  methods: {
    ...mapActions({
      getProducts: "products/getProducts",
    }),
  },
};
</script>

<style>
@import url("http://fonts.cdnfonts.com/css/sf-pro-display");

* {
  margin: 0;
  padding: 0;
  font-family: "SF Pro Display", sans-serif;
  font-style: normal;
  color: #2f3035;
}
</style>
