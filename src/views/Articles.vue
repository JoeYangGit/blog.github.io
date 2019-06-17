<template>
  <div>
    <div class="articles">
      <div class="articles-left">
        <div class="articles-left-img"></div>
        <div class="articles-left-title">全部文章</div>
      </div>
      <div class="articles-list">
        <div class="articles-list-left">
          <div class="articles-list-left-circle"></div>
        </div>
        <div class="articles-list-content">
          <div class="articles-list-content-box">
            <div
              class="articles-list-content-item"
              v-for="(item, index) in listData1"
              :key="item.id"
              @click="showDetailBox(item)"
            >
              <div class="articles-list-content-item-summary">
                <div
                  class="articles-list-content-item-summary-title"
                >{{index + 1 + '. ' + item.text}}</div>
                <div class="articles-list-content-item-summary-time">{{item.time}}</div>
              </div>
            </div>
            <template v-if="listData1.length < 3">
              <div class="articles-list-content-item-empty" v-for="item in emptyData" :key="item"></div>
            </template>
          </div>
          <div class="articles-list-content-box">
            <div
              class="articles-list-content-item"
              v-for="(item, index) in listData2"
              :key="item.id"
            >
              <div class="articles-list-content-item-summary">
                <div
                  class="articles-list-content-item-summary-title"
                >{{index + 4 + '. ' + item.text}}</div>
                <div class="articles-list-content-item-summary-time">{{item.time}}</div>
              </div>
            </div>
            <template v-if="listData2.length < 3">
              <div class="articles-list-content-item-empty" v-for="item in emptyData" :key="item"></div>
            </template>
          </div>
        </div>
        <div class="articles-list-right">
          <div class="articles-list-right-circle"></div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <Detail v-if="showDetail" :id="info.id" :info="info" @close="showDetail=false"></Detail>
    </transition>
  </div>
</template>
<script>
import latest from '../assets/js/latest'
import Detail from '@/components/Detail'

export default {
  name: 'articles',
  components: {
    Detail
  },
  data () {
    return {
      showDetail: false,
      listData: [],
      listData1: [],
      listData2: [],
      emptyData: [],
      currentIndex: 6,
      info: {}
    }
  },
  methods: {
    showDetailBox (item) {
      this.info = item
      this.showDetail = true
    }
  },
  mounted () {
    this.listData = latest
    this.listData1 = this.listData.slice(0, 3)
    this.listData2 = this.listData.slice(3, 6)
    if (this.listData1.length < 3) {
      for (let i = 0; i < 3 - this.listData1.length; i++) {
        this.emptyData.push(i)
      }
    } else if (this.listData2.length < 3) {
      for (let i = 0; i < 3 - this.listData2.length; i++) {
        this.emptyData.push(i)
      }
    }
  }
}
</script>

<style lang="less">
.articles {
  padding: 10rem 2rem 0 2rem;
  display: flex;
  justify-content: space-between;
  &-left {
    background: #cca473;
    height: 40rem;
    width: 26rem;
    margin: 0 1rem;
    &-title {
      color: #ffffff;
      font-size: 4rem;
      font-weight: 600;
    }
    &-img {
      height: 75%;
      background: url("../assets/white.svg") no-repeat center;
      background-size: contain;
      opacity: 0.4;
    }
  }
  &-list {
    flex: 1;
    display: flex;
    &-content {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: space-between;
      &-box {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
      &-item {
        width: 90%;
        height: 8rem;
        display: flex;
        padding: 2rem;
        &-summary {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          &-title {
            font-size: 2.3rem;
            font-weight: 500;
            text-align: left;
          }
          &-title::before {
            content: "";
            width: 1rem;
            height: 100%;
            background: #cca473;
          }
          &-time {
            font-size: 1.5rem;
            color: #c0c0c0;
          }
        }
        &-empty {
          width: 90%;
          height: 8rem;
          padding: 2rem;
        }
      }

      &-item:hover {
        background: #ebebeb;
        color: #22303f;
        cursor: pointer;
      }
    }
    &-left,
    &-right {
      height: 40rem;
      width: 5rem;
      margin: 0 1rem;
      border: 1px solid transparent;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-left-circle:hover,
    &-right-circle:hover {
      cursor: pointer;
    }
    &-left-circle {
      width: 4rem;
      height: 4rem;
      border-radius: 10rem;
      background: #cca473 url("../assets/left.svg") no-repeat center center;
      background-size: 18%;
    }
    &-right-circle {
      width: 4rem;
      height: 4rem;
      border-radius: 10rem;
      background: #cca473 url("../assets/right.svg") no-repeat center center;
      background-size: 18%;
    }
  }
}
</style>
