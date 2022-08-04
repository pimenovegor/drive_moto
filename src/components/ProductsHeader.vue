<template>
  <header class="header">
    <Path />
    <h1 class="main__type-product">{{ typeProduct || search.text }}</h1>
    <div class="manage">
      <select
        :value="sort"
        @change="setSort($event.target.value)"
        :style="windowWidth > 1000 ? bigStyle : mobStyle"
        class="manage__select"
      >
        <option>По популярности</option>
        <option>По возрастанию</option>
        <option>По убыванию</option>
      </select>

      <burger :active="showMobOptions" @onChange="$emit('onChange')" class="manage__btn" />
    </div>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Path from "@/components/Path.vue";
import burger from "@/assets/ui/burger.vue";

export default {
  components: { Path, burger },
  emits: ["onChange"],
  props: {
    showMobOptions: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    bigStyle: {
      background: `url(${require("@/assets/img/select-pointer.svg")}) no-repeat`,
      "background-position": "146px 14px",
    },
    mobStyle: {
      background: `url(${require("@/assets/img/group-pointer.svg")}) no-repeat`,
      "background-position": "0 2px",
    },
  }),
  computed: {
    ...mapState({
      typeProduct: (state) => state.products.selectedType,
      sort: (state) => state.products.sort,
      search: (state) => state.products.search,
      windowWidth: (state) => state.windowWidth,
    }),
  },
  methods: {
    ...mapMutations({
      setSort: "products/setSort",
    }),
  },
};
</script>

<style scoped>
.manage {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 1000px) {
  .manage {
    padding: 15px;
    border-top: 0.5px solid #c4c4c4;
    border-bottom: 0.5px solid #c4c4c4;
  }
}

.main__type-product {
  margin-top: 41px;
  text-transform: capitalize;
}

.manage__select {
  margin-left: auto;
  border: 1.5px solid #d7d9df;
  padding: 8px 46px 8px 20px;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 14px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
@media (max-width: 1000px) {
  .manage__select {
    font-weight: 600;
    margin-left: 0;
    border: none;
    padding: 0 0 0 28px;
  }
}

.manage__btn {
  display: none;
  width: 25px;
  height: 19px;
  border: none;
  outline: none;
  background-color: white;
}
@media (max-width: 1000px) {
  .manage__btn {
    display: inline-block;
  }
}
</style>
