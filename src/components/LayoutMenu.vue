<template>
  <ul class="menu">
    <li
      v-for="category in categorys"
      :key="category"
      @click="this.$router.push({ name: 'Products', params: { category } })"
      :class="{ 'menu__link_active-line': selectedType === category }"
      class="menu__link"
    >
      {{ category }}
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    categorys: [
      "Квадроциклы",
      "Катера",
      "Гидроциклы",
      "Лодки",
      "Вездеходы",
      "Снегоходы",
      "Двигатели",
      "Запчасти",
    ],
  }),
  computed: {
    ...mapState({
      selectedType: (state) => state.products.selectedType,
    }),
  },
};
</script>

<style scoped>
.menu {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 20px;
  background-color: #f0f0f4;
  height: 53px;
  width: 100%;
}

.menu__link {
  cursor: pointer;
  padding: 15px 0 15px 0;
  text-decoration: none;
  text-transform: capitalize;
}

.menu__link:nth-child(1n) {
  margin-left: 2px;
}

.menu__link:last-child {
  margin-right: 2px;
}

.menu__link:hover {
  border-bottom: 3px solid #1c62cd;
}

.menu__link_active-line {
  font-weight: 700;
  border-bottom: 3px solid #1c62cd;
}
</style>
