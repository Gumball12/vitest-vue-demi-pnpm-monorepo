import { h, defineComponent, install } from 'vue-demi';

install();

export const MyComponent = defineComponent({
  render() {
    return h('p', 'from vue component');
  },
});
