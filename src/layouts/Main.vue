<template>
  <nav class="nav">
    <LayoutInfo
      @showMobMenu="showMobMenu = !showMobMenu"
      :showMobMenu="showMobMenu"
    />
    <LayoutMenu
      @close="showMobMenu = false"
      class="menu"
      :class="{ 'menu-show': showMobMenu }"
    />
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
  data: () => ({
    showMobMenu: false,
    body: document.getElementsByTagName("body")[0],
  }),
  watch: {
    showMobMenu() {
      this.showMobMenu
        ? (this.body.style.overflow = "hidden")
        : (this.body.style.overflow = "auto");
    },
  },
};
</script>

<style scoped>
.nav {
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1350px;
  width: 95%;
}

@media (max-width: 1000px) {
  .menu {
    top: -100%;
  }
}

@media (max-width: 1000px) {
  .menu-show {
    top: 0;
  }
}
</style>
