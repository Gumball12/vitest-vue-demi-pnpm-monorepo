import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import App from './index.vue';

Vue.use(VueCompositionAPI);
new Vue(App).$mount('#app');
