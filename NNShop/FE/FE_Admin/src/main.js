import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'ant-design-vue/dist/antd.css';
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'


const app =createApp(App);
app.use(router)
app.use(Antd);
app.mount('#app');
