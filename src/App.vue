<template>
  <MainLayout />
  <Auth v-if="showAuth" />
  <Basket v-if="showBasket" />
  <router-view />
  <Footer />
</template>

<script>
import Auth from "@/components/Auth.vue";
import Basket from "@/components/Basket.vue";
import MainLayout from "@/layouts/Main";
import Footer from "./components/Footer.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    MainLayout,
    Footer,
    Auth,
    Basket,
  },
  created() {
    this.authCheck().then(() => {
      if (this.auth) this.getBasket();
    });
  },
  computed: {
    ...mapState({
      showAuth: (state) => state.auth.showAuth,
      showBasket: (state) => state.basket.showBasket,
      auth: (state) => state.auth.auth,
    }),
  },
  methods: {
    ...mapActions({
      getBasket: "basket/getBasket",
      authCheck: "auth/authCheck",
    }),
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
