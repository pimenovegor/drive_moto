<template>
  <nav class="nav">
    <LayoutInfo />
    <LayoutMenu />
  </nav>
</template>

<script>
import LayoutInfo from "../components/LayoutInfo.vue";
import LayoutMenu from "../components/LayoutMenu.vue";

export default {
  components: {
    LayoutInfo,
    LayoutMenu,
  },
};
</script>

<style scoped>
.nav {
  margin: 0px auto 0 auto;
  display: flex;
  flex-direction: column;
  width: 90%;
}
</style>
