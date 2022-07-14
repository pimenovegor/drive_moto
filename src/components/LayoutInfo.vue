<template>
  <section class="info">
    <div class="links-block">
      <a @click="routeSale()" class="links-block__link">Акции</a>
      <a @click="routeAll()" class="links-block__link">Все товары</a>
      <a @click="this.$router.push({ name: 'Home' })" class="links-block__link"
        >Главная</a
      >
    </div>

    <img
      src="@/assets/svg/logo.svg"
      alt="Drive moto"
      class="info__logo"
      @click="this.$router.push('/')"
    />

    <div class="links-block">
      <a
        href="https://yandex.ru/maps/-/CCUJV2wbKB"
        target="_blank"
        class="links-block__link"
      >
        <img src="@/assets/svg/location.svg" alt="location logo" />
        Москва, ул. Науки 25
      </a>
      <div class="img-links">
        <a href="/" class="img-links__link">
          <img src="@/assets/svg/liked.svg" alt="liked logo" />
        </a>
        <a href="/" class="img-links__link"
          ><img src="@/assets/svg/profile.svg" alt="profile logo" />
        </a>
        <a href="/" class="img-links__link img-links__link_basket"
          ><img src="@/assets/svg/basket.svg" alt="basket logo" />
          <p class="basket-amount">1</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      pushSelectedOptions: "products/pushSelectedOptions",
      resetFilters: "products/resetFilters",
    }),
    routeAll() {
      this.resetFilters();
      this.$router.push({
        name: "Products",
        params: { category: "Товары" },
      });
    },
    routeSale() {
      this.pushSelectedOptions({
        bdName: "sale",
        name: "Акции",
        value: true,
      });
      this.$router.push({ name: "Products", params: { category: "Товары" } });
    },
  },
};
</script>

<style scoped>
.info {
  width: 100%;
  margin-bottom: 21px;
  display: flex;
  justify-content: space-between;
}

.info__logo {
  margin-top: 25px;
  width: 80px;
  height: 76px;
}

.links-block {
  margin-top: 52px;
  width: 40%;
  display: flex;
  justify-content: space-between;
}

.links-block__link {
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
}

.img-links {
  width: 120px;
}

.img-links__link {
  margin: 5px;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  background-size: 100% 100%;
  width: 100px;
}

.img-links__link_basket {
  position: relative;
}

.basket-amount {
  top: 5px;
  left: 24px;
  position: absolute;
  height: 12px;
  width: 12px;
  font-size: 10px;
  font-weight: 100;
  text-align: center;
  padding: 3px;
  background-color: #1c62cd;
  color: white;
  border-radius: 50%;
}
</style>
