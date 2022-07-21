<template>
  <ul class="path">
    <li>
      <span @click="this.$router.push({ name: 'Home' })" class="path__position"
        >Главная</span
      >
    </li>

    <li v-if="typeProduct || search.text">
      <pointerIcon class="path__pointer" />
      <span
        @click="$route.name === 'Product-detail' ? $router.go(-1) : false"
        class="path__position"
        >{{ typeProduct || search.text }}</span
      >
    </li>

    <li v-if="selectedProduct.name">
      <pointerIcon class="path__pointer" />
      <span class="path__position"
        >{{ selectedProduct.name }} {{ selectedProduct.brand }}
        {{ selectedProduct.model }}</span
      >
    </li>
  </ul>
</template>

<script>
import pointerIcon from "@/assets/svg/pointerIcon.vue";
import { mapState } from "vuex";

export default {
  components: {
    pointerIcon,
  },
  computed: {
    ...mapState({
      selectedProduct: (state) => state.products.selectedProduct,
      typeProduct: (state) => state.products.selectedType,
      search: (state) => state.products.search,
    }),
  },
};
</script>

<style scoped>
.path li {
  display: inline;
}

.path {
  list-style: none;
}

.path__position {
  text-transform: capitalize;
  cursor: pointer;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 15px;
  color: #c4c4c4;
}

.path__pointer {
  margin: 0 10px 0 10px;
}
</style>
