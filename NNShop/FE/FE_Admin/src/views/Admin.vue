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
        <li class="list-group-item active" style="list-style: none; text-decoration: none;"> <h2 style="color: white;">THANH ĐIỀU KHIỂN</h2></li>
        <router-link :to="{ name: 'statistical' }" style="list-style: none; text-decoration: none">
          <li class="list-group-item">Thống Kê</li>
        </router-link>
        <router-link :to="{ name: 'OrderCheck' }" style="list-style: none; text-decoration: none">
        <li class="list-group-item">Kiểm Tra Đơn Hàng</li>
      </router-link>
      <router-link :to="{ name: 'ordermanager' }" style="list-style: none; text-decoration: none">
        <li class="list-group-item">Quản Lý Đơn Hàng</li>
      </router-link>
      <router-link :to="{ name: 'accountmanager' }" style="list-style: none; text-decoration: none">
        <li class="list-group-item">Quản Lý Tài Khoản</li>
      </router-link>
      <router-link :to="{ name: 'productmanager' }" style="list-style: none; text-decoration: none">
        <li class="list-group-item">Quản Lý Sản Phẩm</li>
      </router-link>
      <router-link :to="{ name: 'contactnmanager' }" style="list-style: none; text-decoration: none">
        <li class="list-group-item">Quản Lý Liên Hệ</li>
      </router-link>
      <router-link :to="{ name: 'promotionmanager' }" style="list-style: none; text-decoration: none">
        <li class="list-group-item">Quản Lý Khuyển Mãi</li>
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



