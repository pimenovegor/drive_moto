import axios from "axios";

export default {
  state: {
    products: [],
    selectedType: "",
    sort: "По популярности",
    priceRange: [],
    selectedOptions: [],
    search: {
      option: "",
      text: "",
    },
    selectedProduct: {},
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setSelectedType(state, selectedType) {
      state.selectedType = selectedType;
    },
    setSort(state, sort) {
      state.sort = sort;
    },
    setPriceRange(state, priceRange) {
      state.priceRange = priceRange;
    },
    pushSelectedOptions(state, option) {
      state.selectedOptions.push(option);
    },
    spliceSelectedOptions(state, id) {
      state.selectedOptions.splice(id, 1);
    },
    resetFilters(state) {
      state.selectedOptions = [];
      state.sort = "По популярности";
    },
    setSearch(state, search) {
      state.search = search;
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    },
  },
  getters: {
    optionsFilter(state, getters) {
      let result = getters.priceFilter;
      state.selectedOptions.forEach((element) => {
        result = result.filter(
          (item) => item[element.bdName] === element.value
        );
      });
      return result;
    },
    priceFilter(state, getters) {
      return getters.sortFilter?.filter(
        (item) =>
          item.price > state.priceRange[0] && item.price < state.priceRange[1]
      );
    },
    sortFilter(state, getters) {
      if (state.sort === "По возрастанию")
        return getters.typeFilter?.sort((a, b) => a.price - b.price);
      if (state.sort === "По убыванию")
        return getters.typeFilter?.sort((a, b) => b.price - a.price);
      if (state.sort === "По популярности")
        return getters.typeFilter?.sort((a, b) => b.id - a.id);
      return getters.typeFilter;
    },
    typeFilter(state, getters) {
      if (state.selectedType === "Товары") {
        return getters.searchFilter;
      }
      return (
        getters.searchFilter?.filter(
          (item) =>
            item?.type === state.selectedType || state.selectedType === ""
        ) ?? []
      );
    },
    searchFilter(state) {
      return state.selectedType
        ? state.products
        : state.products?.filter((item) =>
            String(item[state.search.option])
              ?.toLowerCase()
              ?.includes(String(state.search?.text)?.toLowerCase())
          );
    },
    brands(state, getters) {
      const brands = getters.typeFilter.map((item) => ({
        bdName: "brand",
        name: item.brand,
        value: item.brand,
      }));
      // метод вовращает все бренды без фильтра повторения, поэтому далее сделаем все значания уникальными

      const filtedBrands = [];
      brands.forEach((item) => {
        if (
          !filtedBrands.some(
            (el) => JSON.stringify(el) === JSON.stringify(item)
          )
        ) {
          filtedBrands.push(item);
        }
      });
      return filtedBrands;
    },
    maxPrice(state, getters) {
      return (
        getters.typeFilter?.reduce((accumulator, currentValue) => {
          return accumulator < currentValue.price
            ? (accumulator = currentValue.price)
            : accumulator;
        }, 0) + 1
      );
    },
  },
  actions: {
    getProducts: async (context) => {
      try {
        const res = await axios.get(
          `https://drive-moto-64147-default-rtdb.firebaseio.com/products.json`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        context.commit("setProducts", res.data);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    getProductById: async (context, id) => {
      try {
        const res = await axios.get(
          `https://drive-moto-64147-default-rtdb.firebaseio.com/products.json?orderBy="id"&equalTo=${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const key = Object.keys(res.data)[0]; // firebase возвращает данные с индексом из массива в самой бд
        context.commit("setSelectedProduct", res.data[key]);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  namespaced: true,
};
