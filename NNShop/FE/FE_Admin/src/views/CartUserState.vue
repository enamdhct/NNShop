<script>
import SearchTable from "@/components/SearchTable.vue";
import CartService from "../services/cart.service";
    export default {
        data(){
            return {
                carts: [],
                _id : localStorage.getItem('_id'),
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
        async Confirm(id){
            // const cart =
            await CartService.update(id,
                    {
                        state: "chờ xữ lý"
                    })
        }
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
        <div class="row text-center shadow-sm cart-header">

            <p class="col-4">Mã đơn</p>
            <div class="col-2">
                <p>Tên Sản Phẩm</p>
            </div>
            <div class="col-2">
                <p>Khích Thước</p>
            </div>
            <div class="col-2">
                <p>Trạng Thái</p>
            </div>
            <div class="col-2">
                <p>Số Lượng</p>
            </div>
        </div>
        
        <div class="col-12 cart shadow-sm" 
            v-for="(cart, index) in carts.filter(cart => cart.userId === _id && cart.state != '')" :key="cart._id"
            :class="{ active: index === activeIndex }">
            <div class="row text-center">
                <div class="col-4"><p>{{cart._id}}</p></div>
                <div class="col-2">{{cart.productName}}</div>
                <div class="col-2">{{cart.size}}</div>
                
                <div class="col-2">{{cart.state}}</div>
                <div class="col-2">{{cart.sl}}</div>
                <!-- <div class="col-2">
                
                    <router-link :to="{name: 'UserOrder'}">
                        <button class="btn btn-success mr-2" @click="Confirm(cart._id)">Đặt hàng</button>
                    </router-link>
                    <button class="btn btn-danger" @click="DeleteCart(cart._id)">Xóa</button>
                    
                </div> -->
            </div>

    
        </div>
    </div>
</template>