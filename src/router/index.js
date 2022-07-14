import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Products from "@/pages/Products.vue";
import productDetail from "@/pages/ProductDetail.vue"
import NotFound from "@/pages/NotFound.vue"

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
    component: NotFound
  }
];

const scrollBehavior = () => {
  return { top: 0 };
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior,
});

export default router;
