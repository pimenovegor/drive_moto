<template>
  <MainLayout />
  <Auth v-if="showAuth" />
  <Basket v-if="showBasket" />
  <Favorite v-if="showFavorite" />
  <router-view />
  <Footer />
</template>

<script>
import Auth from "@/components/Auth.vue";
import Basket from "@/components/Basket.vue";
import Favorite from "@/components/Favorite.vue";
import MainLayout from "@/layouts/Main";
import Footer from "./components/Footer.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  components: {
    MainLayout,
    Footer,
    Auth,
    Basket,
    Favorite,
  },
  created() {
    window.addEventListener("resize", () => {
      this.setWindowWidth(window.innerWidth);
    });
    this.authCheck().then(() => {
      if (this.auth) {
        this.getBasket();
        this.getFavorite();
      }
    });
  },
  computed: {
    ...mapState({
      showAuth: (state) => state.showAuth,
      showBasket: (state) => state.showBasket,
      showFavorite: (state) => state.showFavorite,
      auth: (state) => state.auth.auth,
    }),
  },
  methods: {
    ...mapActions({
      getBasket: "basket/getBasket",
      getFavorite: "favorite/getFavorite",
      authCheck: "auth/authCheck",
    }),
    ...mapMutations({
      setWindowWidth: "setWindowWidth",
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
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>
