<template>
    <div class="form shadow-lg mb-4">
        <h3 class="text-center mt-4">Bạn gặp vấn đề gì</h3>
        <form @submit="AddContact(contact)" class="form-item">
            <div class="form-group" >
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Vấn đề</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="contact.problem">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Thời gian xãy ra</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="contact.time">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Mô tả</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="contact.description">
                    </div>
                </div>
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Note</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model="contact.note">
                    </div>
                </div> 
                <div class="row mt-4">
                    <label class="col-sm-2 col-form-label">Minh họa</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="contact.imageUrl" >

                    </div>
                </div> 
                <button class="btn btn-primary mt-4">Gửi</button>
                <router-link :to="{name: 'home'}"> 
                    <button type="button" class="btn btn-secondary ml-4 mt-4">Quay lại</button>
                </router-link>
            </div>
        </form>
    </div>
</template>
<style>
@import "../assets/style.css";
.form {
    margin: 0 auto;
    width: 700px;
}
.form-item{
    padding: 10px;
}
</style>
<script>
import contactService from '../services/contact.service';
    export default {
        data(){
            return{
                contact: null,
                _id : localStorage.getItem('_id'),
            }
        },

        methods: {

            async AddContact(data){
                 await contactService.create(
                    {
                        userId: this._id, 
                        problem: this.contact.problem,
                        time: this.contact.time,
                        description: this.contact.description,
                        note: this.contact.note,
                        imageUrl: this.contact.imageUrl,
                        state: 'chờ xữ lý',

                    })

            }
        },
        created(){
            this.contact = {};
            this._id;

        }
    }

</script>
    