import axios from "axios";

export default {
  state: {
    banners: [],
    promProduct: {},
  },
  mutations: {
    setBanners(state, data) {
      state.banners = data;
    },
    setPromProduct(state, product) {
      state.promProduct = product;
    },
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
        context.commit("setBanners", res.data);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    getPromProduct: async (context) => {
      try {
        const res = await axios.get(
          `https://drive-moto-64147-default-rtdb.firebaseio.com/products.json?orderBy="promotion"&equalTo=true`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const key = Object.keys(res.data)[0]; // firebase возвращает данные с индексом из массива в самой бд
        context.commit("setPromProduct", res.data[key])
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  namespaced: true,
};
