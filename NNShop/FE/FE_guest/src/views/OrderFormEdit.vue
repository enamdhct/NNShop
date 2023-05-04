<template>
    <div v-if="cart" class="form shadow-lg">
        <form @submit="EditOrder(id, cart)" class="form-item">
            <h3 class="text-center mt-4">Thay đổi thông tin đơn hàng</h3>
            <div class="form-group">
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Tên sản phẩm</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" disabled v-model="cart.productName">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Giá</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" disabled v-model="cart.productPrice">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Địa chỉ</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="address">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Kích cỡ</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.size">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Số áo</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.number">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">In tên</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.namePlayer">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Số lượng</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.sl">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Ghi chú</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.description">
                    </div>
                </div>
 
                <!-- <router-link :to="{name: 'home'}" v-if="admin === ''"> 
                <button class="btn btn-primary mt-4">Lưu1</button>
                </router-link> -->
                <button class="btn btn-primary mt-4">Đặt hàng</button>
                <router-link :to="{name: 'home'}" v-if="admin === ''"> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay lại</button>
                </router-link>
                <router-link :to="{name: 'ordermanager'}" v-else> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay lại1</button>
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
import ProductService from '../services/product.service';
    export default {
        data(){
            return{
                cart:{},
                // id : this.$route.params.id
                product: {},
                admin : localStorage.getItem('admin'),
                address : localStorage.getItem('address'),
            }
        },
        props:{
            id : {type: String, required: true},
        },
        methods: {
            async getOrder(id){
                this.cart = await cartService.get(id),
                this.product = await ProductService.get(this.cart.productId)
            },
            // async getbyid(productId) {
            //     this.product = await ProductService.get(this.cart.productId)
            // },
            async EditOrder(id,cart){
                this.cart = await cartService.update(id,{
                    userAddress: this.address,
                    productName : this.cart.productName,
                    productPrice: this.cart.productPrice,
                    size: this.cart.size,
                    number: this.cart.number,
                    namePlayer: this.cart.namePlayer,
                    description: this.cart.description,
                    sl: this.cart.sl,
                    state: "chờ xữ lý"
                }).then(
                    await ProductService.update(this.cart.productId,{
                    amount: this.product.amount - parseInt(this.cart.sl)
                    // amount: this.a
                }
                ),)
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
            // getbyid(this.cart.productId)
        }
    }

</script>
    