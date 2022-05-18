<template>
  <div class="home">
    <van-sticky>
      <van-search disabled input-align="center" placeholder="搜索商品,共9999999款好物" />
      <!-- <van-row class="header" justify="space-between" align="center">
        <van-col class="logo_col">
          <img class="logo" src="../../assets/logo.png" />
        </van-col>
        <van-col class="search_col">
          <div class="search">
            <van-icon name="search" size="0.36rem" />
            <span>&nbsp;搜索商品, 共85453款好物</span>
          </div>
        </van-col>
        <van-col>
          <div class="login_btn">登陆</div>
        </van-col>
      </van-row>
      <van-tabs
        class="cate_tag van-hairline--bottom"
        title-active-color="#dd1a21"
        line-height="2px"
      >
        <van-tab
          v-for="(item, index) in cateTag"
          :title="item.title"
          :key="index"
        >
        </van-tab>
      </van-tabs> -->
    </van-sticky>
    <!-- swipe -->
    <van-swipe
      class="home_swipe"
      :autoplay="30000"
      lazy-render
      indicator-color="#fff"
    >
      <van-swipe-item v-for="image in images" :key="image">
        <van-image width="100%" height="100%" :src="image" fit="cover" />
      </van-swipe-item>
    </van-swipe>
    <!-- service -->
    <van-row class="home_service" justify="center" align="center">
      <van-col
        class="home_service_col"
        span="8"
        v-for="(item, index) in service"
        :key="index"
      >
        <van-icon :name="item.image" size="0.32rem" />
        <span class="text" v-text="item.text"></span>
      </van-col>
    </van-row>
    <!-- wrapper -->
    <van-row class="home_wrapper">
      <van-col
        class="home_wrapper_col"
        v-for="(item, index) in wrapper"
        :key="index"
        span="5"
      >
        <van-image width="100%" :src="item.image" />
        <div class="text" v-text="item.text"></div>
      </van-col>
    </van-row>
    <!-- freshman -->
    <div class="home_freshman">
      <div class="module_title">
        <span class="text">新人专享礼</span>
      </div>
      <van-row class="home_freshman_row">
        <van-col class="left" span="12">
          <div class="name">新人专享礼包</div>
          <div class="hongbao">
            <van-image
              width="2.58rem"
              src="src/assets/image/home/freshman/hongbao.png"
              fit="cover"
            />
            <div class="animate"></div>
          </div>
        </van-col>
        <van-col span="12" class="right">
          <div class="activity">
            <div class="activity_box">
              <div class="title">福利社</div>
              <div class="subtitle">今日特价</div>
              <van-image
                width="2rem"
                src="src/assets/image/home/freshman/0.webp"
                fit="cover"
                class="pic"
              />
              <div class="discount">
                <div>¥16.9</div>
                <div class="line">¥19.9</div>
              </div>
            </div>
            <div class="activity_box">
              <div class="title">新人拼团</div>
              <van-tag type="primary" color="#cbb693">1元起包邮</van-tag>
              <van-image
                width="2rem"
                src="src/assets/image/home/freshman/1.webp"
                fit="cover"
                class="pic"
              />
              <div class="discount">
                <div>¥49</div>
                <div class="line">¥159</div>
              </div>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="category_hot">
      <div class="module_title">
        <span class="text">类目热销榜</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
