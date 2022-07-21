import axios from "axios";

export default {
  state: {
    basket: {},
    showBasket: false,
  },
  mutations: {
    setBasket(state, basket) {
      state.basket = basket;
    },
    setShowBasket(state, showBasket) {
      state.showBasket = showBasket;
    },
  },
  getters: {
    basketLength(state) {
      return Object.keys(state.basket).length;
    },
  },
  actions: {
    addProduct: async (context, { product }) => {
      const { idToken, localId } = localStorage;
      if (!idToken || !localId) {
        console.log("Unauthorized");
        return;
      }

      try {
        await axios.post(
          `https://drive-moto-64147-default-rtdb.firebaseio.com/baskets/${localId}.json?auth=${idToken}`,
          { ...product },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    getBasket: async (context) => {
      const { idToken, localId } = localStorage;
      if (!idToken || !localId) {
        console.log("Unauthorized");
        return;
      }

      try {
        const res = await axios.get(
          `https://drive-moto-64147-default-rtdb.firebaseio.com/baskets/${localId}.json?auth=${idToken}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        context.commit("setBasket", res?.data ?? {});
      } catch (error) {
        console.log(error?.message ?? error);
        throw error;
      }
    },
  },
  namespaced: true,
};
