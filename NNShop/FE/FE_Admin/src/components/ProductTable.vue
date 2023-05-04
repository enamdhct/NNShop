
<script>
    import ProductService from "../services/product.service";
    import SearchTable from "@/components/SearchTable.vue";
    export default{
        data() {
            return {
                products: [],
                searchText: "",
                activeIndex: -1,
            }
        },
        components: {
            SearchTable
        },
        watch: {
            searchText() {
                this.activeIndex = -1;
            }
        },
        methods: {
            async DeleteProduct(id){
               await ProductService.delete(id);
               this.products = await ProductService.getAll();
               alert("Đã xóa thành công");
            },
        },
        computed: {
            productStrings() {
                return this.products.map((product) => {
                    const { name } = product;
                    return [name].join("");
                });
            },
            // Trả về các product có chứa thông tin cần tìm kiếm.
            filteredProducts() {
                if (!this.searchText) return this.products;
                return this.products.filter((_product, index) =>
                    this.productStrings[index].includes(this.searchText)
                );
            },
            activeProduct() {
                if (this.activeIndex < 0) return null;
                return this.filteredProducts[this.activeIndex];
            },
            filteredProductsCount() {
                return this.filteredProducts.length;
            },
        },
        async created(){
            this.products = await ProductService.getAll();
            // this.$alert("Hello Vue Simple Alert.");
        }
    };
</script>
<!-- <style>
@import 'bootstrap';
@import 'datatables.net-bs5';
</style> -->
<template>
    <div>
        <div class="row col-12">
            <router-link :to="{ name: 'AddProduct', }" class="col-3">
                <button type="button" class="btn btn-primary">Thêm mới</button>
            </router-link>
            <div class="col-5"></div>
            <SearchTable class="col-4" v-model="searchText" />
        </div>
        <table class="table table-striped mt-2" id="table_id" >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Mã sản phẩm</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Loại sản phẩm</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Hiệu chỉnh</th>
                </tr>
            </thead>
            <tbody  v-if="filteredProductsCount > 0"       
            v-for="(product, index) in filteredProducts"
            :key="product._id"
            :class="{ active: index === activeIndex }"
            >
                <tr id="rtable">
                    <th scope="row"></th>
                    <td>{{product._id}}</td>
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.genres}}</td>
                    <td >{{product.amount}}</td>
                    <td>
                        <router-link 
                            :to="{
                                name: 'EditProduct',
                                params:{id : product._id },
                             }">
                            <button type="button" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>
                        </router-link>
                        <button type="button" class="btn btn-danger ml-3" @click="DeleteProduct(product._id)"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else class="text-center">
                Không tìm thấy khuyến mãi
            </tbody>
        </table>
    </div>
</template>