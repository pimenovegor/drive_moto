import axios from "axios";

export default {
  state: {
    basket: {},
  },
  mutations: {
    setBasket(state, basket) {
      state.basket = basket;
    },
    addProduct(state, { key, product }) {
      state.basket[key] = product;
    },
    deleteProduct(state, key) {
      delete state.basket[key];
    },
    changeProductAmount(state, { key, amount }) {
      state.basket[key].amount = amount;
    },
  },
  getters: {
    basketLength(state) {
      return Object.keys(state.basket).length;
    },
    findById: (state) => (id) => {
      for (let key in state.basket) {
        if (state.basket[key].id === id)
          return { key, amount: state.basket[key].amount };
      }
      return false;
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
        const key = Math.round(Math.random() * 1000000000000);
        await axios.put(
          `https://drive-moto-64147-default-rtdb.firebaseio.com/baskets/${localId}/${key}.json?auth=${idToken}`,
          { ...product, amount: 1 },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        context.commit("addProduct", {
          key,
          product: { ...product, amount: 1 },
        });
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    deleteProduct: async (context, { key }) => {
      const { idToken, localId } = localStorage;
      if (!idToken || !localId) {
        console.log("Unauthorized");
        return;
      }

      try {
        await axios.delete(
          `https://drive-moto-64147-default-rtdb.firebaseio.com/baskets/${localId}/${key}.json?auth=${idToken}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        context.commit("deleteProduct", key);
      } catch (error) {
        console.log(error);
      }
    },
    changeAmount: async (context, { key, amount }) => {
      const { idToken, localId } = localStorage;
      if (!idToken || !localId) {
        console.log("Unauthorized");
        return;
      }

      try {
        await axios.patch(
          `https://drive-moto-64147-default-rtdb.firebaseio.com/baskets/${localId}/${key}.json?auth=${idToken}`,
          {
            amount,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        context.commit("changeProductAmount", { key, amount });
      } catch (error) {
        console.log(error);
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
