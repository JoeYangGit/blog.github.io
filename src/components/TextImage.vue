<template>
  <div class="text-left">
    <div v-if="type === 'left'">
      <div class="text-left-title left" v-if="title !== undefined">{{ title }}</div>
      <div class="text-left-container">
        <div class="text-left-container-text">{{ text }}</div>
        <div class="text-left-container-img" :style="imageStyle()"></div>
      </div>
    </div>
    <div v-else>
      <div class="text-left-title right" v-if="title !== undefined">{{ title }}</div>
      <div class="text-left-container">
        <div class="text-left-container-img" :style="imageStyle()"></div>
        <div class="text-left-container-text">{{ text }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'text-image',
  props: {
    type: {
      type: String,
      default: 'left'
    },
    title: {
      type: String
    },
    text: {
      type: String
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
.left {
  text-align: left;
}
.right {
  text-align: right;
}
.text-left {
  &-title {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  &-container {
    display: flex;
    justify-content: space-between;
    height: 24rem;
    align-items: center;
    &-text {
      text-align: left;
      padding: 2rem 5rem;
      flex: 1;
      line-height: 3rem;
      letter-spacing: 0.5rem;
    }
    &-img {
      flex: 1;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
}
</style>
