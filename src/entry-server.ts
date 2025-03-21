import { renderToString } from 'vue/server-renderer';
import { createApp } from './main';

export async function render(url: string) {
  const { app, router, pinia } = createApp();

  await router.push(url);
  await router.isReady();

  const ctx = {};
  const html = await renderToString(app, ctx);

  const initialState = pinia.state.value;

  return { html, initialState };
}