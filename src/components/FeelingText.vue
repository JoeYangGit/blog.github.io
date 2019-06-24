<template>
  <div class="feeling-text">
    <div class="feeling-text-container" v-if="contents.image !== undefined">
      <p class="feeling-text-container-text">{{ contents.content }}</p>
      <div class="feeling-text-container-img" :style="imageStyle()"></div>
    </div>
    <div v-else class="feeling-text-container">
      <p
        class="feeling-text-container-text"
        v-if="contents.content !== 'break'"
      >{{ contents.content }}</p>
      <p class="feeling-text-container-text" v-else>&nbsp;</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'feelingtext',
  props: {
    contents: {
      type: Object
    }
  },
  methods: {
    imageStyle () {
      return { backgroundImage: 'url(' + require(`../assets/img/feeling/${this.contents.image}.png`) + ')' }
    }
  },
  mounted () {
  }

}
</script>

<style lang="less">
.feeling-text {
  &-container {
    &-text {
      text-align: center;
      flex: 1;
      line-height: 3rem;
      // text-indent: 2rem;
      letter-spacing: 0.5rem;
    }
    &-img {
      height: 26rem;
      width: 100%;
      text-align: center;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
}
</style>
