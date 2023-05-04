<script>
    export default {
    props: {
        products: { type: Array, default: {} },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
        async AddtoCart(id){
            const product = await ProductService.get(id);

            await AccountService.create({
                userId: this._id,
                productId: product._id,
                productName: product.name,
                price: product.price,
                state: ''
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
        margin-left: 5px;
        color: red;
    }
</style>
<template>
    <div  style="margin:1% 1%; width: 23%; float: left;"
        v-for="(product, index) in products.filter(product => product.genres === 'clb')"
        :key="product._id"
        :class="{ active: index === activeIndex }"
        @click="updateActiveIndex(index)"
        >
        <div class="card d-inline">
            <img :src="'http://localhost:3000/openFile/open?imageUrl='+product.imageUrl" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">Câu lạc bộ: {{ product.club }}</p>
                <p class="card-text">Giá: {{ product.price}}</p>
                <p class="card-text">Số lượng: {{ product.amount}}</p>
                <router-link :to="{name: 'productdetail', params: {id: product._id}}">
                    <button class="show-detail text-white">Xem chi tiết sản phẩm</button>
                </router-link>
                <i class="fa-solid fa-cart-plus shopping-card" type="button" @click="AddtoCart(product._id)"></i>
            </div>
        </div>
    </div>
</template>