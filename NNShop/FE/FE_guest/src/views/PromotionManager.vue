<script>

import PromotionService from "@/services/promotion.service";
import PromotionTable from "../components/PromotionTable.vue"
export default {
    components: {
        PromotionTable
    },
    data() {
        return {
            promotions: [],
            activeIndex: -1,
        };
    },
    computed: {
        // accountStrings() {
        //     return this.accounts.map((account) => {
        //         const { name, clb, number, namepl } = account;
        //         return [name, clb, number, namepl].join("");
        //     });
        // },
    // Trả về các account có chứa thông tin cần tìm kiếm.
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
    methods: {
        async retrievePromotions() {
            try {
                this.promotions = await PromotionService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrievePromotions();
            this.activeIndex = -1;
        },

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
        <h2>Danh sách khuyến mãi</h2>
        <div class="row">
            <PromotionTable                 
                v-if="filteredPromotionsCount > 0"
                :promotions="filteredPromotions"
                v-model:activeIndex="activeIndex">
            </PromotionTable>
        </div>
    </div>
</template>