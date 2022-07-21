<template>
  <dialogUi @onClose="setShowAuth(false)">
    <form id="auth" @submit.prevent="submit()" class="form">
      <h2 class="form__name">Вход</h2>
      <span v-if="error" class="form__error">{{ error }}</span>
      <input
        v-model="email"
        placeholder="Введите почту"
        type="text"
        class="form__email input"
        form="auth"
        required
      />
      <input
        v-model="password"
        placeholder="Введите пароль"
        type="password"
        class="form__password input"
        form="auth"
        required
      />
      <input type="submit" class="form__btn" value="Войти" form="auth" />
      <a @click="$emit('showRegist')" class="form__link">Зарегистрироваться</a>
    </form>
  </dialogUi>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  emits: ["showRegist"],
  data: () => ({
    email: "",
    password: "",
    error: "",
  }),
  methods: {
    ...mapActions({
      signIn: "auth/signIn",
      getBasket: "basket/getBasket",
    }),
    ...mapMutations({
      setShowAuth: "auth/setShowAuth",
    }),
    async submit() {
      try {
        await this.signIn({
          email: this.email.trim(),
          password: this.password.trim(),
        });
        this.getBasket();
        this.setShowAuth(false)
      } catch (error) {
        if (
          error?.response?.data?.error?.message === "INVALID_EMAIL" ||
          error?.response?.data?.error?.message === "EMAIL_NOT_FOUND"
        )
          this.error = "Такой почты не существует";
        else if (error?.response?.data?.error?.message === "INVALID_PASSWORD")
          this.error = "Неверный пароль";
        else {
          this.error = "Ошибка";
        }
      }
    },
  },
};
</script>

<style src="@/assets/styles/form.css" scoped></style>
