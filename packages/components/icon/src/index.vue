<template>
  <i :class="[ns.b()]" :style="[styleSize, styleColor]">
    <slot />
  </i>
</template>
<script>export default { name: "a-icon" };</script>
<script setup>
import { computed } from "vue"
import { useNamespace, useStyle } from '@ui-library/hook';
const ns = useNamespace("icon");
const uStyle = useStyle();
/** props */
const props = defineProps({
  size: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  }
});
const styleSize = computed(() => uStyle.fontSize(props.size))
const styleColor = computed(() => uStyle.color(props.color))
</script> 




 <!-- <template>
  <div 
    :class="[ns.b()]" 
    :style="{
      fontSize: size + 'px',
      color: color
    }"
  >
    <slot />
  </div>
</template>

<script>
export default { name: "a-icon" };
</script>

<script setup>
import { useNamespace } from '@ui-library/hook';
const ns = useNamespace("icon");

defineProps({
  size: {
    type: [String, Number],
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
});
</script>

<style lang="scss" scoped>
.a-icon {
  height: 1em;
  width: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  font-size: inherit;
  
  svg { 
    width: 1em; 
    height: 1em; 
  }
  
  i {
    font-size: inherit;
    color: inherit;
  }
}
</style>  -->