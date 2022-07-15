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
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    show: true,
    btnId: Math.random(),
  }),
};
</script>

<style scoped>
.options__btn {
  cursor: pointer;
  margin-right: 14px;
  width: 13px;
  height: 11px;
  outline: none;
  border: none;
}

.options__btn_revert {
  transform: rotate(180deg);
}

.options__name {
  cursor: pointer;
  display: inline-block;
  margin-bottom: 19px;
  font-family: "SF Pro Display";
  font-weight: 700;
  font-size: 16px;
}

.options__list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
