<template>
  <div id="app">
    <router-view />
    <footer id="footer">footer area</footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style  scoped lang="less">
/* 全局自定义的css样式 */
@import "./styles/index.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100vw;
  height: 100vh;
  #footer {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: blueviolet;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
}
</style>
