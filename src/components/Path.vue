<template>
    <ul class="path">
      <li>
        <span @click="this.$router.push('/')" class="path__position"
          >Главная</span
        >
      </li>

      <li v-if="typeProduct || search.text">
        <img
          src="@/assets/svg/pointer.svg"
          alt="pointer"
          class="path__pointer"
        /><span
          @click="this.$router.push(`/${typeProduct || search.text}`)"
          class="path__position"
          >{{ typeProduct || search.text }}</span
        >
      </li>
      
      <li v-if="selectedProduct.name">
        <img
          src="@/assets/svg/pointer.svg"
          alt="pointer"
          class="path__pointer"
        />
        <span class="path__position"
          >{{ selectedProduct.name }} {{ selectedProduct.brand }}
          {{ selectedProduct.model }}</span
        >
      </li>
    </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
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
.path li{
  display: inline;
}

.path{
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
