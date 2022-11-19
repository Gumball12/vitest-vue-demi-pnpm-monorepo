import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import App from './index.vue';

import { myPlugin } from 'my-component';

Vue.use(VueCompositionAPI);
Vue.use(myPlugin);
new Vue(App).$mount('#app');
