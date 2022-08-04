import axios from "axios";

export default {
  state: {
    auth: false,
  },
  mutations: {
    setAuth(state, auth) {
      state.auth = auth;
    },
  },
  actions: {
    registration: async (context, { email, password }) => {
      try {
        const res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCLjqfo6RuKOWwo76lamh0jfOy5Kz6NbhU",
          {
            email,
            password,
            returnSecureToken: true,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        localStorage.localId = res.data.localId;
        localStorage.idToken = res.data.idToken;
        context.commit("setAuth", true);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    signIn: async (context, { email, password }) => {
      try {
        const res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCLjqfo6RuKOWwo76lamh0jfOy5Kz6NbhU",
          {
            email,
            password,
            returnSecureToken: true,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        localStorage.localId = res.data.localId;
        localStorage.idToken = res.data.idToken;
        context.commit("setAuth", true);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    authCheck: async (context) => {
      const { idToken, localId } = localStorage;
      if (!idToken || !localId) {
        console.log("Unauthorized");
        context.commit("setAuth", false);
        return;
      }

      try {
        await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCLjqfo6RuKOWwo76lamh0jfOy5Kz6NbhU",
          {
            idToken,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        context.commit("setAuth", true);
      } catch (error) {
        console.log(error?.response?.data?.error?.message ?? error);
        context.dispatch("logout");
      }
    },
    logout: (context) => {
      localStorage.removeItem("idToken");
      localStorage.removeItem("localId");
      context.commit("setAuth", false);
    },
  },
  namespaced: true,
};
