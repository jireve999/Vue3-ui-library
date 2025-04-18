<script setup>
</script>

<template>
  <a-button type="error" size="large">
    <a-icon><Delete /></a-icon>
    删除
    <a-icon><Delete /></a-icon>
  </a-button>
  <a-button type="error" size="large">
    <a-icon><Delete /></a-icon>
    删除
    <a-icon><Delete /></a-icon>
  </a-button>
</template>

<script setup>
import { Delete } from "@ui-library/icons"
const handlerChange = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}
const handlerClick = (e) => {
  console.log(e)
}
</script>

<style>
@import "./assets/iconfont/iconfont.css";
.test {
  height: 50px;
}
.color-primary {
  color: var(--a-primary-color);
}
</style>
