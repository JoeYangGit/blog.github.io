<template>
  <div class="detail">
    <div class="detail-container">
      <div class="detail-container-header">
        <div class="detail-container-header-img" :style="imgStyle(info.detailImg)"></div>
        <div class="detail-container-header-title">{{info.text}}</div>
        <div class="detail-container-header-rect"></div>
      </div>
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
      <div class="detail-container-footer">
        <img :src="require('../assets/logo-black.svg')" alt>
      </div>
      <div class="detail-container-rect"></div>
    </div>
    <div class="detail-mask" @click="close"></div>
  </div>
</template>

<script>
import detail from '../assets/js/details'
import TextImage from '@/components/TextImage.vue'
import Textes from '@/components/Text.vue'
import Images from '@/components/Image.vue'

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
    Images
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
      return { backgroundImage: 'url(' + require(`../assets/img/${path}.png`) + ')' }
    }
  },
  mounted () {
    this.details = detail[this.id]
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
    background: #f0f0f0;
    width: 70%;
    height: 100vh;
    border-radius: 5px;
    &-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      &-img {
        height: 30rem;
        width: 100%;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
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
      border-end-end-radius: 5px;
      border-end-start-radius: 5px;
    }
  }
}
</style>
