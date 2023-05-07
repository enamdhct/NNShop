<template>
    <div v-if="cart" class="form shadow-lg">
        <form @submit="EditOrder(id, cart)" class="form-item">
            <h3 class="text-center mt-4">Thay Đổi Thông Tin Đơn Hàng</h3>
            <div class="form-group">
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Tên Sản Phẩm</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.productName">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Giá</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.productPrice">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Kích Cỡ</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.size">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Số Áo</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.number">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">In Tên</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.namePlayer">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Số Lượng</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.sl">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Ghi Chú</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.description">
                    </div>
                </div>
 
                <!-- <router-link :to="{name: 'home'}" v-if="admin === ''"> 
                <button class="btn btn-primary mt-4">Lưu1</button>
                </router-link> -->
                <button class="btn btn-primary mt-4">Lưu</button>
                <router-link :to="{name: 'home'}" v-if="admin === ''"> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay Lại</button>
                </router-link>
                <router-link :to="{name: 'ordermanager'}" v-else> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay Lại1</button>
                </router-link>
            </div>
        </form>
    </div>
</template>
<style>
.form {
    margin: 0 auto;
    width: 700px;
}
.form-item{
    padding: 10px;
}
</style>
<script>
import cartService from '../services/cart.service';
    export default {
        data(){
            return{
                cart:{},
                // id : this.$route.params.id
                admin : localStorage.getItem('admin'),
            }
        },
        props:{
            id : {type: String, required: true},
        },
        methods: {
            async getOrder(id){
                this.cart = await cartService.get(id)
            },
            async EditOrder(id,cart){
                this.cart = await cartService.update(id,{
                    productName : this.cart.productName,
                    productPrice: this.cart.productPrice,
                    sizz: this.cart.size,
                    number: this.cart.number,
                    namePlayer: this.cart.namePlayer,
                    description: this.cart.description,
                    sl: this.cart.sl,
                    state: "chờ xữ lý"
                })
            },
            async Confirm(id){
            // const cart =
            await CartService.update(id,
                {
                    state: "chờ xữ lý"
                }),
            console.log(this.cart._id)    
        }
        },
        created(){
            this.getOrder(this.id)
        }
    }

</script>
    