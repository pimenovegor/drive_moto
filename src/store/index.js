import { createStore } from "vuex";
import products from "./modules/products";
import auth from "./modules/auth";
import basket from "./modules/basket";
import favorite from "./modules/favorite";

export default createStore({
  modules: {
    products,
    auth,
    basket,
    favorite,
  },
  state: {
    windowWidth: window.innerWidth,
    showAuth: false,
    showBasket: false,
    showFavorite: false,
  },
  mutations: {
    setWindowWidth(state, windowWidth) {
      state.windowWidth = windowWidth;
    },
    setShowAuth(state, showAuth) {
      state.showAuth = showAuth;
    },
    setShowBasket(state, showBasket) {
      state.showBasket = showBasket;
    },
    setShowFavorite(state, showFavorite) {
      state.showFavorite = showFavorite;
    },
  },
});
