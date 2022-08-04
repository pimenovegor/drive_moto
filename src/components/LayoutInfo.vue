<template>
  <section class="info">
    <div class="links-block links-block_main">
      <a @click="routeSale()" class="links-block__link">Акции</a>
      <a @click="routeAll()" class="links-block__link">Все товары</a>
      <a @click="this.$router.push({ name: 'Home' })" class="links-block__link"
        >Главная</a
      >
    </div>

    <burger
      :active="showMobMenu"
      @onChange="$emit('showMobMenu')"
      class="burger"
    />

    <img
      src="@/assets/img/logo.svg"
      alt="Drive moto"
      class="info__logo"
      @click="this.$router.push('/')"
    />

    <div class="links-block">
      <a
        href="https://yandex.ru/maps/-/CCUJV2wbKB"
        target="_blank"
        class="links-block__link links-block__link_hidden"
      >
        <locationIcon />
        Москва, ул. Науки 25
      </a>

      <div class="img-links">
        <a
          @click="auth ? setShowFavorite(true) : setShowAuth(true)"
          class="img-links__link"
        >
          <likeIcon />
        </a>
        <a @click="setShowAuth(true)" class="img-links__link"
          ><profileIcon />
        </a>
        <a
          @click="auth ? setShowBasket(true) : setShowAuth(true)"
          class="img-links__link img-links__link_basket"
          ><basketIcon />
          <p v-if="basketLength" class="basket-amount">{{ basketLength }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import likeIcon from "@/assets/svg/likeIcon.vue";
import profileIcon from "@/assets/svg/profileIcon.vue";
import basketIcon from "@/assets/svg/basketIcon.vue";
import locationIcon from "@/assets/svg/locationIcon.vue";
import burger from "@/assets/ui/burger.vue";
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  emits: ["showMobMenu"],
  components: {
    likeIcon,
    profileIcon,
    basketIcon,
    locationIcon,
    burger,
  },
  props: {
    showMobMenu: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      auth: (state) => state.auth.auth,
    }),
    ...mapGetters({
      basketLength: "basket/basketLength",
    }),
  },
  methods: {
    ...mapMutations({
      pushSelectedOptions: "products/pushSelectedOptions",
      resetFilters: "products/resetFilters",
      setShowAuth: "setShowAuth",
      setShowBasket: "setShowBasket",
      setShowFavorite: "setShowFavorite",
    }),
    routeAll() {
      this.resetFilters();
      this.$router.push({
        name: "Products",
        params: { category: "Товары" },
      });
    },
    routeSale() {
      this.resetFilters();
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
@media (max-width: 1000px) {
  .info {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    padding: 0 20px 0 20px;
    z-index: 15;
    height: 67px;
    background-color: white;
    position: fixed;
    margin-bottom: 0;
    align-items: center;
  }
}

.info__logo {
  margin-top: 25px;
  width: 80px;
}
@media (max-width: 1000px) {
  .info__logo {
    width: 44px;
    margin: 0;
  }
}

.links-block {
  margin-top: 52px;
  width: 40%;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 1000px) {
  .links-block {
    margin-top: 0;
    width: auto;
  }
  .links-block_main {
    left: 0;
    padding: 0 20px 0 20px;
    margin-top: 0;
    height: 53px;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    position: fixed;
    top: 67px;
    background: #f0f0f4;
  }
}

.links-block__link {
  color: #2f3035;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
}
@media (max-width: 1000px) {
  .links-block__link_hidden {
    display: none;
  }
}

.burger {
  margin-right: 50px;
}

.img-links__link {
  cursor: pointer;
  margin-left: 5px;
  text-decoration: none;
}
.img-links__link:first-child {
  margin-left: 0;
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
  font-size: 11px;
  font-weight: 100;
  text-align: center;
  padding: 3px;
  background-color: #1c62cd;
  color: white;
  border-radius: 50%;
}
</style>
