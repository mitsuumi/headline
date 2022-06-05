import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// 導入並安裝vant
// eslint-disable-next-line import/order
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);
app.use(Vant);
app.use(router);
app.mount('#app');
