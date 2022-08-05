<template>
  <optionsForm :name="'Цена'" :open="true" class="options-form">
    <Slider
      @change="setPriceRange($event)"
      :modelValue="priceRange"
      :max="maxPrice"
      :tooltips="false"
      class="slider"
    />
    <span class="value"
      >от<input
        type="number"
        :value="priceRange[0]"
        @input="setPriceRange([$event.target.value, priceRange[1]])"
        :style="{ width: `${String(priceRange[0]).length * 8}px` }"
        class="value__number"
    /></span>
    <span class="value"
      >до<input
        type="number"
        :value="priceRange[1]"
        @input="setPriceRange([priceRange[0], $event.target.value])"
        :style="{ width: `${String(priceRange[1]).length * 8}px` }"
        class="value__number"
    /></span>
  </optionsForm>
</template>

<script>
import optionsForm from "@/assets/ui/options-form.vue";
import Slider from "@vueform/slider";
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: {
    Slider,
    optionsForm,
  },
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  created() {
    this.setPriceRange([0, this.maxPrice]);
  },
  computed: {
    ...mapState({
      priceRange: (state) => state.products.priceRange,
    }),
    ...mapGetters({
      maxPrice: "products/maxPrice",
    }),
  },
  watch: {
    maxPrice() {
      this.setPriceRange([0, this.maxPrice]);
    },
  },
  methods: {
    ...mapMutations({
      setPriceRange: "products/setPriceRange",
    }),
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style scoped>
.options-form {
  margin-bottom: 20px;
}

.slider {
  margin-top: 24px;
  width: 100%;
  --slider-height: 3px;
  --slider-bg: #e0e0e0;
  --slider-handle-bg: #1c62cd;
  --slider-connect-bg: #1c62cd;
  --slider-handle-width: 7.38px;
  --slider-handle-height: 7.38px;
}
@media (max-width: 1000px) {
  .slider {
     --slider-height: 5px;
    --slider-handle-width: 15px;
    --slider-handle-height: 15px;
  }
}

.value {
  margin-bottom: 20px;
  cursor: default;
  margin-top: 23px;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 14px;
  color: #c4c4c4;
}

.value__number {
  outline: none;
  border: none;
  margin-left: 12px;
  font-family: "Barlow";
  font-weight: 400;
  font-size: 14px;
  text-decoration-line: underline;
}
.value__number::-webkit-outer-spin-button,
.value__number::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
