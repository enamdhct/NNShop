<script>
import ProductService from '@/services/product.service'
export default {
  // name: 'productdetail',
  props:{
    id:{ type: String, required: true },
  },
  data () {
    return {
      product:{},
      _id : localStorage.getItem('_id'),
      admin : localStorage.getItem('admin'),
    };
  },
  methods: {
    async getbyid(id) {
      this.product = await ProductService.get(id)
    }
  },
  updated() {
    this.getbyid(this.id);
  },
  created() {
    this.getbyid(this.id);
    console.log(this.product.imageUrl)
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
    font-size: 20px;
  }
  .icon {
    color: yellowgreen;
  }
</style>
<template>
    <div class="container">
        <div class="row" v-if="product">
          <div class="col-sm-4">
            <img :src="'http://localhost:3000/openFile/open?imageUrl='+product.imageUrl" class="card-img-top" alt="...">
          </div>
          <div class="col-sm-8">
            <div class="ml-5">
              <p class="title-name">{{product.name}}</p>
              <p class="content">Biên chế: {{product.club}}</p>
              <p class="content">Giá bán: {{product.price}}</p>
              <p class="content">Số lượng còn: {{product.amount}}</p>
              <!-- <router-link :to="{ name: 'AddOrder', params: {name: product.name}}"> -->
                <a :href="('../CreateOrder/'+product.name+'/'+product.price+'/'+product.amount+'/'+product._id)" v-if="admin===''">    <button type="button" class="btn btn-danger shopping">Đặt hàng</button></a>
      <button type="button" class="btn btn-danger shopping" v-else>Đặt hàng</button>
              <!-- </router-link> -->

            </div>
          </div>
        </div>
        <div class="mt-4">
          <h3>Mô TẢ SẢN PHẨM</h3>
            <h4> <i class="fa-solid fa-comment icon"></i> Mô tả</h4>
            <p class="text-detail">- Áo thể thao sử dụng chất vải cotton 65/35 co giãn 4 chiều. Là loại vải có đặc điểm mềm mịn, 
              độ co giãn cao, khả năng thấm hút tốt và được dệt hoàn toàn từ sợi cây bông tự nhiên. Chất vải cotton cực kỳ thân thiện với làn da.</p>
              <p class="text-detail">- Quần áo đá bóng thiết chuẩn mẫu của các CLB sẽ ra mắt 2022 - 2023,
                hoa văn bộ đồ đá banh in phun kỹ thuật số sắc nét, không bong tróc, Đường may gia công tỉ mỉ, chi tiết nhất</p>
            <h4>
              <i class="fa-solid fa-comment icon"></i> Bảo quản
            </h4>
            <ul class="text-detail">
              <li>Không dùng chất tẩy</li>
              <li>Lật mặt trái trước khi giặt để màu sắc được luôn như mới</li>
              <li>Ủi mặt trái</li>
              <li>Giặt ở nhiệt độ bình thường</li>
            </ul>
            <h4>
              <i class="fa-solid fa-comment icon"></i> Quy đổi kích thước
            </h4>
            <ul class="text-detail">
              <li> Size S: 38-46kg</li>
              <li>Size M : 47-55kg</li>
              <li>Size L : 55-65kg</li>
              <li>Size XL : 65-76kg</li>
              <li>Size XXL > 77kg</li>
            </ul>
        </div>
    </div>
</template>
