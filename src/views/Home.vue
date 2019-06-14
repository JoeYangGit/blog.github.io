<template>
  <div class="home">
    <div class="home-banner">
      <div class="home-banner-title">
        <div style="margin-right: 10%;">你还未来</div>
        <div style="margin-left: 10%;margin-top: 1%">怎敢老去</div>
      </div>
      <div class="home-banner-tip">-- Designed By Joe Yang</div>
      <div class="home-banner-img-left"></div>
      <div class="home-banner-img-right"></div>
      <div class="home-banner-mask"></div>
    </div>
    <div class="home-box">
      <div class="home-box-title">最新文章</div>
      <div class="home-box-link-box">
        <div
          class="home-box-link-item"
          v-for="item in latestData"
          :key="item.id"
          @click="showDetailBox(item)"
          @mouseenter="showText = item.id"
          @mouseleave="showText = ''"
        >
          <transition name="slide-top">
            <div v-if="showText === item.id" class="home-box-link-item-mask">{{ item.text}}</div>
          </transition>
          <div class="home-box-link-item-img" :style="imgStyle(item.img)"></div>
        </div>
        <div class="home-box-link-last">
          MORE
          <img :src="require('../assets/more.svg')" class="home-box-link-item-more" alt>
        </div>
      </div>
    </div>
    <transition name="slide-top">
      <Detail v-if="showDetail" :id="info.id" :info="info" @close="showDetail=false"></Detail>
    </transition>
  </div>
</template>

<script>
import latest from '../assets/js/latest'
import Detail from '@/components/Detail'

export default {
  name: 'home',
  components: {
    Detail
  },
  data () {
    return {
      latestData: [],
      showText: '',
      showDetail: false,
      info: latest[0]
    }
  },
  methods: {
    imgStyle (path) {
      let style = {}
      style.backgroundImage = 'url(' + require(`../assets/img/${path}.png`) + ') '
      return style
    },
    showDetailBox (item) {
      this.info = item
      this.showDetail = true
    }
  },
  mounted () {
    this.latestData = latest.reverse()
  }
}
</script>
<style lang="less">
.home {
  position: relative;
  padding-top: 4rem;
  &-banner {
    padding: 4% 0;
    width: 100%;
    background: #000000;
    border-bottom: 4px solid #cca473;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    &-mask {
      position: absolute;
      left: 0;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.2),
        10%,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0.8),
        90%,
        rgba(0, 0, 0, 0.2)
      );
      height: 100%;
      width: 100%;
    }
    &-img-left {
      position: absolute;
      left: 0;
      opacity: 0.6;
      height: 100%;
      width: 100%;
      background: url("../assets/banner-left.png") no-repeat left center;
      background-size: contain;
    }
    &-img-right {
      position: absolute;
      right: 0;
      opacity: 0.6;
      height: 100%;
      width: 100%;
      background: url("../assets/banner-right.png") no-repeat right center;
      background-size: contain;
    }
    &-title {
      font-size: 4rem;
      font-weight: 600;
      margin: 5% 0;
      z-index: 1;
      width: 100%;
    }
    &-tip {
      margin-left: 60%;
      z-index: 1;
    }
  }
  &-box {
    text-align: left;
    padding: 2rem 12%;
    margin: 2rem 0;
    position: relative;
    &-title {
      font-size: 2rem;
      font-weight: 600;
    }
    &-title::before {
      content: "";
      border-left: 10px solid #cca473;
      margin-right: 2rem;
    }
    &-link-box {
      margin-top: 2rem;
      display: flex;
    }
    &-link-item {
      position: relative;
      height: 14rem;
      width: 19rem;
      margin-right: 1rem;
      cursor: pointer;
      transition: all 0.3s;
      &-more {
        position: absolute;
        height: 80%;
        opacity: 0.1;
      }
      &-img {
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
      }
      &-mask {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        color: #ffffff;
        z-index: 2;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
      }
    }
    &-link-last {
      height: 14rem;
      width: 19rem;
      cursor: pointer;
      transition: all 0.3s;
      position: relative;
      background: #977752;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      z-index: 1;
    }
    &-link-last:hover {
      color: #ffffff;
      background: #52402a;
    }
  }
}
.slide-top-enter-active,
.slide-top-leave-active {
  transition: all 0.5s;
}
.slide-top-enter,
.slide-top-leave-to {
  opacity: 0;
}
</style>
