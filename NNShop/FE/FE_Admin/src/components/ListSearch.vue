<template>
    <ul class="list-group " style="position:  absolute; margin-top: 50px; width: 400px; z-index: 2;">
        <div v-for="(product,index) in products" 
                :key="product._id"
                :class="{ active: index === activeIndex }">
                <router-link :to=" { name:'productdetail',
                            params:{id: product._id }, searchText: ''}">

             
            <li class="list-group-item">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="https://media.vov.vn/sites/default/files/styles/large/public/2021-08/man_city_0.jpg" alt="..." style="width:100px">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{product.name}}</h5>
                                <p class="card-text">Giá: {{product.price}}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </li> 
          </router-link>
        </div>
    </ul>
</template>
<style>
@import '../assets/style.css';
</style>
<script>
    export default{
        props: {
            products: {type: Array, default: []},
            activeIndex: {type: Number,default: -1},
        },
    }
</script>