<template>
  <div class="page">
    <header class="header">
      <Path />
    </header>
    <main class="main">
      <ProductInfo />
    </main>
  </div>
</template>

<script>
import Path from "@/components/Path.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import store from "@/store/index.js";
import { mapMutations } from "vuex";

export default {
  components: {
    Path,
    ProductInfo,
  },
  async beforeRouteEnter(to, from, next) {
    await store.dispatch("products/getProductById", { id: to.params.id });
    next();
  },
  beforeRouteLeave(to, from, next) {
    this.setSelectedProduct({});
    next();
  },
  methods: {
    ...mapMutations({
      setSelectedProduct: "products/setSelectedProduct",
    }),
  },
};
</script>

<style scoped>
.page {
  margin-bottom: 47px;
  max-width: 1350px;
  width: 95%;
  margin: 46px auto 0 auto;
}
@media (max-width: 1000px) {
  .page{
    margin-top: 145px;
  }
}


.main {
  margin-top: 47px;
}
</style>
