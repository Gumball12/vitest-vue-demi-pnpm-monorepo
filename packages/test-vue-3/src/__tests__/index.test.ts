import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import App from '../index.vue';
import { myPlugin } from 'my-component';

describe('test vue 3', () => {
  it('check text', () => {
    // This type error occurs when the 'vue-demi' package refs to Vue 2.
    // However, it doesn't matter because when you use the 'test-v3' command,
    // 'vue-demi-switch' changes the pointing Vue version to 3.
    const wrapper = mount(App, {
      global: {
        plugins: [myPlugin],
      },
    });
    expect(wrapper.text()).toBe('from vue component/from vue plugin component');
  });
});
