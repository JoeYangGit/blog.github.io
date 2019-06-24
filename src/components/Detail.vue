<template>
  <div class="detail">
    <div class="detail-container">
      <div class="detail-container-header">
        <div
          v-if="info.detailImg !== undefined"
          class="detail-container-header-img"
          :style="imgStyle(info.detailImg)"
        ></div>
        <div class="detail-container-header-title">{{info.text}}</div>
        <div class="detail-container-header-rect"></div>
      </div>
      <!-- 技术 -->
      <div v-if="info.type === 'tech'">
        <div class="detail-container-info">
          <div class="detail-container-info-time">时间：{{ info.time }}</div>
          <div
            class="detail-container-info-tags"
            v-for="tag in info.tag"
            :key="tag"
            :style="tagStyle(tag)"
          >{{tag}}</div>
        </div>
        <div class="detail-container-content-box" v-for="item in contents" :key="item.content[0]">
          <TechText :title="item.title" :contents="item"></TechText>
        </div>
      </div>
      <!-- 游记 -->
      <div v-else-if="info.type === 'travel'">
        <div v-for="item in contents" :key="item.title" class="detail-container-content-box">
          <TextImage
            v-if="item.type === 'text-left'"
            type="left"
            :title="item.title"
            :text="item.content"
            :image="item.image"
          ></TextImage>
          <TextImage
            v-if="item.type === 'text-right'"
            type="right"
            :title="item.title"
            :text="item.content"
            :image="item.image"
          ></TextImage>
          <Textes v-if="item.type === 'text'" :title="item.title" :text="item.content"></Textes>
          <Images v-if="item.type === 'image'" :title="item.title" :image="item.image"></Images>
        </div>
      </div>
      <!-- 随笔 -->
      <div v-else-if="info.type === 'feeling'" class="detail-container-feeling-box">
        <FeelingText v-for="(item, index) in contents" :key="index" :contents="item"></FeelingText>
      </div>
      <div class="detail-container-footer">
        <img :src="require('../assets/logo-black.svg')">
      </div>
      <div class="detail-container-rect"></div>
    </div>
    <div class="detail-mask" @click="close"></div>
  </div>
</template>

<script>
import travelDetails from '../assets/js/travelDetails'
import techDetails from '../assets/js/techDetails'
import feelingDetails from '../assets/js/feelingDetails'
import TextImage from '@/components/TextImage.vue'
import Textes from '@/components/Text.vue'
import Images from '@/components/Image.vue'
import TechText from '@/components/TechText.vue'
import FeelingText from '@/components/FeelingText.vue'

export default {
  name: 'Detail',
  props: {
    info: {},
    id: {
      type: String,
      required: true
    }
  },
  components: {
    TextImage,
    Textes,
    Images,
    TechText,
    FeelingText
  },
  data () {
    return {
      details: {},
      contents: []
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    imgStyle (path) {
      return { backgroundImage: 'url(' + require(`../assets/img/${this.info.type}/${path}.png`) + ')' }
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
    }
  },
  mounted () {
    if (this.info.type === 'travel') {
      this.details = travelDetails[this.id]
    } else if (this.info.type === 'tech') {
      this.details = techDetails[this.id]
    } else if (this.info.type === 'feeling') {
      this.details = feelingDetails[this.id]
    }
    this.contents = Object.values(this.details.contents)
    const body = document.getElementsByTagName('body')[0]
    body.style.overflow = 'hidden'
    window.scrollTo(0, 0)
  },
  destroyed () {
    const body = document.getElementsByTagName('body')[0]
    body.style.overflow = ''
  }
}
</script>

<style lang="less">
.detail {
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  z-index: 1001;
  overflow: auto;
  display: flex;
  justify-content: center;
  overflow: hidden;
  &-mask {
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100vh;
    position: absolute;
  }
  &-container {
    z-index: 1001;
    overflow-y: auto;
    background: #ffffff;
    width: 70%;
    height: 100vh;
    // border-radius: 5px;
    &-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      &-img {
        height: 40rem;
        width: 100%;
        // border-top-right-radius: 5px;
        // border-top-left-radius: 5px;
        border-bottom: 4px solid #cca473;
        background-size: cover;
        background-position: 20% 10%;
      }
      &-title {
        margin: 3.5rem 0;
        font-size: 4rem;
        font-weight: 700;
      }
      &-rect {
        height: 1rem;
        width: 10%;
        background: #cca473;
        margin-bottom: 3.5rem;
      }
    }
    &-content-box {
      margin: 5rem;
    }
    &-footer {
      margin-bottom: 1rem;
    }
    &-rect {
      height: 1rem;
      width: 100%;
      background: #cca473;
    }
    &-info {
      display: flex;
      margin: 0 5rem 2rem 5rem;
      color: #a7a7a7;
      text-align: left;
      align-items: center;
      &-time {
        margin-right: 2rem;
      }
      &-tags {
        margin: 0.5rem;
        padding: 0.4rem 0.6rem;
        border-radius: 5px;
        color: #ffffff;
      }
    }
    &-feeling-box {
      margin-bottom: 5rem;
    }
  }
}
</style>
