<template>
  <div class="detail">
    <div class="detail-container">
      <div class="detail-container-header">
        <div class="detail-container-header-img" :style="imgStyle(info.detailImg)"></div>
        <div class="detail-container-header-title">{{info.text}}</div>
        <div class="detail-container-header-rect"></div>
      </div>
    </div>
    <div class="detail-mask" @click="close"></div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    info: {},
    id: {
      type: String,
      required: true
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
    const body = document.getElementsByTagName('body')[0]
    const detailDom = document.getElementsByClassName('detail')[0]
    const scrollHeight = body.scrollHeight
    detailDom.style.height = scrollHeight + 'px'
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
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 1001;
  overflow: auto;
  display: flex;
  justify-content: center;
  &-mask {
    overflow: auto;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
  }
  &-container {
    position: absolute;
    background: #f0f0f0;
    width: 70%;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    &-header {
      display: flex;
      flex-direction: column;
      // justify-content: center;
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
  }
}
</style>
