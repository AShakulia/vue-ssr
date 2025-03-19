import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

export function createRouterInstance() {
  const isServer = typeof window === 'undefined';
  const history = isServer ? createMemoryHistory(): createWebHistory();

  return createRouter({
    history,
    routes,
  });
}