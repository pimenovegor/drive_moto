import axios from "axios";

export default {
  state: {
    favorite: {},
  },
  mutations: {
    setFavorite(state, favorite) {
      state.favorite = favorite;
    },
    addProduct(state, { key, product }) {
      state.favorite[key] = product;
    },
    deleteProduct(state, key) {
      delete state.favorite[key];
    },
  },
  getters: {
    favoriteLength(state) {
      return Object.keys(state.favorite).length;
    },
    findById: (state) => (id) => {
      for (let key in state.favorite) {
        if (state.favorite[key].id === id) return key;
      }
      return;
    },
  },
  actions: {
    getFavorite: async (context) => {
      const { idToken, localId } = localStorage;
      if (!idToken || !localId) {
        console.log("Unauthorized");
        return;
      }

      try {
        const res = await axios.get(
          `https://drive-moto-64147-default-rtdb.firebaseio.com/favorites/${localId}.json?auth=${idToken}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        context.commit("setFavorite", res?.data ?? {});
      } catch (error) {
        console.log(error?.message ?? error);
        throw error;
      }
    },
    addProduct: async (context, { product }) => {
      const { idToken, localId } = localStorage;
      if (!idToken || !localId) {
        console.log("Unauthorized");
        return;
      }

      try {
        const key = Math.round(Math.random() * 1000000000000);
        await axios.put(
          `https://drive-moto-64147-default-rtdb.firebaseio.com/favorites/${localId}/${key}.json?auth=${idToken}`,
          { ...product},
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        context.commit("addProduct", { key, product });
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
          `https://drive-moto-64147-default-rtdb.firebaseio.com/favorites/${localId}/${key}.json?auth=${idToken}`,
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
  },
  namespaced: true,
};
