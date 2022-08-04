<template>
  <main class="page">
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
    banners: [
      require("@/assets/img/banner1.png"),
      require("@/assets/img/banner2.jpg"),
    ],
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
.page{
  max-width: 1350px;
  width: 95%;
  margin: 81px auto 0 auto;
}
@media (max-width: 1000px) {
  .page{
    margin-top: 165px;
  }
}

.info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 77px;
  height: 450px;
}


.info__slider {
  width: 74%;
}
@media (max-width: 1000px) {
  .info__slider {
    display: none;
  }
}


.info__promotion {
  width: 23%;
}
@media (max-width: 1000px){
  .info__promotion{
    margin: 0 auto 0 auto;
    width: 60%;
  }
}
@media (max-width: 750px){
  .info__promotion{
    margin: 0 auto 0 auto;
    width: 80%;
  }
}
</style>
