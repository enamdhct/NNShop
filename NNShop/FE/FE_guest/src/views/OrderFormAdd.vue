<template>
    <div class="form shadow-lg">
        <h3 class="text-center mt-4">Thêm đơn hàng</h3>
        <form @submit="AddOrder(proid)" class="form-item">
            <div class="form-group" >
                <div class="row mt-4" v-if="admin === 'Admin'">
                    <label class="col-sm-2 col-form-label ">UID</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="userId">
                    </div>
                </div>

                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label ">Tên SP</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control " disabled v-model="productName">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label ">Giá</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" disabled v-model="productPrice">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label ">Địa Chỉ</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="address">
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
                        <input type="number" class="form-control"  v-model="cart.sl">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Ghi Chú</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.description">
                    </div>
                </div>
                <!-- <button class="btn btn-primary mt-4"> -->
                <!-- <router-link :to="{name: 'home'}" v-if="admin === ''"> 
      Thêm
                </router-link></button> -->

                <button class="btn btn-primary mt-4" >Đặt Hàng</button>
                <router-link :to="{name: 'home'}" v-if="admin != 'Admin'"> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay Lại</button>
                </router-link>
                <router-link :to="{name: 'ordermanager'}" v-else> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay Lại</button>
                </router-link>

            </div>
        </form>
    </div>
</template>
<style>
@import "../assets/style.css";
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
                cart: null,
                _id : localStorage.getItem('_id'),
            //    id : this.$route.params.id
                productName: "",
                productPrice: "",
                product: {},
                admin : localStorage.getItem('admin'),
                address : localStorage.getItem('address'),
            }
        },
        props:{
            name : {type: String, req: true},
            price : {type: String, req: true},
            amount : {type: Number, req: true},
            proid : {type: String, req: true},
        },
        methods: {
            // async getAccout(id){
            //     this.account = await accountService.get(id)
            // },
            async getbyid(id) {
                this.product = await ProductService.get(this.proid)
            },

            async AddOrder(proid){
                // evt.preventDefault()
                 await cartService.create(
                    {          
                        userId: this._id,
                        userAddress: this.address,
                        productName: this.productName, 
                        productPrice: this.productPrice, 
                        size: this.cart.size,
                        number: this.cart.number,
                        namePlayer: this.cart.namePlayer,
                        sl: this.cart.sl,
                        description: this.cart.description,
                        state: "chờ xữ lý"
                    }
                ).then(
                    await ProductService.update(proid,{
                    amount: this.amount - parseInt(this.cart.sl)
                    // amount: this.a
                }))
                //tru sl trong kho
                // a = await eval((this.amount - this.cart.sl).valueOf())
               

            }},
            created(){
            this.cart = {};
            this.getbyid(this.proid);
            // if(this.name != undefined ){
            //     this.productName = this.name;
            //  }
             if((this.name != undefined) && (this.price != undefined) ){
                this.productName = this.name;
                this.productPrice = this.price;
             }
          }
        }
        

</script>
    