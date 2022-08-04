<template>
  <dialogUi @onClose="setShowFavorite(false)">
    <ul class="list">
      <h2 class="list__name">Избранное</h2>
      <li
        v-for="(product, key) in favorite"
        :key="product.id"
        class="list__product"
      >
        <span class="list__product-name"
          >{{ product.name }} {{ product.brand }} {{ product.model }}</span
        >
        <button @click="onAddToBasket(product)" class="list__basket">
          <basketIcon :height="17" />
        </button>
        <button @click="this.deleteProduct({ key })" class="list__delete">
          Удалить
        </button>
      </li>
      <span v-if="favoriteLength === 0" class="list__empty">пусто</span>
    </ul>
  </dialogUi>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import basketIcon from "@/assets/svg/basketIcon.vue";

export default {
  components: {
    basketIcon,
  },
  computed: {
    ...mapState({
      favorite: (state) => state.favorite.favorite,
    }),
    ...mapGetters({
      favoriteLength: "favorite/favoriteLength",
      findInBasket: "basket/findById",
    }),
  },
  methods: {
    ...mapMutations({
      setShowFavorite: "setShowFavorite",
    }),
    ...mapActions({
      deleteProduct: "favorite/deleteProduct",
      addToBasket: "basket/addProduct",
      getBasket: "basket/getBasket",
    }),
    async onAddToBasket(product) {
      if (this.findInBasket(product.id)) return;

      await this.addToBasket({ product });
      this.getBasket();
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

.list__delete {
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

.list__delete:active {
  opacity: 0.6;
}

.list__product:last-child {
  border-bottom: none;
}

.list__basket {
  margin-left: auto;
  border: none;
  outline: none;
}
.list__basket:active {
  opacity: 0.6;
}

.list__empty {
  align-self: center;
}
</style>
