import "normalize.css";
import "@/assets/fonts/fonts.css";
import dialog from "@/assets/ui/dialog.vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app =createApp(App)

app.component("dialogUi", dialog)

app.use(router).use(store).mount("#app");