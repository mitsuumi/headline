<template>
  <!-- 頭部區域 -->
  <div class="home-container">
    <van-nav-bar title="黑馬頭條" :fixed="true" />
    <van-pull-refresh v-model="isLoading" :disabled="finished" @refresh="onRefresh">
        <!-- 導入，註冊，並使用ArticleInfo原件 -->
        <!-- eslint-disable-next-line max-len -->
        <!-- 觸發load事件，請求第2頁資料，同時loading的數值變成了true，當loading為true表示在請求資料 -->
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="沒有更多了"
            @load="onLoad"
        >
            <ArticleInfo
                v-for="item in artList"
                :key="item.id"
                :title="item.title"
                :author="item.aut_name"
                :comment-count="item.comm_count"
                :date="item.pubdate"
                :cover="item.cover"
            ></ArticleInfo>
        </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleListAPI } from '../api/articleAPI';
import ArticleInfo from '../components/ArticleInfo.vue';

export default {
  name: 'MyHome',
  data() {
    return {
      // 頁碼值
      page: 1,
      //   每頁顯示多少資料
      limit: 5,
      //   文章的陣列
      artList: [],
      //   loading是否正在加載下一頁資料，如果loading為true，不會反覆觸發load事件
      //   每當下一頁資料請求回來後，要將loading改為false
      //   先設定true，讓一開始進來不會觸發
      loading: true,
      //   所有資料是加載完畢，如果沒有更多資料，需要把finished改成true
      finished: false,
      //   是否正在下拉刷新
      isLoading: false,
    };
  },
  created() {
    this.initArticleList();
  },
  methods: {
    //   封裝獲取文章列表數據的方法
    async initArticleList(isRefresh) {
      // 發起get請求，取得文章資料
      const { data: res } = await getArticleListAPI(this.page, this.limit);
      if (isRefresh) {
        // 是下拉刷新，那麼是 this.artList = [ 新資料,舊資料]
        this.artList = [...res, ...this.artList];
        this.loading = false;
      } else {
        //   是上拉下載，那麼是 this.artList = [舊資料, 新資料]
        this.artList = [...this.artList, ...res];
        this.loading = false;
      }

      if (res.length === 0) {
        // 沒有更多資料，this.finished改成true
        this.finished = true;
      }
    },
    // 只要onLoad被觸發，就請求下一頁的資料
    onLoad() {
      console.log('load事件');
      //   1. 讓頁碼值+1
      this.page += 1;
      // 2. 重新請求api獲取資料
      this.initArticleList();
    },
    onRefresh() {
      console.log('下拉');
      //   1. 讓頁碼+1
      this.page += 1;
      // 2. 重新請求api資料
      this.initArticleList(true);
    },
  },
  components: {
    ArticleInfo,
  },
};
</script>

<style scoped>
.home-container {
  padding: 46px 0 50px 0;
}
.van-nav-bar {
  background-color: rgb(9, 154, 238);
}
:deep .van-nav-bar__title {
  color: white;
}
</style>
