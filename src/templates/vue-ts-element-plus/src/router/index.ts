import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/index.vue'),
  },
  // ...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
