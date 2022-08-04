<template>
  <ul class="menu">
    <li
      v-for="category in categorys"
      :key="category"
      @click="onClick(category)"
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
  emits: ["close"],
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
  methods: {
    onClick(category) {
      this.$router.push({ name: "Products", params: { category } });
      this.$emit("close");
    },
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
  transition: all 0.3s ease 0s;
}
@media (max-width: 1000px) {
  .menu {
    overflow: auto;
    flex-direction: column;
    background: rgb(253, 253, 253);
    position: fixed;
    z-index: 10;
    left: 0;
    width: 100%;
    height: 100%;
  }
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
@media (max-width: 1000px) {
  .menu__link {
    margin-bottom: 20px;
  }
  .menu__link:first-child {
    margin-top: 150px;
  }
  .menu__link:hover {
    border-bottom: none;
  }
}

.menu__link_active-line {
  font-weight: 700;
  border-bottom: 3px solid #1c62cd;
}
@media (max-width: 1000px) {
  .menu__link_active-line {
    border-bottom: none;
  }
}
</style>
