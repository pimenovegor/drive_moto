import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Products from "@/pages/Products.vue";
import productDetail from "@/pages/ProductDetail.vue";
import NotFound from "@/pages/NotFound.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:category",
    name: "Products",
    component: Products,
  },
  {
    path: "/:option/:text",
    name: "Search-products",
    component: Products,
  },
  {
    path: "/product/:id",
    name: "Product-detail",
    component: productDetail,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
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

router.beforeEach((to, from, next) => {
  if (to.name !== "Product-detail") {
    store.commit("products/resetFilters");
    store.commit("products/setSearch", {});
    store.commit("products/setSelectedType", "");
  }
  if (to.name === "Products") {
    store.commit("products/setSelectedType", to.params.category);
  }
  if (to.name === "Search-products") {
    store.commit("products/setSearch", {
      option: to.params.option,
      text: to.params.text,
    });
  }
  next();
});

export default router;
