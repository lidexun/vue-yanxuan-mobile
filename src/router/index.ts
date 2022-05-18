import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("../views/main/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "/sort",
        component: () => import("../views/sort/index.vue"),
      },
      {
        path: "/cart",
        component: () => import("../views/cart/index.vue"),
      },
      {
        path: "/user",
        component: () => import("../views/user/index.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 导出路由
export default router;
