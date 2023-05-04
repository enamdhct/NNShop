<script>
import PromotionService from '@/services/promotion.service'
export default {
  // name: 'productdetail',
  props:{
    id:{ type: String, required: true },
  },
  data () {
    return {
      promotion:{},
      _id : localStorage.getItem('_id'),
      admin : localStorage.getItem('admin'),
    };
  },
  methods: {
    async getbyid(id) {
      this.promotion = await PromotionService.get(id)
    }
  },
  updated() {
    this.getbyid(this.id);
  },
  created() {
    this.getbyid(this.id);
  },
}
</script>
<style>
  .title-name{
    font-size: 40px;
    font-weight: 550;
    color: rebeccapurple
  }
  .content {
    font-size: 25px;
  }
  .shopping {
    width: 200px;
    height: 50px;
    font-size: 20px;
  }
  .text-detail{
    font-size: 18px;
  }
  .icon {
    color: yellowgreen;
  }
</style>
<template>
    <div class="container">
        <div class="row" v-if="promotion">
            <div class="col-sm-8">
                <h3 class="title-name"> {{promotion.name}}</h3>
                <p class="text-detail">Khi khách hàng mua hàng trong thời gian khuyến mãi sẽ nhận được những ưu đãi vô cùng hấp dẫn từ phía cửa hàng. 
                     Tham khảo chi tiết tại bài viết dưới đây!</p>
                <img :src="promotion.imageUrl" alt="..." style="width: 100%; height: 50%; padding: 10px">
                <p class="text-detail">Nhanh tay đặt cho mình những chiếc áo ưng ý để hòa cùng không khí bóng đá bùng nổ này.</p>
                <p class="text-detail"><b>Nội dung khuyến mãi</b></p>
                <p class="text-detail">Ưu đãi: {{promotion.discount}}</p>
                <p class="text-detail">Thời gian bắt đầu: {{promotion.start}}</p>
                <p class="text-detail">Thời gian kết thúc: {{promotion.end}}</p>
                <p class="text-detail mb-4">Thể lệ: {{promotion.description}}</p>
            </div>
            <div class="col-sm-4">
                <h4 style="font-weight: 700; font-family:'Times New Roman', Times, serif; font-size:20px;;">GIỚI THIỆU VỀ NN SPORT</h4> <br>
                <p>NN Sport là một trong những thương hiệu cung cấp quần áo bóng đá cao cấp tại Cần Thơ.</p>
                <P>Với hệ thống nhà xưởng được đầu tư bài bản chúng tôi luôn đem đến cho Khách Hàng sự hài lòng về chất lượng sản phẩm và thời gian may nhanh nhất thị trường.</P> <br>

                <h4 style="font-weight:700; font-family:'Times New Roman', Times, serif; font-size: 20px;">TIN TỨC MỚI</h4>
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush" style="text-decoration:none;">
                        <li class="list-group-item"><a href=https://obitosport.com/new-balance-mang-den-lan-gio-moi-cho-ao-bong-da-athletic-2023> New-balance mang đến làn gió mới cho áo bóng đá Athletic 2023  </a></li>
                        <li class="list-group-item"><a href=https://obitosport.com/thay-the-puma-castore-dong-hanh-cung-ao-bong-da-almeria-2023> Thay thế Puma Castore đồng hành cùng áo bóng đá Almeria 2023  </a></li>
                        <li class="list-group-item"><a href=https://obitosport.com/jogarbola-dong-hanh-cung-ao-bong-da-clb-ha-noi-2023-tai-v-league> Jogarbola đồng hành cùng áo bóng đá CLB Hà Nội 2023 tại V-League  </a></li>
                        <li class="list-group-item"><a href=https://aobongda.net/tuyen-tap-ao-dau-cua-clb-real-madrid-trong-cac-mua-giai-gan-day> Tuyển tập bộ áo đấu CLB Real Madrid trong các mùa giải gần đây </a></li>
                        <li class="list-group-item"><a href=https://aobongda.net/tuyen-tap-ao-dau-cua-clb-arsenal-trong-cac-mua-giai-gan-day> Tuyển tập bộ áo đấu CLB Arsenal trong các mùa giải gần đây  </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
