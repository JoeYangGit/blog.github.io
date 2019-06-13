<template>
  <div class="home">
    <div class="home-banner">
      <div class="home-banner-title">
        <div style="margin-right: 10%;">你还未来</div>
        <div style="margin-left: 10%;margin-top: 1%">怎敢老去</div>
      </div>
      <div class="home-banner-tip">-- Designed By Joe Yang</div>
      <img src="../assets/banner-left.png" class="home-banner-img-left" alt>
      <img src="../assets/banner-right.png" class="home-banner-img-right" alt>
      <div class="home-banner-mask"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
<style lang="less">
.home {
  padding-top: 50px;
  &-banner {
    height: 400px;
    width: 100%;
    background: #000000;
    border-bottom: 4px solid #cca473;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    &-mask {
      position: absolute;
      left: 0;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.2),
        12%,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0.8),
        88%,
        rgba(0, 0, 0, 0.2)
      );
      height: 400px;
      width: 100%;
    }
    &-img-left {
      position: absolute;
      left: 0;
      opacity: 0.6;
      height: 400px;
    }
    &-img-right {
      position: absolute;
      right: 0;
      opacity: 0.6;
      height: 400px;
    }
    &-title {
      font-size: 50px;
      font-weight: 600;
      margin-top: 5%;
      z-index: 1;
      width: 100%;
    }
    &-tip {
      margin-left: 60%;
      z-index: 1;
    }
  }
}
</style>
