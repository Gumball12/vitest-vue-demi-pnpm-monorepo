import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import test from '../index.vue';

describe('test vue 2', () => {
  it('check text', () => {
    const wrapper = mount(test);
    expect(wrapper.text()).toBe('from vue component');
  });
});
