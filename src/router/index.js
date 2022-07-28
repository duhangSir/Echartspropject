import Vue from "vue";
import VueRouter from "vue-router";
import sellerPage from "@/views/SellerPage";
Vue.use(VueRouter);

const routes = [
  {
    path: "/sellerpage",
    name: "sellerpage",
    component: sellerPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
