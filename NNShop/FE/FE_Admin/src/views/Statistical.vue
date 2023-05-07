<template>
    <h1>Biểu Đồ Thống Kê</h1>
    <!-- <button @click="fetchData()">hihi</button> -->
    <div class="chart mb-4">
        <h3>Thống Kê Số Sản Phẩm Trong Kho</h3>
        <canvas id="myChart1"></canvas>
    </div>
    <br>
    <div class="mt-4 chart">
        <h3>Thống Kê Số Đơn Hàng</h3>
        <canvas id="myChart2"></canvas>
    </div>
</template>
<style scoped>
    @import "../assets/style.css";
</style>
<script>
    import Chart from 'chart.js/auto';
    import productService from '../services/product.service'
    import axios from "axios";

    export default {
        data() {
            return {
                label:[],
                products: [],
                sl: [],

            }
        },
        methods: {
            async getAllProduct(){
                this.products = await productService.getAll();

            },
            async getlable(){
                const response = await axios({
                    method: "get",
                    url: "http://localhost:3000/api/products/",
                });
                console.log(response.data.length);
                for (let i=0; i<response.data.length;i++){
                    console.log(response.data[i].name);
                    this.label.push(response.data[i].name)
                    // this.sl.push(response.data[i].amount)
                    this.sl.push(response.data[i].amount)
                }
            },
            // async getdata(){
            //     const response = await axios({
            //         method: "get",
            //         url: "http://localhost:3000/api/products/",
            //     });
            //     console.log(response.data.length);
            //     for (let i=0; i<response.data.length;i++){
            //         // console.log(response.data[i].name);
            //         // this.label.push(response.data[i].name)
            //         this.sl.push(response.data[i].amount)
            //     }
            // }

        },
        async mounted() {
           
            //  this.countProduct();
            const ctx = document.getElementById('myChart1');
            const ctx1 = document.getElementById('myChart2');

                await this.getlable();
            new Chart(ctx, {
                type: 'bar',
                data: {
                    // labels: ['Áo đội tuyển', 'Áo câu lạc bộ', 'Áo trơn'],
                    labels: this.label,
                    // labels: data.map(row => row.year),
                    datasets: [{
                        label: 'Áo đội tuyển',
                        data: this.sl,
                        // data: data.map(row => row.count),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(255, 99, 132)',
                        ],
                        borderWidth: 1
                    }]
                }   
            });

            new Chart(ctx1, {
                type: 'line',
                data: {
                    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
                    datasets: [{
                        label: 'Số lượng',
                        data: [65, 59, 80, 81, 56, 55, 40,34,67,87,98,34],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                }   
            });
        },
        async created() {
            this.products = await productService.getAll();
            this.getAllProduct();
           
        },
        // mounted(){
        //     this.label = ['Áo đội tuyển', 'Áo câu lạc bộ', 'Áo trơn'];
        // }
        
    }
</script>