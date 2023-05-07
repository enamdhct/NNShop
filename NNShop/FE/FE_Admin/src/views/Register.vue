<template>
    <div class="container" style="margin-bottom:10px">
        <h1 style="text-align:center">Đăng ký</h1>
        <div class="row mt-4">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <form @submit="handleSubmit" class="form-item">
                    <div class="form-group">
                        <div class="form-group">
                            <label style="font-weight:bolder">Họ Và Tên:</label>
                            <input type="text" class="form-control" v-model="name" placeholder=" Nhập vào name">
                        </div>
                        <label style="font-weight:bolder">UserName:</label>
                        <input type="text" class="form-control" v-model="username" placeholder=" Nhập vào username">
                    </div>
                    <div class="form-group">
                        <label style="font-weight:bolder">Mật Khẩu:</label>
                        <input type="password" class="form-control" v-model="password" placeholder=" Nhập vào Password">
                    </div>
                    <div class="form-group">
                        <label style="font-weight:bolder">Nhập Lại Mật Khẩu:</label>
                        <input type="password" class="form-control" v-model=password_confirm
                            placeholder=" Nhập vào Password ">
                    </div>
                    <div class="form-group">
                        <label style="font-weight:bolder">Email:</label>
                        <input type="email" class="form-control" v-model="email" placeholder=" Nhập vào Email">
                    </div>
                    <div class="form-group">
                        <label style="font-weight:bolder">Số Điện Thoại:</label>
                        <input type="number" class="form-control" v-model="phone" placeholder=" Nhập vào SDT">
                    </div>
                    <div class="form-group">
                        <label style="font-weight:bolder">Địa Chỉ</label>
                        <input type="text" class="form-control" v-model="address" placeholder=" Nhập vào Dia chi">
                    </div>
                    <div class="form-check" style="margin-bottom: 5%;">
                        <input type="checkbox" class="form-check-input" id="Check">
                        <label class="form-check-label">Bằng cách đăng ký bạn đã đồng ý với Shop với về <a href="#"
                                style="text-decoration: none;">Điều khoản dịch vụ </a>và <a href="#"
                                style="text-decoration: none;">Chính sách bảo mật</a></label>
                    </div>
                    <div>
                        <button type="submit" style="width:50%; margin: 0 0 25% 25%;" class="btn btn-danger">ĐĂNG
                            KÝ</button>
                    </div>

                </form>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import authService from '../services/auth.service'
export default {
    name: 'Register',
    data() {
        return {
            name: '',
            username: '',
            password: '',
            password_confirm: '',
            email: '',
            phone: '',
            address: '',
        }
    },
    methods: {
        async handleSubmit(evt) {
            evt.preventDefault()
            const data = {
                name: this.name,
                username: this.username,
                password: this.password,
                password_confirm: this.password_confirm,
                email: this.email,
                phone: this.phone,
                address: this.address
            };

            await authService.register(data)
                .then(res => {
                    this.$router.push({
                        name: 'login',
                    })
                }).catch(
                    err => {
                        console.log(err)
                })
        }
    }
}
</script>