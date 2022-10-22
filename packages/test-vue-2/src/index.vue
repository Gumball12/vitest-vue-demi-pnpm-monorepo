<template>
  <div><MyComponent /></div>
</template>

<script lang="ts">
import { MyComponent } from 'my-component';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  // NOTE
  // : This type error occurs because the 'vue-demi' package points to Vue 3.
  // However, it doesn't matter because when you use the 'test-v2' command,
  // 'vue-demi-switch' changes the pointing Vue version to 2.
  components: { MyComponent },
});
</script>
