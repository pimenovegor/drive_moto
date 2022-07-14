<template>
  <header class="header">
    <Path />
  </header>
  <main class="main">
    <ProductInfo />
  </main>
</template>

<script>
import Path from "@/components/Path.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import store from "@/store/index.js";
import { mapMutations } from 'vuex';

export default {
  components: {
    Path,
    ProductInfo,
  },
  async beforeRouteEnter(to, from, next) {
    await store.dispatch("products/getProductById", to.params.id);
    next();
  },
  beforeRouteLeave(to, from, next) {
    if(to.name !== "Products"){
      this.setSearch({})
      this.setSelectedType("")
    }
    this.setSelectedProduct({});
    next();
  },
  methods: {
    ...mapMutations({
      setSelectedProduct: "products/setSelectedProduct",
      setSearch: "products/setSearch",
      setSelectedType: "products/setSelectedType",
    }),
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 47px;
  width: 90%;
  margin: 46px auto 0 auto;
}

.main {
  display: flex;
  width: 90%;
  margin: 47px auto 0 auto;
}
</style>
