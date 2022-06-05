<template>
  <!-- 路由佔位 -->
  <router-view />
 <van-tabbar route>
  <van-tabbar-item replace to="/" icon="home-o">首頁</van-tabbar-item>
  <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
</van-tabbar>

</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>

<style scoped></style>
