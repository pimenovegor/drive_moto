<template>
  <dialogUi @onClose="setShowBasket(false)">
    <ul class="list">
      <h2 class="list__name">Корзина</h2>
      <li v-for="product in basket" :key="product.id" class="list__product">
        {{ product.name }} {{ product.brand }} {{ product.model }}
      </li>
      <span v-if="!basketLength" class="list__empty">пусто</span>
    </ul>
  </dialogUi>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  emits: ["onClose"],
  computed:{
    ...mapState({
        basket: (state)=>state.basket.basket
    }),
    ...mapGetters({
        basketLength: "basket/basketLength",
    })
  },
  methods: {
    ...mapMutations({
      setShowBasket: "basket/setShowBasket",
    }),
  },
};
</script>

<style scoped>
.list {
  list-style: none;
  min-width: 20%;
  border-radius: 5px;
  padding: 30px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background: #f0f0f4;
}

.list__name {
  align-self: center;
  margin-bottom: 20px;
}

.list__product {
  padding: 8px 10px 8px 10px;
  border-bottom: 1px solid;
}

.list__product:last-child {
  border-bottom: none;
}

.list__empty{
    align-self: center;
}
</style>
