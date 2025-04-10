<template>
  <a-button-group size="large">
    <a-button :before-change="handlerChange">默认</a-button>
    <a-button icon="icon-baocun" size="mini" :before-change="handlerChange">默认</a-button>
    <a-button type="primary" icon="icon-bofangfmbofangliebiao" :before-change="handlerChange">主要</a-button>
  </a-button-group>

  <a-button-group>
    <a-button :before-change="handlerChange">默认</a-button>
    <a-button icon="icon-baocun" :before-change="handlerChange">默认</a-button>
    <a-button type="primary" icon="icon-bofangfmbofangliebiao" :before-change="handlerChange">主要</a-button>
  </a-button-group>
</template>

<script setup>
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
</style>
