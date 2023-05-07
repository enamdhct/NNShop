<template>
    <div class="form shadow-lg">
        <h3 class="text-center mt-4">Thêm Tài Khoản</h3>
        <form @submit="AddUser(user)" class="form-item">
            <div class="form-group" >
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Username</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="user.username">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="user.password">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Chức Vụ</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="user.admin">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Họ Và Tên</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="user.name">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">SĐT</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="user.phone">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="user.email">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Địa Chỉ</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="user.address">
                    </div>
                </div>

                
                <button class="btn btn-primary mt-4">Thêm</button>
                <router-link :to="{name: 'accountmanager'}"> 
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
import accountService from '../services/cart.service';
import userService from '../services/user.service';
    export default {
        data(){
            return{

                user: null,

            //    id : this.$route.params.id
            }
        },
        // props:{
        //     id : {type: String, required: true},
        // },
        methods: {
            // async getAccout(id){
            //     this.account = await accountService.get(id)
            // },
            async AddUser(data){
                 await userService.create(
                    {
                        username: this.user.username, 
                        password: this.user.password,
                         phone: this.user.phone,
                         address: this.user.address,
                         name: this.user.password,
                         email: this.user.email,
                         admin: this.user.admin
                    })
     
            }
        },
        created(){
            this.user = {};
        }
    }

</script>
    