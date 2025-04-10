<template>
  <div :class="[ns.b()]"><slot /></div>
</template>
<script>
export default { name: "a-button-group" };
</script>
<script setup>
import { useNamespace } from '@ui-library/hook';
const ns = useNamespace("button-group");
/** props */
const props = defineProps({
  size: {
    type: String,
    default: "",
  }
});

</script>
