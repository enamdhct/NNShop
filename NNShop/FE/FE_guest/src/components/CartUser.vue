<script>
import SearchTable from "@/components/SearchTable.vue";
import CartService from "../services/cart.service";
    export default {
        data(){
            return {
                carts: [],
                _id : localStorage.getItem('_id'),
                admin : localStorage.getItem('admin'),
                searchText: "",
                activeIndex: -1,
            }
        },
        components: {
            SearchTable
        },
    methods: {
        async DeleteCart(id) {
            await CartService.delete(id);
            this.carts = await CartService.getAll();
        },
    },
    async created() {
        this.carts = await CartService.getAll();
    },
};
</script>
<style>
    @import "../assets/style.css";
</style>
<template>
    <div class="container">
        <div class="top-cart">
            <p><i class="fa-solid fa-cart-shopping"></i>Ấn nút thanh toán để mua hàng bạn nhé</p>
        </div>
        <div class="row text-center shadow-sm cart-header">

            <p class="col-3">Mã Đơn</p>
            <div class="col-3">
                <p>Tên SP</p>
            </div>
            <div class="col-2 text-center">
                <p>Trạng Thái</p>
            </div>
            <div class="col-2">
                <p>Số Lượng</p>
            </div>
            <div class="col-2">
                <p>Tháo Tác</p>
            </div>
        </div>
        
        <form class="col-12 cart shadow-sm" 
            v-for="(cart, index) in carts.filter(cart => cart.userId === _id && cart.state === '')" :key="cart._id"
            :class="{ active: index === activeIndex }">
            <div class="row text-center">
                <!-- <div class="col-1"><input type="checkbox" style="font-size: 20px;"></div> -->
                
                <div class="col-3">{{cart._id}}</div>
                <div class="col-3"><p>{{cart.productName}}</p></div>
                <div class="col-2">{{cart.state}}</div>
                <div class="col-2">{{cart.sl}}</div>
                <div class="col-2">

                    <router-link :to="{name: 'UserOrder', params: {id: cart._id}}">
                        <button class="btn btn-success mr-2">Đặt Hàng</button>
                    </router-link>
      
                    <button class="btn btn-danger" @click="DeleteCart(cart._id)">Xóa</button>
                    
                </div>
            </div>

    
        </form>
    </div>
</template>