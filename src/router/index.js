import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Products from "@/pages/Products.vue";
import store from "@/store/index.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];

const scrollBehavior = () => {
  return { top: 0 };
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior,
});

router.beforeEach((to, from) => {
  if (to.name === "Home") {
    store.commit("products/setSelectedType", "");
    localStorage.removeItem("selectedType");
  }
});

export default router;
