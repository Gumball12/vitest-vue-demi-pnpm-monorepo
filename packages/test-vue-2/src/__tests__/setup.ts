import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { beforeAll } from 'vitest';
import { myPlugin } from 'my-component';

beforeAll(() => {
  Vue.use(VueCompositionAPI);
  // This type error occurs when the 'vue-demi' package refs to Vue 3.
  // However, it doesn't matter because when you use the 'test-v2' command,
  // 'vue-demi-switch' changes the pointing Vue version to 2.
  Vue.use(myPlugin);
});
