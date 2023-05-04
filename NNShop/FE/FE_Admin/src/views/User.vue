<script>
export default{
    data(){
        return{
            user: {},
            admin : localStorage.getItem('admin'),
            token : localStorage.getItem('token'),
            name : localStorage.getItem('name'),
            username : localStorage.getItem('username'),
            email : localStorage.getItem('email'),
            phone : localStorage.getItem('phone'),
            address : localStorage.getItem('address'),
            _id : localStorage.getItem('_id'),
        }
    },
}

</script>
<template>
    <div class="container">
        <h1 class="text-center">Thông tin tài khoản</h1>
        <div class="row mt-4">
            <div class="col-2">
                <img src="../assets/logo.png" alt="" width="150" height="150">
            </div>
            <div class="col-8 head-user">
                <p><label for="">Tên đăng nhập:  </label> {{username}}</p>
                <p><label for="">UID: </label> {{_id}}</p>
            </div>
            <div class="col-2">
                <router-link  :to="{
                            name: 'EditUser',
                            params: { id: _id },
                        }">
                    <button type="button" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>
                </router-link>
            </div>
        </div>
        <div class="mt-4 space"><h2>Thông tin cá nhân</h2></div>
        <div class="row mt-4">
            <div class="col-12 userdetail">
                <div class="row">
                    <div class="col-3 d-inline"><label for="">Họ và tên:  </label></div>
                    <div class="col-9 d-inline"><p> {{name}}</p></div>
                </div>
                <div class="row">
                    <div class="col-3 d-inline"><label for="">Địa chỉ:  </label></div>
                    <div class="col-9 d-inline"><p>{{address}}</p></div>
                </div>
                <div class="row">
                    <div class="col-3 d-inline"><label for="">Số điện thoại:  </label></div>
                    <div class="col-9 d-inline"><p>{{phone}}</p></div>
                </div>
                <div class="row">
                    <div class="col-3 d-inline"><label for="">Email:  </label></div>
                    <div class="col-9 d-inline">   <p> {{email}}</p></div>
                </div>
            </div>
        </div>
        <div class="mt-4 space"><h2>Thông tin tài khoản</h2></div>
        <div class="row mt-4">
            <div class="col-12 userdetail">
                <div class="row">
                    <div class="col-3 d-inline"><label for="">Username:  </label></div>
                    <div class="col-9 d-inline">      <p> {{username}}</p></div>
                </div>
                <div class="row">
                    <div class="col-3 d-inline"><label for="">password:  </label></div>
                    <div class="col-9 d-inline">  <p> ********</p></div>
                </div>
             </div>
        </div>
    </div>
</template>
<style>
    .userdetail p{
        margin: 10px;
        font-size: 20px;
        margin-top: 5px;
    }
    .head-user p{
        font-size: 25px;
    }
    .space {
        background-color: #F7F7FA;
    }
    label {
        font-size: 20px;
    }
</style>