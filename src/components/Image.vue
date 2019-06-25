<template>
  <div class="image">
    <div class="image-title" v-if="title !== undefined">{{ title }}</div>
    <div class="image-container" :style="imageStyle()">
      <!-- <div class="imaage-container-img" :style="imageStyle()"></div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'images',
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String
    }
  },
  methods: {
    imageStyle () {
      return { backgroundImage: 'url(' + require(`../assets/img/travel/${this.image}.png`) + ')' }
    }
  }

}
</script>

<style lang="less">
.image {
  &-title {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    text-align: left;
  }
  &-container {
    height: 26rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>
