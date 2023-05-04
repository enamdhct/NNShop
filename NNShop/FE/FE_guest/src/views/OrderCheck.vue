<script>
import CartService from "@/services/cart.service";
import OrderCheckTable from "../components/OrderCheckTable.vue"
export default {
    components: {
        OrderCheckTable
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
        <h2 class="mb-4">Danh sách đơn hàng đang giao</h2>
        <div class="row">
            <OrderCheckTable                 
                v-if="filteredcartsCount > 0 "
                :carts="filteredcarts"
                v-model:activeIndex="activeIndex">
            </OrderCheckTable>
        </div>
    </div>
</template>
<style scoped>
    @import "../assets/style.css";
</style>
