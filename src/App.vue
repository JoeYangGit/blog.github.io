<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        <img src="./assets/logo-white.svg" height="36px" @click="$router.push({path: '/home'})">
      </div>
      <div class="nav-items">
        <div
          class="nav-item"
          :class="item.path === $route.path ? 'nav-active' : ''"
          v-for="item in menu"
          :key="item.path"
          @click="toPath(item.path)"
        >{{ item.name }}</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          path: '/home',
          name: '主页'
        },
        {
          path: '/articles',
          name: '文章'
        },
        {
          path: '/about',
          name: '关于'
        }
      ]
    }
  },
  methods: {
    toPath (path) {
      this.$router.push({ path: path })
    }
  }
}
</script>

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
@media screen and (min-width: 1441px) {
  #app {
    font-size: 12px;
  }
}
@media screen and (max-width: 1440px) {
  #app {
    font-size: 16px;
  }
}
#nav {
  height: 4rem;
  width: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.9);
  align-items: center;
  position: fixed;
  z-index: 1000;
  .logo {
    margin: 0 2rem;
    padding-left: 2rem;
    display: flex;
    align-items: center;
  }
  .logo:hover {
    cursor: pointer;
  }
  .logo::after {
    content: "";
    border-right: 2px solid #ffffff;
    height: 2rem;
    margin-left: 2rem;
  }
  .nav-items {
    display: flex;
    height: 100%;
    .nav-item {
      display: flex;
      align-items: center;
      color: #ffffff;
      font-weight: 500;
      font-size: 1.2rem;
      padding: 0 2rem;
      border-bottom: 2px solid transparent;
      transition: all 0.3s;
    }
    .nav-active,
    .nav-item:hover {
      cursor: pointer;
      color: #cca473;
      background: rgba(0, 0, 0, 0.5);
      border-bottom: 2px solid #cca473;
    }
  }
}
</style>
