import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '../views/index';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Index,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
