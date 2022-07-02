import axios from "axios";

export default {
  state: {
    banners: [],
  },
  getters: {
  },
  mutations: {
    setBanners(state,data){
      state.banners=data
    }
  },
  actions: {
    getBanners: async (context) => {
      try {
        const res = await axios.get(
          "https://drive-moto-64147-default-rtdb.firebaseio.com/banners.json",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        context.commit('setBanners', res.data)
      } catch (error) {
        console.log(error)
        throw error
      }
    },
  },
  namespaced: true,
};
