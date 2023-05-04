<template>
    <div class="form shadow-lg">
        <h3 class="text-center mt-4">Thêm đơn hàng</h3>
        <form @submit="AddOrder(proid)" class="form-item">
            <div class="form-group" >
                <!-- <div class="row mt-4">
                    <label class="col-sm-2 col-form-label ">UID</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" disabled v-model="_id">
                    </div>
                </div> -->

                <div class="row mt-4" v-if="admin === 'Admin'">
                    <label class="col-sm-2 col-form-label ">UID</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="userId">
                    </div>
                </div>
                <!-- <div class="row mt-4" v-if="admin === 'Admin'">
                    <label class="col-sm-2 col-form-label ">Tên SP</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="productName">
                    </div>
                </div> -->
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label ">Tên SP</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="productName">
                    </div>
                </div>

                <!-- <div class="row mt-4" v-if="admin === 'Admin'">
                    <label class="col-sm-2 col-form-label ">Giá</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="productPrice">
                    </div>
                </div> -->
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label ">Giá</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="productPrice">
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
                        <input type="number" class="form-control"  v-model="cart.sl">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Ghi chú</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="cart.description">
                    </div>
                </div>
                <!-- <button class="btn btn-primary mt-4"> -->
                <!-- <router-link :to="{name: 'home'}" v-if="admin === ''"> 
      Thêm
                </router-link></button> -->

                <button class="btn btn-primary mt-4" >Đặt hàng</button>
                <router-link :to="{name: 'home'}" v-if="admin != 'Admin'"> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay lại</button>
                </router-link>
                <router-link :to="{name: 'ordermanager'}" v-else> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay lại</button>
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
                sl: "",
                product: {},
                admin : localStorage.getItem('admin'),
            }
        },
        props:{
            name : {type: String, req: true},
            price : {type: String, req: true},
            amount : {type: String, req: true},
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
                        productName: this.productName, 
                        productPrice: this.productPrice, 
                        size: this.cart.size,
                        nunmber: this.cart.nunmber,
                        namePlayer: this.cart.namePlayer,
                        sl: this.cart.sl,
                        description: this.cart.description,
                        state: "chờ xữ lý"
                    }
                ),
                //tru sl trong kho
                await ProductService.update(proid,{
                    amount: this.amount - 1
                })

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
                this.sl = this.cart.sl;
             }
          }
        }
        

</script>
    