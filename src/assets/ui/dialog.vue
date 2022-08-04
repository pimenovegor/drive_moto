<template>
  <div @click.self="$emit('onClose')" class="background">
    <slot></slot>
  </div>
</template>

<script>
export default {
  emits: ["onClose"],
};
</script>

<style scoped>
.background {
  z-index: 60;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
}
</style>
