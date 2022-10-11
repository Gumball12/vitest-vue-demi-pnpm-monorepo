<template>
  <div><MyComponent /></div>
</template>

<script lang="ts">
import { MyComponent } from 'my-component';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  // `TS(2769): No overload matches this call.` error occurs, but it is not an actual error situation.
  // For more information, see README.
  components: { MyComponent },
});
</script>
