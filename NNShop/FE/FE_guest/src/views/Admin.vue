
<!-- <template>
<div class="row">
  <div class="col-3"> -->
    
    <!-- <div class="btn-group-vertical">

      <router-link :to="{name: 'productmanager'}">   <button class="sidebar" >Quản lý sản phẩm</button> </router-link>
      <router-link :to="{name: 'ordermanager'}">       <button class="sidebar" >Quản lý đơn hàng</button>  </router-link>
      <router-link :to="{name: 'accountmanager'}">   <button class="sidebar" >Quản lý người dùng</button>  </router-link>
      <router-link :to="{name: 'contactnmanager'}">   <button class="sidebar" >Quản lý liên hệ</button>  </router-link>
      <router-link :to="{name: 'promotionmanager'}">    <button class="sidebar" >Quản lý khuyến mãi</button>  </router-link>
    </div> -->





<template>
  <div class="container">
    <div class="row"  >
    <div class="col-3 link" style="list-style: none; text-decoration: none" >
      <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" style="width: 256px" mode="vertical"
        @click="handleClick">
        <router-link :to="{ name: 'statistical' }" >
        <a-menu-item key="1">
          <template>
          </template>
          <span style="font-size: 20px;">THỐNG KÊ </span>
        </a-menu-item>
        </router-link>
        <router-link :to="{ name: 'OrderCheck' }">
        <a-menu-item key="2" >
          <template>

          </template>
          <span style="font-size: 20px">KIỂM TRA ĐƠN HÀNG </span>
        </a-menu-item>
      </router-link>
        <a-sub-menu key="sub1" class="shadow-lg">
          <template #icon>
            <AppstoreOutlined />
          </template>
          <template #title>          <span style="font-size: 20px">QUẢN LÝ </span></template>
          <router-link :to="{ name: 'ordermanager' }">
            <a-menu-item key="3" style="font-size: 17px">QUẢN LÝ ĐƠN HÀNG</a-menu-item>
            </router-link>
            <router-link :to="{ name: 'productmanager' }">

              <a-menu-item key="4" style="font-size: 17px">QUẢN LÝ SẢN PHẨM</a-menu-item>
            </router-link>
            <router-link :to="{ name: 'accountmanager' }">
              <a-menu-item key="5" style="font-size: 17px">QUẢN LÝ TÀI KHOẢN</a-menu-item>
            </router-link>
            <router-link :to="{ name: 'promotionmanager' }">
              <a-menu-item key="6" style="font-size: 17px">QUẢN LÝ KHUYẾN MÃI</a-menu-item>
            </router-link>
            <router-link :to="{ name: 'contactnmanager' }">
              <a-menu-item key="7" style="font-size: 17px">QUẢN LÝ LIÊN HỆ</a-menu-item>
            </router-link>
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="col-9">
      <RouterView> </RouterView>
    </div>
  </div>
  </div>
 
</template>

<style scoped>
    @import "../assets/style.css";
</style>


<script>
import { defineComponent, reactive, toRefs } from 'vue';
import Statistical from './Statistical.vue'
export default defineComponent({
  components: {
    Statistical,
  },
  setup() {
    const state = reactive({
      selectedKeys: [],
      openKeys: [],
    });
    const handleClick = menuInfo => {
      console.log('click ', menuInfo);
    };
    return {
      ...toRefs(state),
      handleClick,
    };
  },
});
</script>