export default {
  setup() {
    const images = [
      "src/assets/image/home/banner/0.webp",
      "src/assets/image/home/banner/0.webp",
    ];
    const state = reactive({
      active: 0,
      images,
      cateTag: [
        { title: "推荐" },
        { title: "居家生活" },
        { title: "服饰鞋包" },
        { title: "美食酒水" },
        { title: "个护清洁" },
        { title: "母婴亲子" },
        { title: "运动旅行" },
        { title: "数码家电" },
        { title: "严选全球" },
      ],
      service: [
        {
          text: "网易自营品牌",
          image: "src/assets/image/home/service/0.png",
        },
        {
          text: "30天无忧退货",
          image: "src/assets/image/home/service/1.png",
        },
        {
          text: "48小时快速退款",
          image: "src/assets/image/home/service/2.png",
        },
      ],
      wrapper: [
        {
          text: "新品首发",
          image: "src/assets/image/home/wrapper/0.png",
        },
        {
          text: "居家生活",
          image: "src/assets/image/home/wrapper/1.png",
        },
        {
          text: "服饰鞋包",
          image: "src/assets/image/home/wrapper/2.png",
        },
        {
          text: "美食酒水",
          image: "src/assets/image/home/wrapper/3.png",
        },
        {
          text: "个护清洁",
          image: "src/assets/image/home/wrapper/4.png",
        },
        {
          text: "母婴亲子",
          image: "src/assets/image/home/wrapper/5.png",
        },
        {
          text: "运动旅行",
          image: "src/assets/image/home/wrapper/6.png",
        },
        {
          text: "数码家电",
          image: "src/assets/image/home/wrapper/7.png",
        },
        {
          text: "全球特色",
          image: "src/assets/image/home/wrapper/8.png",
        },
        {
          text: "好货抄底",
          image: "src/assets/image/home/wrapper/9.gif",
        },
      ],
    });
    return state;
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.home {
  padding-bottom: 3rem;
}
.module_title {
  width: 100%;
  height: 90px;
  line-height: 90px;
  padding: 0 30px;
  background: #fff;
  overflow: hidden;
  font-size: 32px;
}
.header {
  background: #fff;
  padding: 16px 30px;
  .logo_col {
    display: flex;
    justify-content: center;
  }
  .logo {
    width: 138px;
  }
  .search_col {
    flex: 1;
    // padding-left: 20px;
    // padding-right: 16px;
  }
  .search {
    background-color: #ededed;
    border-radius: 4px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666;
  }
  .login_btn {
    width: 74px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #dd1a21;
    border: 1px solid #dd1a21;
    border-radius: 8px;
    font-size: 24px;
  }
}
.cate_tag .van-tabs__wrap {
  height: 60px;
}
.home_swipe {
  height: 294px;
  &.van-swipe__indicator {
    width: 40px;
    height: 4px;
    border-radius: 0;
  }
}
.home_service {
  height: 72px;
  padding: 0 var(--van-padding-md);
  font-size: 24px;
  background-color: #fff;

  .home_service_col {
    display: flex;
    align-items: center;
    .text {
      margin-left: 8px;
    }
  }
}
.home_wrapper {
  background-color: #fff;

  .home_wrapper_col {
    max-width: 20%;
    flex: 0 0 20%;
    padding: var(--van-padding-xs) var(--van-padding-sm);
  }
  .text {
    font-size: 24px;
    margin-top: 10px;
    text-align: center;
  }
}
.home_freshman {
  margin-top: 20px;
  background-color: #fff;
  padding-bottom: 30px;
  .module_title {
    text-align: center;
    .text {
      position: relative;
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 24px;
        height: 3px;
        background-color: #333;
      }
      &::before {
        left: -40px;
      }
      &::after {
        right: -40px;
      }
    }
  }
  .home_freshman_row {
    height: 434px;
    padding: 0 30px;
    .left {
      background-color: #f9e9cf;
      position: relative;
      .name {
        padding-top: 30px;
        padding-left: 30px;
        font-size: 32px;
      }
      .hongbao {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: -60px;
        margin: auto;
        width: max-content;
        height: max-content;
        .animate {
          position: absolute;
          width: 30px;
          height: 20px;
          bottom: 28px;
          right: 62px;
          background-image: url("../../assets/image/home/freshman/animate.png");
          background-size: 100% 100%;
          animation: carousel 1s linear infinite;
        }
      }
    }
    .right {
      padding-left: 4px;
    }
  }
  .activity {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .activity_box {
      width: 100%;
      height: calc(50% - 2px);
      border-radius: 4px;
      font-size: 24px;
      padding-top: 20px;
      padding-left: 30px;
      position: relative;
      &:first-child {
        background-color: #fbe2d3;
      }
      &:last-child {
        background-color: #ffecc2;
      }
      .title{
        font-size: 32px;
        line-height: 1.5;
      }
      .subtitle{
        color: #7f7f7f;
      }
      .pic{
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .discount{
        position: absolute;
        top: 20px;
        right: 30px;
        width: 80px;
        height: 80px;
        border-radius: 100%;
        opacity: 0.8;
        color: #fff;
        background-color: #f59524;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        .line{
            font-size: 20px;
            text-decoration: line-through;
        }
      }
    }
  }
}
.category_hot{
  margin-top: 20px;
}
@keyframes carousel {
  0% {
    background-image: url("../../assets/image/home/freshman/animate_1.png");
  }
  50% {
    background-image: url("../../assets/image/home/freshman/animate_2.png");
  }
  100% {
    background-image: url("../../assets/image/home/freshman/animate.png");
  }
}
</style>

<!-- <template>
<van-search v-model="value" placeholder="请输入搜索关键词" />
<van-swipe :autoplay="5000" lazy-render>
  <van-swipe-item v-for="image in images" :key="image">
    <img :src="image" style="width: 100%" />
  </van-swipe-item>
</van-swipe>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const images = [
    'https://yanxuan.nosdn.127.net/977365d7a7c596f410fec26d68fb1553.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
    'https://yanxuan.nosdn.127.net/static-union/1652253399c6f282.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
]
 const value = ref('')
</script>

<style>

</style> -->
