<template>
  <button 
    :disabled="disabled || loading || _loading" 
    :class="[
      ns.b(), 
      ns.m(type), 
      ns.m('size', isGroupSize), 
      ns.is('round', round), 
      ns.is('disabled', disabled), 
      ns.is('loading', loading || _loading), 
      ns.is('text', text), 
      ns.is('link', link), 
      ns.is('border', border), 
      ns.is('block', block), 
      ns.is('dashed', dashed),
      ns.is('circle', circle),
      ns.is('button-group', isGroup)
    ]" 
    @click="handlerChange"
  >
    <template v-if="loading || _loading">
      <i class="a-icon iconfont icon-loading" :class="[`${ns.is('loading-transition', loading || _loading)}`]"></i>
    </template>
    <i v-else-if="icon" class="a-icon iconfont" :class="icon"></i>
    <span v-if="$slots.default && !circle"><slot /></span>
  </button>
</template>
<script>
export default { name: "a-button" };
</script>
<script setup>
import { ref, computed, getCurrentInstance } from "vue"
import { useNamespace, useParent } from '@ui-library/hook';
const ns = useNamespace("button");
const parent = useParent("button-group");
/** props */
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  round: Boolean, // 圆形按钮
  disabled: Boolean, // 禁用按钮
  text: Boolean, // 文字按钮
  link: Boolean, // 链接按钮
  border: Boolean, // 边框按钮
  dashed: Boolean, // 虚线边框按钮
  block: Boolean, // 块级按钮
  circle: Boolean, // 圆形按钮
  loading: Boolean, // 加载按钮
  beforeChange: Function
});
/** computed */
const isGroup = parent.group()
const isGroupSize = props.size || parent.props('size')
/** loading */
const _loading = ref(false)
/**
 * 点击事件
 */
const handlerChange = (ev) => {
  const isFunction = Object.prototype.toString.call(props.beforeChange) === '[object Function]'
  if(!isFunction) { 
    emit('click', ev)
  	return false
  }
  // 启用加载
  _loading.value = true
  props.beforeChange().finally(() => _loading.value = false)
}
</script>
