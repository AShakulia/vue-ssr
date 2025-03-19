import './assets/styles/main.scss'
import { createSSRApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { createRouterInstance } from './router/router';

export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();
  const router = createRouterInstance();

  app.use(pinia);
  app.use(router);

  return { app, router, pinia };
}