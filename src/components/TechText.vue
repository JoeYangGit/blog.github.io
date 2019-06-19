<template>
  <div class="tech-text">
    <div class="tech-text-title" v-if="title !== ''">{{ title }}</div>
    <div class="tech-text-container" v-if="contents.image !== undefined">
      <p class="tech-text-container-text" v-for="item in contents.content" :key="item">{{ item }}</p>
      <div class="tech-text-container-img" :style="imageStyle()"></div>
    </div>
    <div v-else class="tech-text-container">
      <p class="tech-text-container-text" v-for="item in contents.content" :key="item">{{ item }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'techtext',
  props: {
    title: {
      type: String
    },
    contents: {
      type: Object
    }
  },
  methods: {
    imageStyle () {
      return { backgroundImage: 'url(' + require(`../assets/img/tech/${this.contents.image}.png`) + ')' }
    }
  },
  mounted () {
  }

}
</script>

<style lang="less">
.tech-text {
  &-title {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    text-align: left;
  }
  &-container {
    // min-height: 12rem;
    &-text {
      text-align: left;
      flex: 1;
      line-height: 3rem;
      text-indent: 2rem;
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
