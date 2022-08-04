<template>
  <section class="card">
    <h3 class="name">Параметры</h3>
    <OptionsDefault
      :name="'Наличие'"
      :open="false"
      :options="availabilityOptions"
    />
    <OptionsDefault :name="'Новинки'" :open="true" :options="noveltyOptions" />
    <OptionsPrice />
    <OptionsDefault :name="'Бренд'" :open="false" :options="brandOptions" />
    <button @click="resetFilters()" class="card__btn">Сбросить фильтр</button>
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
    }),
  },
  methods: {
    ...mapMutations({
      resetFilters: "products/resetFilters",
    }),
  },
};
</script>

<style scoped>

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

.card__btn {
  display: block;
  margin: 46px auto 0 auto;
  border: none;
  outline: none;
  background: white;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 13px;
  text-decoration-line: underline;
  color: #c4c4c4;
}
.card__btn:hover {
  opacity: 0.6;
}
</style>
