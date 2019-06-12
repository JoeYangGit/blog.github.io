<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        <img src="./assets/logo.svg" height="36px">
      </div>
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
    margin: 0 20px;
    padding-left: 20px;
    display: flex;
    align-items: center;
  }
  .logo::after {
    content: "";
    border-right: 2px solid #ffffff;
    height: 20px;
    margin-left: 20px;
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
      border-bottom: 2px solid #000000;
    }
    .nav-item:hover {
      cursor: pointer;
      color: #cca473;
      background: rgba(0, 0, 0, 0.5);
      border-bottom: 2px solid #cca473;
    }
  }
}
</style>
