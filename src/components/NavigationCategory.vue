<template>
  <ul class="category">
    <li
      v-for="category in categorys"
      :key="category.name"
      @click="
        this.$router.push({
          name: 'Products',
          params: { category: category.name },
        })
      "
      class="card"
    >
      <div class="card__info">
        <h2 class="name">{{ category.name }}</h2>
        <span class="more">Подробнее></span>
      </div>
      <img :src="category.picture" alt="picture" class="picture" />
    </li>
  </ul>
</template>

<script>

export default {
  data: () => ({
    categorys: [
      { name: "Квадроциклы", picture: require("@/assets/svg/ATV.svg") },
      { name: "Гидроциклы", picture: require("@/assets/svg/jet_ski.svg") },
      { name: "Катера", picture: require("@/assets/svg/boat.svg") },
      { name: "Снегоходы", picture: require("@/assets/svg/snowmobile.svg") },
      {
        name: "Вездеходы",
        picture: require("@/assets/svg/all-terrain_vehicle.svg"),
      },
      { name: "Двигатели", picture: require("@/assets/svg/engine.svg") },
    ],
  }),
};
</script>

<style scoped>
.category {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.card {
  display: flex;
  justify-content: space-between;
  height: 129px;
  cursor: pointer;
  box-sizing: border-box;
  width: 32%;
  margin: 0 2% 2% 0;
  flex-grow: 1;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
}

.card:nth-child(3n) {
  margin-right: 0;
}

.card:nth-last-child(-n + 3) {
  margin-bottom: 0;
}

.card:hover {
  border: none;
  box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25);
}

.card:hover .name {
  color: #1c62cd;
}

.card__info {
  display: inline-block;
  margin: 20px 0 14px 20px;
}

.name {
  font-family: "Barlow", sans-serif;
  font-weight: 700;
  font-size: 23px;
  margin-bottom: 45px;
}

.more {
  display: block;
  font-family: "SF Pro Display";
  color: #c4c4c4;
  font-weight: 400;
  font-size: 14px;
}

.picture {
  margin: 12px 20px 12px 0;
  width: 150px;
}
</style>
