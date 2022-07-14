<template>
  <article
    class="promotion"
    @click="
      this.$router.push({
        name: 'Product-detail',
        params: { id: product.id },
      })
    "
  >
    <section class="info">
      <h2 class="info__title">Акция</h2>
      <div class="prices-block">
        <span class="prices-block__price"
          >{{ product.price?.toLocaleString("ru-RU") }} ₽</span
        >
        <span class="prices-block__old-price"
          >{{ product.old_price?.toLocaleString("ru-RU") }} ₽</span
        >
      </div>
    </section>
    <section class="main">
      <img :src="product.img" alt="product" class="main__img" />
      <span class="name">{{ product.name }}</span>
      <span class="name">{{ product.brand }} {{ product.model }}</span>
    </section>
    <section class="date-block">
      <span class="date-block__title">Акция действует до</span>
      <span class="date-block__date">{{ product.promotion_date }}</span>
    </section>
  </article>
</template>

<script>

export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.promotion {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
}

.info {
  display: flex;
  justify-content: space-between;
}

.info__title {
  margin-left: -0.5px;
  border-radius: 3px 0 0 0;
  align-self: flex-start;
  width: 90px;
  background: #1c62cd;
  text-transform: uppercase;
  color: white;
  text-align: center;
  padding-bottom: 8.8px;
  padding-top: 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  font-family: "Proxima Nova";
}

.prices-block {
  display: flex;
  flex-direction: column;
}

.prices-block__old-price {
  margin-right: 4px;
  align-self: flex-end;
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #c4c4c4;
  position: relative;
}

.prices-block__old-price:before {
  content: "";
  border-bottom: 0.5px solid #c4c4c4;
  position: absolute;
  width: 100%;
  height: 50%;
  transform: rotate(-12deg);
}

.prices-block__price {
  margin-right: 7px;
  color: #1c62cd;
  font-family: "Barlow", sans-serif;
  font-weight: 700;
  font-size: 27px;
}

.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 7px;
}

.main__img {
  width: 125px;
  height: 177px;
  margin-bottom: 4px;
}

.name {
  font-family: "SF Pro Display";
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
}

.date-block {
  margin: 0 0 -0.5px -0.5px;
  border-radius: 0 0 3px 3px;
  flex: 2;
  max-height: 100px;
  background: #f0f0f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.date-block__title {
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 18px;
}

.date-block__date {
  font-family: "Barlow";
  font-weight: 700;
  font-size: 18px;
  color: #1c62cd;
}
</style>
