<script setup>
</script>

<template>
  <div>
    <a-textarea ref='input' v-model="value"
    @input="henalerInput"
    count
    maxlength="255"
    :rows="7"
    @compositionstart="handlerCompositionStart"
    @compositionupdate="handlerCompositionUpdate"
    @compositionend="handlerCompositionEnd"></a-textarea>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
const value = ref('面向高级：要学会的UI组件库开发')
</script>

<style lang="scss" scoped>
.test {
  padding-top: 12px;
  font-size: 14px;
}

</style>
