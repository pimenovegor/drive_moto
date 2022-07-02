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
    <label :for="btnId" class="options__name">{{ name }}</label>
    <ul v-if="show === true" class="options__list">
      <li v-for="option in options" :key="option.name" class="options__param">
        <input
          :id="option.name"
          type="checkbox"
          :value="option"
          :checked="checked(option)"
          @change="change(option, $event.target.checked)"
          class="options__checkbox"
        />
        <label :for="option.name" class="options__label">{{
          option.name
        }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    show: false,
    btnId: Math.random()
  }),
  computed: {
    ...mapState({
      selectedOptions: (state) => state.products.selectedOptions,
    }),
  },
  methods: {
    ...mapMutations({
      spliceSelectedOptions: "products/spliceSelectedOptions",
      pushSelectedOptions: "products/pushSelectedOptions",
    }),
    change(option, checked) {
      if (checked) {
        this.pushSelectedOptions(option);
      } else {
        this.selectedOptions.forEach((el, id) => {
          if (JSON.stringify(el) === JSON.stringify(option)) {
            this.spliceSelectedOptions(id);
          }
        });
      }
    },
    checked(option) {
      return (
        this.selectedOptions?.some(
          (el) => JSON.stringify(el) === JSON.stringify(option)
        ) ?? false
      );
    },
  },
};
</script>

<style scoped>
.options__btn {
  cursor: pointer;
  width: 30px;
  height: 16px;
  outline: none;
  border: 1px solid;
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
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 41px;
}

.options__label {
  cursor: pointer;
  position: relative;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 14px;
}

.options__checkbox {
  cursor: pointer;
  margin-right: 12px;
  width: 14px;
  height: 14px;
  background: #c4c4c4;
}
</style>
