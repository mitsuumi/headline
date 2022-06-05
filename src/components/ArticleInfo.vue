<template>
  <van-cell>
    <!-- 標題區域的插槽 -->
    <template #title>
      <div class="title-box">
        <!-- title -->
        <span>{{ title }}</span>
        <!-- 單張圖片 -->
        <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type===1"/>
      </div>
      <!-- three pictures -->
      <div class="thumb-box" v-if="cover.type===3">
        <img :src="item" alt="" class="thumb" v-for="(item, i) in cover.images" :key="i"/>

      </div>
    </template>
    <!-- label區域的slot -->
    <template #label>
      <div class="label-box">
        <!-- eslint-disable-next-line max-len -->
        <span
          >作者 {{ author }} &nbsp;&nbsp; {{ commentCount }} 評論 &nbsp;&nbsp; 發布日期
          {{ date }}</span
        >
        <!-- 關閉按鈕 -->
        <van-icon name="cross" />
      </div>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleInfo',
  props: {
    //   標題
    title: {
      type: String,
      default: '',
    },
    // 作者
    author: {
      type: String,
      default: '',
    },
    // 評論數
    commentCount: {
      type: [Number, String],
      default: 0,
    },
    // 文章建立時間
    date: {
      type: String,
      default: '',
    },
    // 圖片
    cover: {
      type: Object,
      default() {
        return { cover: 0 };
      },
    },
  },
};
</script>

<style scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
