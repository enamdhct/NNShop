<template>
    <div v-if="user" class="form shadow-lg">

        <form @submit="EditUser(id, user)"     :validation-schema="userFormSchema" class="form-item" >
            <h3 class="text-center mt-4">Thay đổi thông tin tài khoản</h3>
            <div class="form-group">
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label" >Username</label>
                    <div class="col-sm-10">
                        <input type="text" username="username" class="form-control"  v-model="user.username">
                    </div>
                    <ErrorMessage username="username" class="error-feedback" />
                </div>
                <div class="row mt-4" v-if="admin === 'Admin'">
                    <label class="col-sm-2 col-form-label">Chức năng</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="user.admin">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label" for="name">Họ và tên</label>
                    <div class="col-sm-10">
                        <input type="text" name="name" class="form-control"  v-model="user.name">
                    </div>
                    <ErrorMessage name="name" class="error-feedback" />
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Số điện thoại</label>
                    <div class="col-sm-10">
                        <input type="number" phone="phone" class="form-control"  v-model="user.phone">
                    </div>
                    <ErrorMessage phone="phone" class="error-feedback" />
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" email="email" class="form-control"  v-model="user.email">
                    </div>
                    <ErrorMessage email="email" class="error-feedback" />
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Địa chỉ</label>
                    <div class="col-sm-10">
                        <input type="text" address="address" class="form-control"  v-model="user.address">
                    </div>
                    <ErrorMessage address="address" class="error-feedback" />
                </div>
                <button class="btn btn-primary mt-4">Lưu</button>
                <router-link :to="{name: 'accountmanager'}" v-if="admin === 'Admin'"> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay lại</button>
                </router-link>
                <router-link :to="{name: 'usermanager'}" v-else> 
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
import userService from '../services/user.service';
import * as yup from "yup";
    import { ErrorMessage } from "vee-validate";
    export default {
        components: {
            ErrorMessage,
        },
        data(){
            const userFormSchema = yup.object().shape({
            username: yup
            .string()
            .required("Tên phải có giá trị.")
            .min(10, "Tên phải ít nhất 2 ký tự.")
            .max(50, "Tên có nhiều nhất 50 ký tự."),
            name: yup
            .string()
            .required("Tên phải có giá trị.")
            .min(2, "Tên phải ít nhất 2 ký tự.")
            .max(50, "Tên có nhiều nhất 50 ký tự."),
            email: yup
            .string()
            .email("E-mail không đúng.")
            .max(50, "E-mail tối đa 50 ký tự."),
            address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
            phone: yup
            .string()
            .matches(
            /((09|03|07|08|05)+([0-9]{8})\b)/g,
            "Số điện thoại không hợp lệ."
            ),
            });
            return{
                user:{},
            //    id : this.$route.params.id
            admin : localStorage.getItem('admin'),
            userFormSchema,
            }
        },
        props:{
            id : {type: String, required: true},
        },
        methods: {
            async getUser(id){
                this.user = await userService.get(id)
            },
            async EditUser(id,user){
                this.user = await userService.update(id,user)
            }
        },
        created(){
            this.getUser(this.id)
        }
    }

</script>
    