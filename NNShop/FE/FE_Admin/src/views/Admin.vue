<script>
export default{
  data(){
      return {
        admin : localStorage.getItem('admin'),
  
      }
    },
};
</script>
<template>
  <div v-if="admin==='Admin'">
    <div class="row"  >
    <div class="col-3 link menu mt-4" >
      <ul class="list-group ">
        <li class="list-group-item active" style="list-style: none; text-decoration: none;"> <h2 style="color: white;">Thanh điều khiển</h2></li>
        <router-link :to="{ name: 'statistical' }" style="list-style: none; text-decoration: none">
          <li class="list-group-item">Thống kê</li>
        </router-link>
        <router-link :to="{ name: 'OrderCheck' }" style="list-style: none; text-decoration: none">
        <li class="list-group-item">Kiểm tra đơn hàng</li>
      </router-link>
      <router-link :to="{ name: 'ordermanager' }" style="list-style: none; text-decoration: none">
        <li class="list-group-item">Quản lý đơn hàng</li>
      </router-link>
      <router-link :to="{ name: 'accountmanager' }" style="list-style: none; text-decoration: none">
        <li class="list-group-item">Quản lý tài khoản</li>
      </router-link>
      <router-link :to="{ name: 'productmanager' }" style="list-style: none; text-decoration: none">
        <li class="list-group-item">Quản lý sản phẩm</li>
      </router-link>
      <router-link :to="{ name: 'contactnmanager' }" style="list-style: none; text-decoration: none">
        <li class="list-group-item">Quản lý liên hệ</li>
      </router-link>
      <router-link :to="{ name: 'promotionmanager' }" style="list-style: none; text-decoration: none">
        <li class="list-group-item">Quản lý khuyến mãi</li>
      </router-link>
      </ul>
    </div>
    <div class="col-9 mt-4">
      <RouterView> </RouterView>
    </div>
  </div>
  </div>
 
</template>

<style scoped>
    @import "../assets/style.css";
</style>



