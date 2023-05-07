<script>
import CartService from "@/services/cart.service";
import OrderTable from "../components/OrderTable.vue"
export default {
    components: {
        OrderTable
    },
    data() {
        return {
            carts: [],
            activeIndex: -1,
        };
    },
    computed: {
    // Trả về các cart có chứa thông tin cần tìm kiếm.
        filteredcarts() {
            if (!this.searchText) return this.carts;
                return this.carts.filter((_cart, index) =>
                    this.cartStrings[index].includes(this.searchText)

                );
        },
        activecart() {
            if (this.activeIndex < 0) return null;
            return this.filteredcarts[this.activeIndex];
        },
        filteredcartsCount() {
            return this.filteredcarts.length;
        },
    },
    methods: {
        async retrievecarts() {
            try {
                this.carts = await CartService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrievecarts();
            this.activeIndex = -1;
        },
    },
    mounted() {
        this.refreshList();
    },
};

</script>
<template>
    <div>
        <h2 class="mb-4">Danh Sách Đơn Hàng</h2>
        <div class="row">
            <OrderTable                 
                v-if="filteredcartsCount > 0"
                :carts="filteredcarts"
                v-model:activeIndex="activeIndex">
            </OrderTable>
        </div>
    </div>
</template>
<style scoped>
    @import "../assets/style.css";
</style>
