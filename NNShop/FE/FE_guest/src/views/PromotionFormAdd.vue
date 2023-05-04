<template>
    <div class="form shadow-lg">
        <h3 class="text-center mt-4">Thêm khuyến mãi</h3>
        <form @submit="AddPromotion()" class="form-item"  enctype="multipart/form-data">
            <div class="form-group" >
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
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Hình ảnh</label>
                    <div class="col-sm-10">
                        <input type="file" class="form-control" @change="previewFiles" multiple  >
                    </div>
                </div>

                <button class="btn btn-primary mt-4">Thêm</button>
                <router-link :to="{name: 'promotionmanager'}"> 
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
import promotionService from '../services/promotion.service';
import userService from '../services/user.service';
import axios from "axios";
    export default {
        data(){
            return{
                promotion: null,
                user: null,
            //    id : this.$route.params.id
            }
        },

        methods: {
            async AddContact() {
        try {
          console.log(this.promotion.imageUrl);
          const response = await axios({
            method: "post",
            url: "http://localhost:3000/api/promotions",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            data: {
                name: this.promotion.name, 
                discount: this.promotion.discount,
                start: this.promotion.start,
                end: this.promotion.end,
                description: this.promotion.description,
                imageUrl: this.promotion.imageUrl,
            },
          });
          console.log(response);
        } catch (e) {
          console.log(e);
        }
      },
            previewFiles(event) {
                console.log(event.target.files[0]);
                this.contact.imageUrl = event.target.files[0];
      },
        },
        created(){
            this.promotion = {};
            this.user = {};
        }
    }

</script>
