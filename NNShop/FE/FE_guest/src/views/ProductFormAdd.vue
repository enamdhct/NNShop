<template>
    <div class="form shadow-lg">
        <h3 class="text-center mt-4">Thêm sản phẩm</h3>
        <form @submit="AddProduct(product)" class="form-item">
            <div class="form-group" >
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Tên Sản Phẩm</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="product.name">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Loại</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="product.genres">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Số Lượng</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="product.amount">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Giá Bán</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="product.price">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Biên Chế</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="product.club">
                    </div>
                </div> 
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Hình Ảnh</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="product.imageUrl" >

                    </div>
                </div> 
                <button class="btn btn-primary mt-4">Thêm</button>
                <router-link :to="{name: 'home'}"> 
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
import productService from '../services/product.service';
import userService from '../services/user.service';
    export default {
        data(){
            return{
                product: null,
                user: null,
                admin : localStorage.getItem('admin'),
            //    id : this.$route.params.id
            }
        },
        // props:{
        //     id : {type: String, required: true},
        // },
        methods: {
            // async getAccout(id){
            //     this.product = await productService.get(id)
            // },
            async AddProduct(data){
                 await productService.create(
                    {
                        name: this.product.name, 
                        genres: this.product.genres,
                        amount: this.product.amount,
                        price: this.product.price,
                        club: this.product.club,
                        imageUrl: this.product.imageUrl,

                    })

                    // await userService.create(
                    //     name: this.user.name, 
                    //     phone: this.user.phone,
                    //     email: this.user.email,
                    //     address: this.user.address,
                    // )
            }
        },
        created(){
            this.product = {};
            this.user = {};
        }
    }

</script>
    