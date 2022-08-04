<template>
  <button
    @click="$emit('onChange')"
    class="menu-burger"
    :class="{ active: active }"
  >
    <span class="menu-burger__line"></span>
  </button>
</template>

<script>
export default {
  emits: ["onChange"],
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.menu-burger {
  display: none;
  border: none;
  outline: none;
  background-color: white;
  position: relative;
  width: 30px;
  height: 19px;
}
@media (max-width: 1000px) {
  .menu-burger {
    display: block;
  }
  .menu-burger::before,
  .menu-burger::after {
    content: "";
    background-color: #2f3035;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    border-radius: 3px;
    transition: all 0.3s ease 0s;
  }
  .menu-burger::before {
    top: 0;
  }
  .menu-burger.active::before {
    transform: rotate(45deg);
    top: 9px;
  }
  .menu-burger::after {
    bottom: 0;
  }
  .menu-burger.active::after {
    transform: rotate(-45deg);
    bottom: 9px;
  }
  .menu-burger__line {
    background-color: #2f3035;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    top: 8px;
    transition: all 0.3s ease 0s;
    border-radius: 3px;
  }
  .menu-burger.active .menu-burger__line {
    transform: scale(0);
  }
}
</style>
