<template>
    <div class="user-container">
        <div class="user-card">
            <van-cell>
                <!-- 使用title插槽來自定義標題 -->
                <template #icon>
                    <img src="../images/logo1.jpg" alt="" class="avatar">
                </template>
                <template #title>
                    <span class="username">用戶名</span>
                </template>
                <template #label>
                    <van-tag color="#fff" text-color="#007bff">申請認證</van-tag>
                </template>
            </van-cell>
            <div class="user-data">
                <div class="user-data-item">
                    <span>0</span>
                    <span>動態</span>
                </div>
                <div class="user-data-item">
                    <span>0</span>
                    <span>關注</span>
                </div>
                <div class="user-data-item">
                    <span>0</span>
                    <span>粉絲</span>
                </div>
            </div>
        </div>
        <!-- 操作面板 -->
        <van-cell-group class="action-card">
            <van-cell icon="edit" title="編輯資料" is-link />
            <van-cell icon="chat-o" title="小思同學" is-link />
            <van-cell icon="warning-o" title="退出登入" is-link />
        </van-cell-group>
    </div>
</template>

<script>
import { getArticleListAPI } from '../api/articleAPI';

// const result = getArticleListAPI(1, 5);
// console.log(result);

export default {
  name: 'MyUser',
  data() {
    return {
      page: 1,
      //   每頁顯示多少資料
      limit: 6,
    };
  },
  created() {
    this.initArticleList();
  },
  methods: {
    //   封裝獲取文章列表數據的方法
    async initArticleList() {
      // 發起get請求，取得文章資料
      const { data: res } = await getArticleListAPI(this.page, this.limit);
      console.log(res);
    },
  },
};
</script>

<style scoped>
.user-container {
    background-color: #007bff;
    color: white;
    padding-top: 20px;
}
.van-cell {
    background-color: #007bff;
    color: white;
}
.van-cell::after {
    display: none;
}
.avatar {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50%;
    margin-right: 10px;
}
.username{
    font-size: 14px;;
    font-weight: bold;
}
.user-data{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    padding: 30px 0;
}

.user-data-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.33%;
}

</style>
