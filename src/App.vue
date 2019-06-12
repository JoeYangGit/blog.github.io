<template>
  <div id="app">
    <div id="nav">
      <div class="logo"></div>
      <div class="nav-items">
        <div class="nav-item">主页</div>
        <div class="nav-item">文章</div>
        <div class="nav-item">关于</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
#nav {
  height: 50px;
  width: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.9);
  position: absolute;
  align-items: center;
  .logo {
    margin: 10px 20px;
    padding: 10px;
    border-right: 1px solid #ffffff;
  }
  .nav-items {
    display: flex;
    height: 100%;
    .nav-item {
      display: flex;
      align-items: center;
      color: #ffffff;
      font-weight: 500;
      font-size: 16px;
      padding: 0 20px;
      border-bottom: 2px solid transparent;
    }
    .nav-item:hover {
      cursor: pointer;
      color: #4e98ff;
      background: rgba(0, 0, 0, 0.2);
      border-bottom: 2px solid #4e98ff;
    }
  }
}
</style>
