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
      <div class="home-box-title">最新动态</div>
      <div class="home-box-link-box">
        <div class="home-box-link-item"></div>
        <div class="home-box-link-item"></div>
        <div class="home-box-link-item"></div>
        <div class="home-box-link-item"></div>
      </div>
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
  position: relative;
  padding-top: 4rem;
  &-banner {
    padding: 4% 0;
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
      font-size: 3rem;
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
      font-size: 2rem;
      font-weight: 600;
    }
    &-title::before {
      content: "";
      border-left: 10px solid #cca473;
      margin-right: 2rem;
    }
    &-link-box {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
    }
    &-link-item {
      height: 12rem;
      width: 14rem;
      background: #cca473;
    }
  }
}
</style>
