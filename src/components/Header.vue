<template>
  <header class="header">
    <div class="path">
      <span @click="this.$router.push('/')" class="path__position">Главная</span
      ><img
        src="@/assets/svg/pointer.svg"
        alt="pointer"
        class="path__pointer"
      /><span class="path__position">{{ typeProduct || search.text}}</span>
    </div>

    <h1 class="main__type-product">{{ typeProduct || search.text }}</h1>

    <select
      :value="sort"
      @change="setSort($event.target.value)"
      :style="{
        background: `url(${require('@/assets/svg/select-pointer.svg')}) no-repeat`,
        'background-position': '146px 14px',
      }"
      class="header__select"
    >
      <option>По популярности</option>
      <option>По возрастанию</option>
      <option>По убыванию</option>
    </select>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      typeProduct: (state) => state.products.selectedType,
      sort: (state) => state.products.sort,
      search: (state)=> state.products.search
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
.header {
  display: flex;
  flex-direction: column;
  margin-bottom: 47px;
  width: 90%;
  margin: 46px auto 0 auto;
}

.path__position {
  text-transform: capitalize;
  cursor: pointer;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 15px;
  color: #c4c4c4;
}

.path__pointer {
  margin: 0 10px 0 10px;
}

.main__type-product {
  margin-top: 41px;
  text-transform: capitalize;
}

.header__select {
  align-self: flex-end;
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
</style>
