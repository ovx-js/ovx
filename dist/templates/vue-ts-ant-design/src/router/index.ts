import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
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
