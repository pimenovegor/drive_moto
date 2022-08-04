<template>
  <dialogUi @onClose="setShowAuth(false)" class="dialog">
    <form id="regist" @submit.prevent="submit()" class="form">
      <h2 class="form__name">Регистрация</h2>
      <span v-if="error" class="form__error">{{ error }}</span>
      <input
        v-model="email"
        placeholder="Введите почту"
        type="text"
        class="form__email input"
        form="regist"
        required
      />
      <input
        v-model="password"
        placeholder="Введите пароль"
        type="password"
        class="form__password input"
        form="regist"
        required
      />
      <input
        v-model="repeat"
        placeholder="Повторите пароль"
        type="password"
        class="form__repeat input"
        form="regist"
        required
      />
      <input
        type="submit"
        class="form__btn"
        value="Зарегистрироваться"
        form="regist"
      />
      <a @click="$emit('onClose')" class="form__link">Войти</a>
    </form>
  </dialogUi>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  emits: ["onClose"],
  data: () => ({
    email: "",
    password: "",
    repeat: "",
    error: "",
  }),
  methods: {
    ...mapActions({
      registration: "auth/registration",
    }),
     ...mapMutations({
      setShowAuth: "setShowAuth",
    }),
    async submit() {
      if (this.password.trim() !== this.repeat.trim())
        return (this.error = "Пароли не совпадают");

      try {
        await this.registration({
          email: this.email.trim(),
          password: this.password.trim(),
        });
        this.setShowAuth(false)
      } catch (error) {
        if (error?.response?.data?.error?.message === "INVALID_EMAIL")
          this.error = "Невалидная почта";
        else if (
          error?.response?.data?.error?.message ===
          "WEAK_PASSWORD : Password should be at least 6 characters"
        )
          this.error = "Пароль должен состоять из 6 символов";
        else if (error?.response?.data?.error?.message === "EMAIL_EXISTS")
          this.error = "Аккаунт с такой почтой уже существует";
        else {
          this.error = "Ошибка";
        }
      }
    },
  },
};
</script>

<style src="@/assets/styles/form.css" scoped></style>
<style scoped>
.form__repeat {
  margin-bottom: 20px;
}

.form__password {
  margin-bottom: 10px;
}
</style>
