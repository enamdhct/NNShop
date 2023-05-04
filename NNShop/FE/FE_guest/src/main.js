import  {createApp} from 'vue';
import App from './App.vue';

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// import { BootstrapVue, IconsPlugin, TablePlugin  } from 'bootstrap-vue'
// import Bootstrap from 'bootstrap';
// import VueSimpleAlert from "vue3-simple-alert";
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


// const app = createApp(App).use(router)
// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
initializeApp({
    apiKey: "AIzaSyCl_UKzEPS6mpRoH1Xu39LGgmiJot9dgmI",
    authDomain: "ct271-afe88.firebaseapp.com",
    projectId: "ct271-afe88",
    storageBucket: "ct271-afe88.appspot.com",
    messagingSenderId: "364292603648",
    appId: "1:364292603648:web:97f4e9171f074df2d43de5"
  }) ;

// Initialize Firebase
// app.mount('#app')
// app.use(VueSimpleAlert)


const app = createApp(App);
app.use(router);
// .mount('#app');
app.use(Antd);
app.mount('#app');



// createApp(App).use(VueSimpleAlert, { reverseButtons: true });
// createApp(App).use(BootstrapVue);
// createApp(App).use(Bootstrap);
// createApp(App).use(IconsPlugin);
// createApp(App).use(TablePlugin);

// var App = BootstrapVue();
// var App = IconsPlugin();
