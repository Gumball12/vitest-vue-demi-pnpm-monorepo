import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { beforeAll } from 'vitest';

beforeAll(() => {
  Vue.use(VueCompositionAPI);
});
