<template>
  <section class="product">
    <div class="review">
      <span v-if="product.sale" class="review__sale">Акция</span>
      <img :src="product.img" alt="product" class="review__img" />
      <span v-if="product.old_price" class="review__old-price"
        >{{ product.old_price?.toLocaleString("ru-RU") }} ₽</span
      >
      <span class="review__price"
        >{{ product.price?.toLocaleString("ru-RU") }} ₽</span
      >
    </div>

    <div class="info">
      <h2 class="info__name">
        {{ product.name }} {{ product.brand }} {{ product.model }}
      </h2>
      <span class="info__code">Код товара: {{ product.id }}</span>

      <table v-if="features" class="table">
        <tr>
          <th class="table__header">Характеристики</th>
        </tr>
        <tr v-for="feature in features" :key="feature" class="table__row">
          <td class="table__param-name">{{ feature.name }}</td>
          <td class="table__param-value">{{ feature.value }}</td>
        </tr>
      </table>
      <button
        v-if="product.feature?.length > 3"
        @click="limitFeatures = !limitFeatures"
        class="limit-btn"
      >
        {{ limitFeatures ? "Показать еще" : "Скрыть" }}
      </button>

      <button v-if="product.availability" @click="onAddProduct(product)" class="buy-btn">Купить</button>
      <span v-else class="availability">нет в наличии</span>
    </div>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";

export default {
  data: () => ({
    limitFeatures: true,
  }),
  computed: {
    ...mapState({
      product: (state) => state.products.selectedProduct,
      auth: (state) => state.auth.auth,
    }),
    ...mapGetters({
      findSameInBasket: "basket/findById",
    }),
    features() {
      if (this.limitFeatures) {
        return this.product.feature?.slice(0, 3);
      }
      return this.product.feature;
    },
  },
  methods: {
    ...mapActions({
      addProduct: "basket/addProduct",
      changeAmount: "basket/changeAmount",
    }),
    ...mapMutations({
      setShowAuth: "setShowAuth",
    }),
    async onAddProduct(product) {
      if (!this.auth) return this.setShowAuth(true);

      const { key, amount } = this.findSameInBasket(product.id);
      if (key && amount) {
        await this.changeAmount({ key, amount: amount + 1 });
        return;
      }

      await this.addProduct({ product });
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
@media (max-width: 1000px){
  .product{
    flex-direction: column;
  }
}

.review {
  width: 45%;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-width: 1000px){
  .review{
    width: 100%;
    margin-bottom: 30px;
  }
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
  align-self: center;
  height: 70%;
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
@media (max-width: 1000px){
  .info{
    width: 100%;
  }
}


@media (max-width: 1000px){
  .info__name{
    text-align: center;
    margin-bottom: 30px;
  }
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

.table__param-name {
  margin-right: 50px;
}

.table__param-value {
  text-align: end;
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
  display: block;
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

.buy-btn:active {
  opacity: 0.6;
}

.availability{
  display: block;
  font-weight: 700;
  margin-top: 50px;
}
</style>
