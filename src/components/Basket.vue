<template>
  <dialogUi @onClose="setShowBasket(false)">
    <ul class="list">
      <h2 class="list__name">Корзина</h2>
      <li
        v-for="(product, key) in basket"
        :key="product.id"
        class="list__product"
      >
        <span class="list__product-name"
          >{{ product.name }} {{ product.brand }} {{ product.model }}</span
        >
        <input
          id="amountInput"
          @change="onChangeAmount(key, Number($event.target.value))"
          :value="product.amount"
          type="number"
          class="list__input"
        />
        <button @click="this.deleteProduct({ key })" class="list__btn">
          Удалить
        </button>
      </li>
      <span v-if="!basketLength" class="list__empty">пусто</span>
    </ul>
  </dialogUi>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      basket: (state) => state.basket.basket,
    }),
    ...mapGetters({
      basketLength: "basket/basketLength",
    }),
  },
  methods: {
    ...mapMutations({
      setShowBasket: "setShowBasket",
    }),
    ...mapActions({
      deleteProduct: "basket/deleteProduct",
      changeAmount: "basket/changeAmount",
    }),
    async onChangeAmount(key, amount) {
      const input = document.getElementById("amountInput")
      input.setAttribute("disabled", "true");
      amount === 0
        ? await this.deleteProduct({ key })
        : await this.changeAmount({ key, amount });
      input.removeAttribute("disabled");
    },
  },
};
</script>

<style scoped>
.list {
  list-style: none;
  min-width: 20%;
  max-width: 80%;
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
  display: flex;
  align-items: center;
}

.list__product-name {
  margin-right: 30px;
}

.list__input {
  text-align: center;
  border-radius: 5px;
  margin-left: auto;
  width: 34px;
  outline: none;
  border: 1px solid;
}
.list__input::-webkit-inner-spin-button,
.list__input::-webkit-outer-spin-button {
  opacity: 1;
}

.list__btn {
  margin-left: 20px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 11px;
  background: #1c62cd;
  color: white;
  border: none;
}

.list__btn:active {
  opacity: 0.6;
}

.list__product:last-child {
  border-bottom: none;
}

.list__empty {
  align-self: center;
}
</style>
