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
      <div class="home-box-title">技术 · Tech</div>
      <div class="home-box-link-box">
        <div
          class="home-box-link-item tech-box"
          v-for="item in latestTechData"
          :key="item.id"
          @click="showDetailBox(item)"
        >
          <div class="home-box-link-item-text">
            <div class="home-box-link-item-text-title">{{item.text}}</div>
            <div class="home-box-link-item-text-info">
              <span
                class="home-box-link-item-text-info-tag"
                v-for="tag in item.tag"
                :key="tag"
                :style="tagStyle(tag)"
              >{{tag}}</span>
            </div>
            <div class="home-box-link-item-text-info-time">时间：{{item.time}}</div>
          </div>
        </div>
        <div class="home-box-link-last" @click="$router.push({path: '/tech'})">
          MORE
          <img :src="require('../assets/more.svg')" class="home-box-link-item-more" alt>
        </div>
      </div>
    </div>
    <div class="home-box">
      <div class="home-box-title">游记 · Travel</div>
      <div class="home-box-link-box">
        <div
          class="home-box-link-item"
          v-for="item in latestTravelData"
          :key="item.id"
          @click="showDetailBox(item)"
          @mouseenter="showText = item.id"
          @mouseleave="showText = ''"
        >
          <transition name="fade">
            <div v-if="showText === item.id" class="home-box-link-item-mask">{{ item.text}}</div>
          </transition>
          <div class="home-box-link-item-img" :style="imgStyle(item.img, 'travel')"></div>
        </div>
        <div class="home-box-link-last" @click="$router.push({path: '/travel'})">
          MORE
          <img :src="require('../assets/more.svg')" class="home-box-link-item-more" alt>
        </div>
      </div>
    </div>
    <div class="home-box">
      <div class="home-box-title">随笔 · Feelings</div>
      <div class="home-box-link-box">
        <div
          class="home-box-link-item"
          v-for="item in latestFeelingData"
          :key="item.id"
          @click="showDetailBox(item)"
          @mouseenter="showText = item.id"
          @mouseleave="showText = ''"
        >
          <transition name="fade">
            <div v-if="showText === item.id" class="home-box-link-item-mask">{{ item.text}}</div>
          </transition>
          <div class="home-box-link-item-img" :style="imgStyle(item.img, 'feeling')"></div>
        </div>
        <div class="home-box-link-last" @click="$router.push({path: '/feeling'})">
          MORE
          <img :src="require('../assets/more.svg')" class="home-box-link-item-more" alt>
        </div>
      </div>
    </div>
    <transition name="fade">
      <Detail v-if="showDetail" :id="info.id" :info="info" @close="showDetail=false"></Detail>
    </transition>
  </div>
</template>

<script>
import latestTravel from '../assets/js/latestTravel'
import latestTech from '../assets/js/latestTech'
import latestFeeling from '../assets/js/latestFeeling'
import Detail from '@/components/Detail'

export default {
  name: 'home',
  components: {
    Detail
  },
  data () {
    return {
      latestTravelData: [],
      latestTechData: [],
      latestFeelingData: [],
      showText: '',
      showDetail: false,
      info: {}
    }
  },
  methods: {
    imgStyle (path, type) {
      let style = {}
      style.backgroundImage = 'url(' + require(`../assets/img/${type}/${path}.png`) + ') '
      return style
    },
    tagStyle (tag) {
      let color = '#cca473'
      switch (tag) {
        case 'Git':
          color = '#3E60C1'
          break
        case 'Vue':
          color = '#42b983'
          break
        case 'Less':
          color = '#47B0ED'
          break
        case 'Webpack':
          color = '#A163F7'
          break
        case 'JavaScript':
          color = '#F0882C'
          break
      }
      return { background: color }
    },
    showDetailBox (item) {
      this.info = item
      this.showDetail = true
    }
  },
  mounted () {
    this.latestTravelData = [...this.latestTravelData, ...latestTravel.slice(-3)].reverse()
    this.latestTechData = [...this.latestTechData, ...latestTech.slice(-3)].reverse()
    this.latestFeelingData = [...this.latestFeelingData, ...latestFeeling.slice(-3)].reverse()
  }
}
</script>
<style lang="less">
.home {
  position: relative;
  padding-top: 4rem;
  &-banner {
    padding: 7% 0;
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
      font-size: 2.2rem;
      font-weight: 600;
      position: relative;
    }
    &-title::before {
      content: "";
      border-left: 10px solid #cca473;
      margin-right: 2rem;
    }
    &-title::after {
      content: "Latest";
      position: absolute;
      color: #eaedf5;
      left: 2rem;
      z-index: -1;
      font-size: 4rem;
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
      &-text {
        height: 100%;
        padding: 0 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        &-title {
          font-size: 2rem;
          font-weight: 500;
        }
        &-info-tag {
          margin: 0.2rem;
          padding: 0.4rem 0.6rem;
          border-radius: 5px;
          color: #ffffff;
        }
      }
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
      background: #cca473;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      z-index: 1;
    }
    &-link-last:hover {
      color: #ffffff;
      background: #a0805a;
    }
  }
}
.tech-box {
  background: #eaedf5;
}
.tech-box:hover {
  background: #dee1eb;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
