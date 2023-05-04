<template>
    <div v-if="promotion" class="form shadow-lg">

        <form @submit="EditPromotion(id, promotion)" class="form-item">
            <h3 class="text-center mt-4">Thay đổi thông tin khuyến mãi</h3>
            <div class="form-group">
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Tên</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="promotion.name">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Ưu đãi</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="promotion.discount">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Thời gian bắt đầu</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="promotion.start">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Thời gian kết thúc</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="promotion.end">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Chi tiết</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="promotion.description">
                    </div>
                </div>

                <button class="btn btn-primary mt-4">Lưu</button>
                <router-link :to="{name: 'promotionmanager'}"> 
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
import promotionService from '../services/promotion.service';
    export default {
        data(){
            return{
                promotion:{},
            //    id : this.$route.params.id
            }
        },
        props:{
            id : {type: String, required: true},
        },
        methods: {
            async getPromotion(id){
                this.promotion = await promotionService.get(id)
            },
            async EditPromotion(id, promotion){
                this.promotion = await promotionService.update(id,promotion)
            }
        },
        created(){
            this.getPromotion(this.id)
        }
    }
</script>