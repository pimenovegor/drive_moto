<template>
  <section class="card">
    <h3 class="name">Параметры</h3>
    <OptionsDefault :name="'Наличие'" :options="availabilityOptions" />
    <OptionsDefault :name="'Новинки'" :options="noveltyOptions" />
    <OptionsPrice />
    <OptionsDefault :name="'Бренды'" :options="brandOptions" />
  </section>
</template>

<script>
import OptionsDefault from "@/components/OptionsDefault.vue";
import OptionsPrice from "@/components/OptionsPrice.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    OptionsDefault,
    OptionsPrice,
  },
  data: () => ({
    availabilityOptions: [
      { bdName: "availability", name: "В наличие", value: true },
      { bdName: "availability", name: "Под заказ", value: false },
    ],
    noveltyOptions: [
      { bdName: "new", name: "Новинки", value: true },
      { bdName: "sale", name: "Акции", value: true },
    ],
  }),
  computed: {
    ...mapGetters({
      brandOptions: "products/brands",
      typeFilter: "products/typeFilter",
    }),
  },
  watch: {
    typeFilter() {
      this.resetFilters();
    },
  },
  methods: {
    ...mapMutations({
      resetFilters: "products/resetFilters",
    }),
  },
};
</script>

<style scoped>
.card {
  width: 25%;
  margin-right: 5%;
}

.name {
  display: inline-block;
  font-family: "SF Pro Display";
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  border-bottom: 2px solid #1c62cd;
  margin-bottom: 41px;
}
</style>
