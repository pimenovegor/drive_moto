<template>
  <ul class="list">
    <li v-for="product in products" :key="product.id" class="product">
      <header class="product__header">
        <span
          :class="{ product__sale_show: product.sale }"
          class="product__sale"
          >Акция</span
        >
        <button
          :style="{
            background: `url(${require('@/assets/svg/liked.svg')}) no-repeat`,
          }"
          class="product__btn-like"
        ></button>
      </header>
      <img :src="product.img" alt="product" class="product__img" />
      <h2 class="product__name">
        {{ product.name }} {{ product.brand }} {{ product.model }}
      </h2>
      <span v-if="product.availability" class="product__price"
        >{{ product.price?.toLocaleString("ru-RU") }} ₽</span
      >
      <span v-else class="product__availability"> нет в наличии </span>
      <button v-if="product.availability" class="product__btn-basket">
        <img src="@/assets/svg/basket-white.svg" alt="basket" />
      </button>
      <span class="product__hover-info">Посмотреть товар</span>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      products: "products/optionsFilter",
    }),
  },
};
</script>

<style scoped>
.list {
  width: 75%;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
}

.product {
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  margin: 29px 3% 0 0;
  width: 31.33%;
  display: flex;
  flex-direction: column;
  border: 1px solid #cdcdcd;
  border-radius: 3px 3px 0 3px;
}

.product:nth-child(-n + 3) {
  margin-top: 0;
}
.product:nth-child(3n) {
  margin-right: 0;
}

.product:hover {
  border-color: transparent;
  box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25);
}

.product:hover .product__name,
.product:hover .product__price {
  color: #1c62cd;
}

.product__header {
  display: flex;
  justify-content: space-between;
}

.product__sale {
  align-self: flex-start;
  padding: 8px 15px 8px 15px;
  visibility: hidden;
  background: #1c62cd;
  color: white;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.07em;
  border-radius: 3px 0 0 0;
}

.product__sale_show {
  visibility: unset;
}

.product__btn-like {
  cursor: pointer;
  display: inline-block;
  margin: 15px 19px 0 0;
  border: none;
  outline: none;
  width: 28px;
  height: 26px;
}

.product__img {
  display: inline-block;
  height: 190px;
  margin: 14px 11px 24px 11px;
}

.product__name {
  margin: 0 21px 25px 21px;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
}

.product__price {
  font-family: "Barlow";
  font-weight: 700;
  font-size: 30px;
  text-align: center;
}

.product__availability {
  font-family: "SF Pro Display";
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
}

.product__btn-basket {
  cursor: pointer;
  align-self: flex-end;
  width: 60px;
  height: 40px;
  border: none;
  outline: none;
  background: #1c62cd;
  border-radius: 10px 0px 0px 0px;
}

.product__hover-info {
  display: none;
  position: absolute;
  top: 30%;
  align-self: center;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding: 17px 21px 17px 21px;
  background: #ffffff;
  opacity: 0.9;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.product:hover .product__hover-info {
  display: block;
}
</style>
