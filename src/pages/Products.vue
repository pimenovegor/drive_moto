<template>
  <Header />
  <main class="main">
    <Options />
    <ProductsList
      :selectedPage="page"
      @change="page = $event"
    />
  </main>
</template>

<script>
import Options from "@/components/Options.vue";
import Header from "@/components/ProductsHeader.vue";
import ProductsList from "@/components/ProductsList.vue";
import { mapMutations, mapActions } from "vuex";

export default {
  components: {
    Options,
    Header,
    ProductsList,
  },
  data: () => ({
    page: 1,
  }),
  created() {
    this.setData(this.$route);
    this.getProducts();
  },
  beforeRouteUpdate(to, from, next) {
    this.page = 1;
    this.resetFilters();
    this.setData(to);
    next();
  },
  beforeRouteLeave(to, from, next) {
    this.page = 1;
    this.resetFilters();

    if (to.name !== "Product-detail") {
      this.setSearch({});
      this.setSelectedType("");
    }
    if (to.name === "Products" || to.name === "Search-products") {
      this.setData(to);
    }
    next();
  },
  methods: {
    ...mapActions({
      getProducts: "products/getProducts",
    }),
    ...mapMutations({
      setSelectedType: "products/setSelectedType",
      setSearch: "products/setSearch",
      resetFilters: "products/resetFilters",
    }),
    setData(route) {
      if (route.name === "Products") {
        this.setSelectedType(route.params.category);
      }
      if (route.name === "Search-products") {
        this.setSearch({
          option: route.params.option,
          text: route.params.text,
        });
      }
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  width: 90%;
  margin: 47px auto 0 auto;
}
</style>
