<template>
  <section class="product">
    <div class="review">
      <span v-if="product.sale" class="review__sale">Акция</span>
      <img :src="product.img" alt="product" class="review__img" />
      <span v-if="product.old_price" class="review__old-price"
        >{{ product.old_price }} ₽</span
      >
      <span class="review__price">{{ product.price }} ₽</span>
    </div>

    <div class="info">
      <h2 class="info__name">
        {{ product.name }} {{ product.brand }} {{ product.model }}
      </h2>
      <span class="info__code">Код товара: {{ product.id }}</span>
      <table class="table">
        <tr>
          <th class="table__header">Характеристики</th>
        </tr>
        <tr v-for="feature in features" :key="feature" class="table__row">
          <td>{{ feature.name }}</td>
          <td>{{ feature.value }}</td>
        </tr>
      </table>
      <button
        v-if="product.feature?.length > 3"
        @click="limitFeatures = !limitFeatures"
        class="limit-btn"
      >
        {{ limitFeatures ? "Показать еще" : "Скрыть" }}
      </button>
      <button class="buy-btn">Купить</button>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    limitFeatures: true,
  }),
  computed: {
    ...mapState({
      product: (state) => state.products.selectedProduct,
    }),
    features() {
      if (this.limitFeatures) {
        return this.product.feature?.slice(0, 3);
      }
      return this.product.feature;
    },
  },
};
</script>

<style scoped>
.product {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.review {
  width: 45%;
  display: flex;
  flex-direction: column;
}

.review__sale {
  align-self: flex-start;
  padding: 13px 26px 13px 26px;
  font-family: "SF Pro Display", sans-serif;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.12em;
  color: white;
  background: #1c62cd;
  border-radius: 3px;
}

.review__img {
  max-width: 90%;
  max-height: 500px;
}

.review__price {
  font-family: "Barlow";
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  align-self: center;
}

.review__old-price {
  margin-bottom: 6px;
  align-self: center;
  font-family: "Barlow";
  font-weight: 400;
  font-size: 30px;
  color: #c4c4c4;
  position: relative;
}

.review__old-price:before {
  content: "";
  border-bottom: 0.5px solid #c4c4c4;
  position: absolute;
  width: 100%;
  height: 50%;
  transform: rotate(-12deg);
}

.info {
  width: 45%;
}

.info__code {
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 51px;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 15px;
  color: #2f3035;
  opacity: 0.6;
}

.table {
  width: 100%;
}

.table__header {
  display: inline-block;
  font-family: "SF Pro Display";
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 5px;
  margin-bottom: 20px;
  border-bottom: 2px solid #1c62cd;
}

.table__row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 6px;
  border-bottom: 1px solid #d5d5d5;
}

.limit-btn {
  display: block;
  border: none;
  outline: none;
  background: white;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 14px;
  text-decoration-line: underline;
  color: #1c62cd;
}
.limit-btn:hover {
  opacity: 0.6;
}

.buy-btn {
  margin-top: 45px;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ffffff;
  background: #1c62cd;
  border-radius: 3px;
  border: none;
  outline: none;
  padding: 17px 53px 17px 53px;
}
</style>
