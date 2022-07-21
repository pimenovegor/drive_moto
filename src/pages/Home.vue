<template>
  <main class="main">
    <section class="info">
      <slider :banners="banners" class="info__slider" :height="450" />
      <Promotion :product="promProduct" class="info__promotion" />
    </section>
    <nav class="nav">
      <Search />
      <Category />
    </nav>
  </main>
</template>

<script>
import Category from "@/components/NavigationCategory.vue";
import Search from "@/components/NavigationSearch.vue";
import Promotion from "@/components/Promotion.vue";
import slider from "@/assets/ui/slider.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    slider,
    Promotion,
    Search,
    Category,
  },
  data: () => ({
    banners: [require('@/assets/img/banner1.png'), require('@/assets/img/banner2.jpg')],
  }),
  created() {
    this.getPromProduct();
  },
  computed: {
    ...mapState({
      promProduct: (state) => state.products.promProduct,
    }),
  },
  methods: {
    ...mapActions({
      getPromProduct: "products/getPromProduct",
    }),
  },
};
</script>

<style scoped>
.main {
  width: 90%;
  margin: 81px auto 0 auto;
}

.info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 77px;
}

.info__slider {
  width: 74%;
}

.info__promotion {
  width: 23%;
}
</style>
