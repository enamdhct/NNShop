<script>
    import CartService from '../services/cart.service'
    import ProductService from "@/services/product.service";
    export default {
        data(){
            return{
                product:[],
                _id : localStorage.getItem('_id'),
                admin : localStorage.getItem('admin'),
            }   
        },
    props: {
        products: { type: Array, require: true },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
        
        async AddtoCart(id){
            const product = await ProductService.get(id);

            await CartService.create({
                userId: this._id,
                productId: product._id,
                productName: product.name,
                productPrice: product.price,
                state: ""
            }        
        )
        }
    },
};
</script>
<style>
    .show-detail {
        background-color: #54a0ff;
        border-radius: 10px;
        border-color: white;
    }
    .shopping-card {
        font-size: 30px;
        margin-left: 10px;
        color: red;
    }
</style>
<template>
    <div class="card" style="margin:1% 1%; width: 23%;"
        v-for="(product, index) in products"
        :key="product._id"
        :class="{ active: index === activeIndex }"
        @click="updateActiveIndex(index)"
        >
        <div>
            <img :src="'http://localhost:3000/openFile/open?imageUrl='+product.imageUrl" class="card-img-top" alt="...">
            <!-- <img :src="product.imageUrl" class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">Câu lạc bộ: {{ product.club }}</p>
                <p class="card-text">Giá: {{ product.price}}</p>
                <p class="card-text">Số lượng: {{ product.amount}}</p>
                <router-link :to="{name: 'productdetail', params: {id: product._id}}">
                    <button class="show-detail text-white">Xem chi tiết sản phẩm</button>
                </router-link>                
                <i class="fa-solid fa-cart-plus shopping-card" type="button" @click="AddtoCart(product._id)" v-if="(admin==='')"></i>
                <i class="fa-solid fa-cart-plus shopping-card" type="button" v-else></i>
            </div>
        </div>
    </div>
</template>