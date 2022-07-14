<template>
  <section class="search">
    <ul class="select-field" name="" id="">
      <li
        v-for="option in options"
        :key="option.id"
        @click="selectedOption = option"
        :class="{
          'select-field__option_selected': selectedOption.id === option.id,
        }"
        class="select-field__option"
      >
        {{ option.name }}
      </li>
    </ul>
    <input
      v-model="searchText"
      :placeholder="selectedOption.placeholder"
      type="text"
      class="search-input"
    />
    <button
      @click="
        this.$router.push({
          name: 'Search-products',
          params: { option: selectedOption?.id , text: searchText},
        })
      "
      class="btn"
    >
      искать
    </button>
  </section>
</template>

<script>
export default {
  data: () => ({
    options: [
      { id: "id", name: "Поиск по номеру", placeholder: "Введите номер" },
      { id: "brand", name: "Поиск по марке", placeholder: "Введите марку" },
      {
        id: "name",
        name: "Поиск по названию товара",
        placeholder: "Введите название товара",
      },
    ],
    selectedOption: {
      id: "brand",
      name: "Поиск по марке",
      placeholder: "Введите марку",
    },
    searchText: "",
  }),
};
</script>

<style scoped>
.search {
  margin-bottom: 80px;
}

.select-field {
  list-style: none;
  margin-bottom: 25px;
}
.select-field__option {
  display: inline-block;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  padding: 11px 26px 11px 26px;
}

.select-field__option_selected {
  background: #f0f0f4;
  border-radius: 5px;
  font-weight: 700;
}

.search-input {
  box-sizing: border-box;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 16px;
  width: 90%;
  background: #f0f0f4;
  border-radius: 3px;
  padding: 15px 20px 15px 20px;
  border: none;
  outline: none;
}

.btn {
  cursor: pointer;
  width: 10%;
  height: 50px;
  display: inline-block;
  background: #1c62cd;
  border-radius: 3px;
  font-family: "SF Pro Display";
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
}
</style>
