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
  created() {
    this.getBanners();
    this.getPromProduct();
  },
  computed: {
    ...mapState({
      banners: (state) => state.banners.banners,
      promProduct: (state) => state.banners.promProduct,
    }),
  },
  methods: {
    ...mapActions({
      getBanners: "banners/getBanners",
      getPromProduct: "banners/getPromProduct",
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
