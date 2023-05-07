<script>
    import PromotionService from "../services/promotion.service"
    export default {
        data() {
            return {
                promotions: [],
            }
        },
        async created(){
            this.promotions = await PromotionService.getAll();
            // this.$alert("Hello Vue Simple Alert.");
        }
};
</script>
<style>
    .show-detail {
        background-color: #54a0ff;
        border-radius: 10px;
        border-color: white;
    }
    .shopping-card {
        font-size: 30px;
        margin-left: 10px;
        color: red;
    }
    .link{
      text-decoration: none;
    }
</style>
<template>
    <div class="card mb-3" style="max-width: 700px;" 
        v-for="(promotion, index) in promotions"
        :key="promotion._id"
        :class="{ active: index === activeIndex }">
        <router-link :to="{name: 'promotiondetail', params: {id: promotion._id}}" style="text-decoration: none; color: black;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img :src="'http://localhost:3000/openFile/open?imageUrl='+promotion.imageUrl" alt="..." style="width: 100%; height: 90%; padding: 10px">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{promotion.name}}</h5>
                <p class="card-text">Thời Gian Bắt Đầu: {{promotion.start}}</p>
                <p class="card-text">Thời Gian Kết Thúc: {{promotion.end}}</p>
                <p class="card-text">Thể lệ: {{promotion.description}}</p>
              </div>
            </div>
          </div>
        </router-link>  

</div>
</template>