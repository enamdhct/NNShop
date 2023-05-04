<template>
    <div >
        <div class="container">
            <Slideshow />
            <div>
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                        <p class="tab">Áo thi đấu câu lạc bộ</p>
                    </a>
                </nav>
            </div>
            <div class="row">
                <ClubProductList
                    v-if="filteredProductsCount > 0"
                    :products="filteredProducts"
                    v-model:activeIndex="activeIndex"
                />
            </div>
        </div>
    </div>    
</template>
<script>
import ClubProductList from "@/components/ClubProductList.vue";
import Slideshow from "@/components/Slideshow.vue";
import ProductService from "@/services/product.service";
export default {
    components: {
        ClubProductList,
        Slideshow,
    },
    data() {
        return {
            products: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        productStrings() {
            return this.products.map((product) => {
                const { name, clb } = product;
                return [name, clb].join("");
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
    },
    mounted() {
        this.refreshList();
    },
};
</script>
<style scoped>
    .page {
    text-align: left;
    max-width: 750px;
    }
    .tab {
        color: white;
        font-size: 30px;
        margin-top: 50px;
        font-weight: 700;
        background-color: #312783;
        border-radius: 20px;
        padding: 5px 20px;
    }
</style>