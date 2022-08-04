<template>
  <section class="products-list">
    <ul class="list">
      <ProductCard
        v-for="product in pageProducts"
        :key="product.id"
        :product="product"
        @click="
          this.$router.push({
            name: 'Product-detail',
            params: { id: product.id },
          })
        "
      />
    </ul>

    <ul v-if="amountPages > 1" class="switch">
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
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    ProductCard,
  },
  data: () => ({
    selectedPage: 1,
  }),
  computed: {
    ...mapState({
      windowWidth: "windowWidth",
    }),
    ...mapGetters({
      products: "products/optionsFilter",
    }),
    pageAmountProducts() {
      if (this.windowWidth > 1300) return 9;
      return 10;
    },
    amountPages() {
      return Math.ceil(this.products.length / this.pageAmountProducts);
    },
    pageProducts() {
      return this.products.slice(
        this.pageAmountProducts * this.selectedPage - this.pageAmountProducts,
        this.pageAmountProducts * this.selectedPage
      );
    },
  },
  watch: {
    products() {
      this.selectedPage = 1;
    },
  },
  methods: {
    onClickSwitch(page) {
      this.selectedPage = page;
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
