<script>
    export default {
        props: {
            product: { type: Object, required: true },
        },
    };
</script>
<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ product.name }}
        </div>
        <div class="p-1">
            <strong>CLB:</strong>
            {{ product.clb }}
        </div>
        <div class="p-1">
            <strong>Số Áo:</strong>
            {{ product.number }}
        </div>
        <div class="p-1">
            <strong>Tên Cầu Thủ:</strong>
            {{ product.namepl }}
        </div>
        <div class="p-1">
            <strong>Sản Phẩm Yêu thích:&nbsp;</strong>
            <i v-if="product.shopping" class="fas fa-check" ></i>
            <i v-else class="fas fa-times"></i>
        </div>
    </div>
</template>
