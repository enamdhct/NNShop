
<script>
import CartUser from "@/components/CartUser.vue";
import CartService from "@/services/cart.service";
export default {
    components: {
        CartUser,
    },
    data() {
        return {
            cart: [],
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
    // Trả về các cart có chứa thông tin cần tìm kiếm.
        filteredCarts() {
            if (!this.searchText) return this.carts;
                return this.carts.filter((_cart, index) =>
                    this.cartStrings[index].includes(this.searchText)

                );
        },
        activecart() {
            if (this.activeIndex < 0) return null;
            return this.filteredcarts[this.activeIndex];
        },
        filteredCartsCount() {
            return this.filteredCarts.length;
        },
    },
    methods: {
        async retrieveCarts() {
            try {
                this.carts = await CartService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveCarts();
            this.activeIndex = -1;
        },
        

    },
    mounted() {
        this.refreshList();
    },
};
</script>
<template>
    <div class="row">
        <CartUser />
    </div>   
</template>
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