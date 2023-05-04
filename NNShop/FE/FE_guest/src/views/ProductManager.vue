<script>
// import ProductList from '../components/ProductList.vue'
import ProductService from "@/services/product.service";
import TableProduct from "../components/ProductTable.vue"
export default {
    components: {
        // ProductList,
        TableProduct
    },
    data() {
        return {
            products: [],
            activeIndex: -1,
        };
    },
    computed: {
        // productStrings() {
        //     return this.products.map((product) => {
        //         const { name, clb, number, namepl } = product;
        //         return [name, clb, number, namepl].join("");
        //     });
        // },
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
    methods: {
        async retrieveProducts() {
            try {
                this.products = await ProductService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveProducts();
            this.activeIndex = -1;
        },
        // async removeAllProducts() {
        //     if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
        //         try {
        //             await ProductService.deleteAll();
        //             this.refreshList();
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }
        // },
        // goToAddContact() {
        //     this.$router.push({ name: "product.add" });
        // },
    },
    mounted() {
        this.refreshList();
    },
};

</script>
<style scoped>
    @import "../assets/style.css";
</style>
<template>
    <div>
        <!-- <router-link :to="{name: 'manager'}">
            <i class="fa-solid fa-arrow-left back"></i>
        </router-link> -->
        <h2>Danh sách sản phẩm</h2>
        <div class="row">
            <TableProduct                 
                v-if="filteredProductsCount > 0"
                :products="filteredProducts"
                v-model:activeIndex="activeIndex">
            </TableProduct>
        </div>
    </div>
</template>