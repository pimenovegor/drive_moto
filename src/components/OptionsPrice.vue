<template>
  <div class="options">
    <button
      @click="show = !show"
      :id="btnId"
      :style="{
        background: `url(${require('@/assets/svg/Shape.svg')}) no-repeat`,
      }"
      :class="{ options__btn_revert: show === true }"
      class="options__btn"
    ></button>
    <label :for="btnId" class="options__name">Цена</label>
    <div v-if="show === true" class="options__list">
      <Slider
        @change="setPriceRange($event)"
        :modelValue="priceRange"
        :max="maxPrice"
        :tooltips="false"
        class="slider"
      />
      <span class="value"
        >от<input
          :value="priceRange[0]"
          @input="setPriceRange([$event.target.value, priceRange[1]])"
          :style="{ width: `${String(priceRange[0]).length * 8}px` }"
          class="value__number"
      /></span>
      <span class="value"
        >до<input
          :value="priceRange[1]"
          @input="setPriceRange([priceRange[0], $event.target.value])"
          :style="{ width: `${String(priceRange[1]).length * 8}px` }"
          class="value__number"
      /></span>
    </div>
  </div>
</template>

<script>
import Slider from "@vueform/slider";
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: {
    Slider,
  },
  data: () => ({
    show: false,
    btnId: Math.random(),
  }),
  created(){
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
.slider {
  width: 100%;
  --slider-height: 3px;
  --slider-bg: #e0e0e0;
  --slider-handle-bg: #1c62cd;
  --slider-connect-bg: #1c62cd;
  --slider-handle-width: 7.38px;
  --slider-handle-height: 7.38px;
}

.value {
  cursor:default;
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

.options__btn {
  cursor: pointer;
  width: 30px;
  height: 16px;
  outline: none;
  border-top: 7px solid;
  border-color: transparent;
}

.options__btn_revert {
  border-left: 14px solid transparent;
  border-top: 3px solid transparent;
  transform: rotate(180deg);
}

.options__name {
  cursor: pointer;
  display: inline-block;
  margin-bottom: 19px;
  font-family: "SF Pro Display";
  font-weight: 600;
  font-size: 16px;
}

.options__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 41px;
}
</style>
