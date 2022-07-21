<template>
  <dialogUi v-if="auth" @onClose="setShowAuth(false)">
    <div class="logout">
      <button @click="onLogout()" class="logout__btn">Выйти</button>
    </div>
  </dialogUi>
  <Login
    v-if="!showRegist && !auth"
    @showRegist="showRegist = true"
  />
  <Registration
    v-if="showRegist && !auth"
    @onClose="showRegist = false"
  />
</template>

<script>
import Registration from "@/components/AuthRegistration.vue";
import Login from "@/components/AuthLogin.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  components: {
    Registration,
    Login,
  },
  data: () => ({
    showRegist: false,
  }),
  computed: {
    ...mapState({
      auth: (state) => state.auth.auth,
    }),
  },
  methods: {
    ...mapActions({
      logout: "auth/logout",
    }),
    ...mapMutations({
      setShowAuth: "auth/setShowAuth",
      setBasket: "basket/setBasket"
    }),
    onLogout(){
      this.logout()
      this.setBasket({})
      this.setShowAuth(false)
    }
  },
};
</script>

<style scoped>
.logout {
  border-radius: 5px;
  padding: 40px;
  margin: auto;
  background: #f0f0f4;
}

.logout__btn {
  cursor: pointer;
  padding: 10px 16px 10px 16px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 13px;
  background: #1c62cd;
  color: white;
  border: none;
}

.logout__btn:active{
  opacity: 0.6;
}
</style>
