<template>
    <div v-if="product" class="form shadow-lg">

        <form @submit="EditProduct(id, product)" class="form-item">
            <h3 class="text-center mt-4">Thay Đổi Thông Tin Sản Phẩm</h3>
            <div class="form-group">
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
                    <label class="col-sm-2 col-form-label">Số lượng</label>
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
                        <input type="text" class="form-control"  v-model="product.imageUrl">
                    </div>
                </div> 
                

                <button class="btn btn-primary mt-4">Lưu</button>
                <router-link :to="{name: 'productmanager'}"> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay Lại</button>
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
            async EditProduct(id,product){
                this.product = await productService.update(id,product)
            }
        },
        created(){
            this.getProduct(this.id)
        }
    }

</script>
    