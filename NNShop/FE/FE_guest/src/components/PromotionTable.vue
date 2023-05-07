<script>
    import PromotionService from "../services/promotion.service"
    import SearchTable from "@/components/SearchTable.vue";
    export default {
        data() {
            return {
                promotions: [],
                searchText: "",
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
            
            async DeletePromotion(id){
               await PromotionService.delete(id);
               this.promotions = await PromotionService.getAll();
            },
        },
        computed: {
            promotionStrings() {
                return this.promotions.map((promotion) => {
                    const { name } = promotion;
                    return [name].join("");
                });
            },
            // Trả về các product có chứa thông tin cần tìm kiếm.
            filteredPromotions() {
                if (!this.searchText) return this.promotions;
                return this.promotions.filter((_promotion, index) =>
                    this.promotionStrings[index].includes(this.searchText)
                );
            },
            activePromotion() {
                if (this.activeIndex < 0) return null;
                return this.filteredPromotions[this.activeIndex];
            },
            filteredPromotionsCount() {
                return this.filteredPromotions.length;
            },
        },
        async created(){
            this.promotions = await PromotionService.getAll();
        }
    };
</script>

<style>

</style>
<template>
    <div>
        <div class="row col-12">
            <router-link :to="{ name: 'AddPromotion', }" class="col-3">
                <button type="button" class="btn btn-primary">Thêm Mới</button>
            </router-link>
            <div class="col-5"></div>
            <SearchTable class="col-4" v-model="searchText" />
        </div>
        
        <table class="table table-striped mt-2" id="table_id" >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên Khuyến Mãi</th>
                    <th scope="col">Ưu Đãi</th>
                    <th scope="col">Thời Gian Bắt Đầu</th>
                    <th scope="col">Thời Gian Kết Thúc</th>
                    <th scope="col">Hiệu Chỉnh</th>
                </tr>
            </thead>
            <tbody     v-if="filteredPromotionsCount > 0"    
            v-for="(promotion, index) in filteredPromotions"
            :key="promotion._id"
            :class="{ active: index === activeIndex }"
            >
                <tr id="rtable">
                    <th scope="row"></th>
                    <td>{{promotion.name}}</td>
                    <td>{{promotion.discount}}</td>
                    <td>{{promotion.start}}</td>
                    <td>{{promotion.end}}</td>
                    <td>
                        <router-link 
                            :to="{
                                name: 'EditPromotion',
                                params:{id : promotion._id },
                             }">
                            <button type="button" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>
                        </router-link>
                        <button type="button" class="btn btn-danger ml-3" @click="DeletePromotion(promotion._id)"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else class="text-center">
                Không tìm thấy khuyến mãi
            </tbody>
        </table>
    </div>
</template>