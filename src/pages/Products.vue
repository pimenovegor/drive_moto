<template>
 <Header />
  <main class="main">
    <Options />
    <ProductsList />
  </main>
</template>

<script>
import Options from "@/components/Options.vue";
import Header from "@/components/Header.vue";
import ProductsList from "@/components/ProductsList.vue";

export default {
  components: {
    Options,
    Header,
    ProductsList,
  },
};
</script>

<style scoped>
.main {
  display: flex;
  width: 90%;
  margin: 47px auto 0 auto;
}
</style>
