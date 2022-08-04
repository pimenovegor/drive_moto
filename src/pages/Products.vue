<template>
  <div class="page">
    <Header
      @onChange="showMobOptions = !showMobOptions"
      :showMobOptions="showMobOptions"
    />
    <main class="main">
      <Options
        class="main__options"
        :class="{ main__options_show: showMobOptions }"
      />
      <ProductsList class="main__list" />
    </main>
  </div>
</template>

<script>
import Options from "@/components/Options.vue";
import Header from "@/components/ProductsHeader.vue";
import ProductsList from "@/components/ProductsList.vue";
import { mapActions } from "vuex";

export default {
  components: {
    Options,
    Header,
    ProductsList,
  },
  data: () => ({
    showMobOptions: false,
  }),
  created() {
    this.getProducts();
  },
  methods: {
    ...mapActions({
      getProducts: "products/getProducts",
    }),
  },
};
</script>

<style scoped>
.page {
  width: 95%;
  max-width: 1350px;
  margin: 46px auto 0 auto;
}
@media (max-width: 1000px) {
  .page {
    margin-top: 145px;
  }
}

.main {
  display: flex;
  width: 100%;
  margin-top: 47px;
}
@media (max-width: 1000px) {
  .main {
    flex-direction: column;
    align-items: center;
  }
}

.main__options {
  width: 25%;
  margin-right: 5%;
}
@media (max-width: 1000px) {
  .main__options {
    display: none;
    background-color: white;
    width: 90%;
    margin: 0 0 50px 0;
  }
}
.main__options_show {
  display: block;
}

.main__list {
  width: 70%;
}
@media (max-width: 1000px) {
  .main__list {
    width: 80%;
  }
}
</style>
