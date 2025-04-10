<template>
  <div>
    <a-button size="large" disabled>默认</a-button>
    <a-button type="success" size="medium" loading>成功</a-button>
    <a-button type="primary" size="large" disabled>主要</a-button>
    <a-button type="warning" size="mini" >警告</a-button>
    <a-button type="danger" size="small" >错误</a-button>
  </div>
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
.test {
  height: 50px;
}
.color-primary {
  color: var(--a-primary-color);
}
</style>
