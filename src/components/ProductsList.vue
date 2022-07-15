<template>
  <section class="products-list">
    <ul class="list">
      <ProductCard :products="pageProducts" />
    </ul>
    
    <ul class="switch">
      <li
        v-for="number in amountPages"
        :key="number"
        @click="onClickSwitch(number)"
        class="switch__number"
        :class="{ switch__number_selected: selectedPage === number }"
      >
        {{ number }}
      </li>
    </ul>
  </section>
</template>

<script>
import ProductCard from "@/components/ProductsListCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ProductCard,
  },
  props: {
    selectedPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    ...mapGetters({
      products: "products/optionsFilter",
    }),
    amountPages() {
      return Math.ceil(this.products.length / 9);
    },
    pageProducts() {
      return this.products.slice(
        9 * this.selectedPage - 9,
        9 * this.selectedPage
      );
    },
  },
  methods: {
    onClickSwitch(page) {
      this.$emit("change", page);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.products-list {
  width: 75%;
  display: flex;
  flex-direction: column;
}

.list {
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 70px;
}

.switch {
  list-style: none;
  align-self: center;
}

.switch__number {
  display: inline-block;
  cursor: pointer;
  margin-right: 16px;
  padding: 8px 13px 8px 13px;
  font-family: "Barlow";
  font-weight: 400;
  font-size: 18px;
  color: #c4c4c4;
}
.switch__number:last-child {
  margin-right: 0;
}

.switch__number_selected {
  border: 2px solid #1c62cd;
  color: #1c62cd;
}
</style>
