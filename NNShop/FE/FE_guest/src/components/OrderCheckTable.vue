<script>
import CartService from "../services/cart.service";
import SearchTable from "@/components/SearchTable.vue";
export default {
    data() {
        return {
            carts: [],
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
        async DeleteCart(id) {
            await CartService.delete(id);
            this.carts = await CartService.getAll();
        },
        async Confirm(id){
            await CartService.update(id,
                    {
                        state: "đang giao"
                })
        },
        async Refuse(id){
            await CartService.update(id,
                    {
                        state: "từ chối"
                })
        }   
    },
    computed: {
        cartStrings() {
            return this.carts.map((cart) => {
                const { productName, _id } = cart;
                return [productName, _id].join("");
            });
        },
        // Trả về các product có chứa thông tin cần tìm kiếm.
        filteredCarts() {
            if (!this.searchText) return this.carts;
            return this.carts.filter((_cart, index) =>
                this.cartStrings[index].includes(this.searchText)
            );
        },
        activeCart() {
            if (this.activeIndex < 0) return null;
            return this.filteredCarts[this.activeIndex];
        },
        filteredCartsCount() {
            return this.filteredCarts.length;
        },
    },
    async created() {
        this.carts = await CartService.getAll();
    }
};
</script>

<style>

</style>
<template>
    <div class="row col-12">
        <div class="row col-12">
            <router-link :to="{ name: 'AddCart'}" class="col-3">
                <button type="button" class="btn btn-primary">Thêm Mới</button>
            </router-link>
            <div class="col-5"></div>
            <SearchTable class="col-4" v-model="searchText" />
        </div>


        <table class="table table-striped mt-2" id="table_id" >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Mã Đơn Hàng</th>
                    <th scope="col">Tên Sản Phẩm</th>
                    <th scope="col">Kích Thước</th>

                    <th scope="col">Trạng Thái</th>
                    <th scope="col">Số Áo</th>
                </tr>
            </thead>
            <tbody v-if="filteredCartsCount > 0"  v-for="(cart, index) in  carts.filter(cart => cart.state === 'đang giao')" :key="cart._id" :class="{ active: index === activeIndex }">
                <tr id="rtable">
                    <th scope="row"></th>    
                    <td>{{ cart._id }}</td>               
                    <td>{{ cart.productName }}</td>
                    <td>{{ cart.size }}</td>
                    <td>{{ cart.state }}</td>
                    <td>{{ cart.number }}</td>
                    <!-- <td>
                        <button type="button" class="btn btn-success" @click="Confirm(cart._id)"><i class="fa-solid fa-check"></i></button>
                        <button type="button" class="btn btn-danger ml-3" @click="Refuse(cart._id)"><i class="fa-solid fa-xmark"></i></button>
                    </td>
                    <td>
                        <router-link :to="{
                            name: 'EditCart',
                            params: { id: cart._id },
                        }">
                            <button type="button" class="btn btn-warning"><i
                                    class="fa-solid fa-pen-to-square"></i></button>
                        </router-link>
                        <button type="button" class="btn btn-danger ml-3" @click="DeleteCart(cart._id)"><i
                                class="fa-solid fa-trash"></i></button>
                    </td> -->
                </tr>
            </tbody>
            <tbody v-else class="text-center">
                Không tìm thấy đơn hàng
            </tbody>
        </table>
    </div>
</template>