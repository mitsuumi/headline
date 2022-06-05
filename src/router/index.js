import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/MyHome.vue';
import User from '../views/MyUser.vue';

const routes = [
  // 首頁
  { path: '/', component: Home },
  // 我的
  { path: '/user', component: User },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
