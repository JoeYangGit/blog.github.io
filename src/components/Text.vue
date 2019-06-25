<template>
  <div class="text">
    <div class="text-title" v-if="title !== undefined">{{ title }}</div>
    <div class="text-container">
      <div class="text-container-text">{{ text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'textes',
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    }
  }

}
</script>

<style lang="less">
.text {
  &-title {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    text-align: left;
  }
  &-container {
    display: flex;
    justify-content: space-between;
    min-height: 12rem;
    align-items: center;
    &-text {
      text-indent: 2rem;
      text-align: center;
      padding: 2rem 5rem;
      flex: 1;
      line-height: 3rem;
      letter-spacing: 0.5rem;
    }
  }
}
</style>
