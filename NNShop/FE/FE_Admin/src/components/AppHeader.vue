<script>
// import InputSearch from "@/components/InputSearch.vue";
// import ListSearchVue from "./ListSearch.vue";
import productService from "../services/product.service";
export default {
//     props:{
//     id:{ type: String, required: true },
//   },
//   data () {
//     return {
//       product:{},
//     };
//   },
//   method9s: {
//     async getbyid(id) {
//       this.product = await ProductService.get(id)
//     }
//   },
//   created() {
//     this.getbyid(this.id);
//   },
    data(){
        return{
            products:[],
            searchText: "",
            activeIndex: -1,
            a: 0,
            admin : localStorage.getItem('admin'),
            token : localStorage.getItem('token'),
            name : localStorage.getItem('name'),
            username : localStorage.getItem('username'),
        }
    },
    async created(){
       this.products = await productService.getAll();
    },
//    components: {
//         InputSearch,
//         ListSearchVue 
//     },
    // watch:{
    //     searchText(){
    //         this.activeIndex = -1;
    //     }
    // },
    methods:{
    //     sreach(){
    //         if(this.searchText != ""){
    //              this.a=1;
    //         }else  this.a=0;
    //     },
    //     refresh() {
    //         this.a = 0;
    //     },
        async Logout(){
        localStorage.clear();
        // authService.logout()
        this.$router.push({
            name: 'home',
        })
        this.$router.go(0)

    // },
    //     reload(){

        }



    },
    // computed:{
    //     productStrings() {
    //         return this.products.map((product) => {
    //             const {name} = product;
    //             return [name].join("");
    //         });
    //     },
    // // Trả về các product có chứa thông tin cần tìm kiếm.
    //     filteredProducts() {
    //         if (!this.searchText) return this.products;
    //             return this.products.filter((_product, index) =>
    //             this.productStrings[index].includes(this.searchText)
    //         );
    //     },
    //     activeProduct() {
    //         if (this.activeIndex < 0) return null;
    //             return this.filteredProducts[this.activeIndex];
    //     },
    //     filteredProductsCount() {
    //         return this.filteredProducts.length;
    //     },

    // },
    // created(){
    //     this.name=this.$route.params.name

    // },

}


</script>
<template>
    <nav class="navbar navbar-light shadow-sm" style="background-color: #ff6b6b;">
        <p class="text-header text-white"><i class="fa-solid fa-envelope p-2"></i>nnshop@gmail.com&emsp;&emsp; <i class="fa-solid fa-phone p-2"></i>hostline: 0123456789</p>
        <div class="nav link">
            <!-- <li class="nav-item">
                <router-link :to="{name: 'about'}">
                    <a class="nav-link text-white" href="#">Giới thiệu </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'contact'}">
                    <a class="nav-link text-white" href="#">Liên hệ </a>
                </router-link>
            </li>
            <li class="nav-item ">
                <router-link :to="{name:'register'}">
                    <a class="nav-link text-white" href="/register">Đăng ký</a>
                </router-link>
            </li> -->
            <li class="nav-item ">
                <router-link :to="{name:'login'}">
                        <a class="nav-link text-white" v-if="!token">Đăng nhập</a>
                </router-link>
            </li>
            <li class="nav-item">
                <div class="dropdown dropleft">
                    <button class="btn  text-white" type="button" data-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-user"></i>
                    </button>
                    <div class="dropdown-menu">

                        <router-link :to="{name: 'usermanager'}">
                            <a class="dropdown-item" href="#">Xin chào: <p>{{username}}</p></a>
                        </router-link>
                        <!-- <router-link :to="{name: 'CartUserState'}">
                            <a class="dropdown-item" href="#">Đơn hàng của tôi</a>
                        </router-link> -->
                        <!-- <router-link :to="{name: 'contactUser'}">
                            <a class="dropdown-item" href="#">Liên hệ của tôi</a>
                        </router-link> -->

                        <!-- <router-link :to="{name: 'statistical'}" >
                            <a class="dropdown-item" href="#"  v-if="admin === 'Admin'">Quản trị</a>
                        </router-link>
                        <router-link :to="{name: 'statisticalview'}">
                            <a class="dropdown-item" href="#" v-if="admin === 'Admin'">Thống kê</a>
                        </router-link> -->
                        <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#"  @click="Logout">Đăng xuất</a>
                    </div>
                </div>
            </li>
        </div>
        <!-- <router-link :to="{ name: 'home' }" class="nav-link">
            Danh bạ
            <i class="fas fa-address-book"></i>
        </router-link> -->
    </nav>
    <!-- <div class="navigation shadow-sm p-3 mb-5 bg-white rounded">
        <div class=" d-flex justify-content-around">
            <a href="/" class="logo d-none d-sm-flex"> <img src="../assets/logo.png" alt="logo" style="height: 100px; width:100px; margin-left: 250%;"> </a>
            <InputSearch v-model="searchText" class="search" @keyup="sreach" />
            <ListSearchVue 
                v-if="filteredProductsCount>0 && a==1"
                :products = "filteredProducts"
                v-model:activeIndex="activeIndex"
                @click="refresh()"
            ></ListSearchVue>
        </div>
        
        <ul class="nav justify-content-center link">
            <li class="nav-item">
                <router-link  :to="{name: 'home'}">
                    <a class="nav-link" href="#">Trang chủ</a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'about'}">
                    <a class="nav-link" href="#">Giới thiệu</a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name:  'productclub'}">
                    <a class="nav-link" href="#">Áo câu lạc bộ</a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name : 'productteam'}">
                    <a class="nav-link" href="#">Áo đội tuyển</a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'promotion'}">
                    <a class="nav-link" href="#">Khuyến mãi</a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'CartUser'}">
                    <a class="nav-link" href="#"><i class="fa-solid fa-cart-shopping pl-2"></i> Giỏ hàng</a>
                </router-link>

            </li>
        </ul>
    </div> -->
</template>

<style scoped>
    @import "../assets/style.css";
    .text-header {
        font-size: 20px;
        margin-left: 250px;
    }
    .navigation {
        font-weight: 500;
    }
</style>
