<template>
    <div v-if="product" class="form shadow-lg">

        <form @submit.prevent="EditProduct(id, product)" class="form-item">
            <h3 class="text-center mt-4">Thay đổi thông tin sản phẩm</h3>
            <div class="form-group">
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Tên sản phẩm</label>
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
                    <label class="col-sm-2 col-form-label">Số lượng</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="product.amount">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Giá bán</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="product.price">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Biên chế</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="product.club">
                    </div>
                </div> 
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Hình ảnh</label>
                    <div class="col-sm-10">
                        <input type="file" @change="previewFiles" multiple >

                    </div>
                </div> 
                

                <button class="btn btn-primary mt-4">Lưu</button>
                <router-link :to="{name: 'productmanager'}"> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay lại</button>
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
import productService from '../services/product.service';
import axios from "axios";
    export default {
        data(){
            return{
                product:{},
            //    id : this.$route.params.id
            }
        },
        props:{
            id : {type: String, required: true},
        },
        methods: {
            async getProduct(id){
                this.product = await productService.get(id)
            },
            // async EditProduct(id,product){
            //     this.product = await productService.update(id,product)
            // }
            async EditProduct(id) {
                try {
                console.log(this.product.imageUrl);
                const response = await axios({
                    method: "put",
                    url: "http://localhost:3000/api/products/"+id,
                    headers: {
                    "Content-Type": "multipart/form-data",
                    },
                    data: {
                        name: this.product.name, 
                        genres: this.product.genres,
                        amount: this.product.amount,
                        price: this.product.price,
                        club: this.product.club,
                        imageUrl: this.product.imageUrl,
                    },
                });

                console.log(response);
                } catch (e) {
                console.log(e);
                }
            },
            previewFiles(event) {
                console.log(event.target.files[0]);
                this.product.imageUrl = event.target.files[0];
            },
        },
        created(){
            this.getProduct(this.id)
        }
    }

</script>
    