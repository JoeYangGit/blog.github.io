<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        <img class="logo-img" src="./assets/logo-white.svg" @click="$router.push({path: '/home'})">
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
    <div id="footer">
      <div class="footer-logo"></div>
      <div class="footer-text">Designed & Developed By Joe Yang</div>
      <div class="footer-info">微信: ibambooes</div>
    </div>
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
          path: '/tech',
          name: '技术'
        },
        {
          path: '/travel',
          name: '游记'
        },
        {
          path: '/feeling',
          name: '随笔'
        }
        // {
        //   path: '/about',
        //   name: '关于'
        // }
      ]
    }
  },
  methods: {
    toPath (path) {
      this.$router.push({ path: path })
    },
    setRootFontSize () {
      const html = document.getElementsByTagName('html')[0]
      const rootWidth = html.clientWidth
      html.style.fontSize = 12 * (rootWidth / 1280) + 'px'
    }
  },
  mounted () {
    this.setRootFontSize()
    window.onresize = () => {
      this.setRootFontSize()
    }
  }
}
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
  position: relative;
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
  height: 4rem;
  width: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.9);
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
  .logo {
    margin: 0 2rem;
    padding-left: 2rem;
    display: flex;
    align-items: center;
    &-img {
      height: 2.6rem;
    }
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
      font-size: 1.4rem;
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
#footer {
  height: 12rem;
  width: 100%;
  margin-top: 4rem;
  border-top: 1px solid #dcdfe6;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .footer-logo {
    background: url("./assets/logo-black.svg") no-repeat center center;
    background-size: contain;
    height: 50%;
    width: 100%;
  }
  .footer-text {
    font-size: 1.5rem;
    font-weight: 500;
    color: #585858;
  }
  .footer-info {
    color: #bdbdbd;
  }
}
</style>
