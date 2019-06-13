<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        <img src="./assets/logo-white.svg" height="36px">
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
#nav {
  height: 50px;
  width: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.9);
  align-items: center;
  position: absolute;
  .logo {
    margin: 0 20px;
    padding-left: 20px;
    display: flex;
    align-items: center;
  }
  .logo:hover {
    cursor: pointer;
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
