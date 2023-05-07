<template>
    <div class="form shadow-lg mb-4">
      <h3 class="text-center mt-4">Bạn Gặp Vấn Đề Gì</h3>
      <form
        v-on:submit="AddContact"
        class="form-item"
        enctype="multipart/form-data"
      >
        <div class="form-group">
          <div class="row mt-4">
            <label class="col-sm-2 col-form-label">Vấn Đề</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="contact.problem" />
            </div>
          </div>
          <div class="row mt-4">
            <label class="col-sm-2 col-form-label">Thời Gian Xãy Ra</label>
            <div class="col-sm-10">
              <input type="date" class="form-control" v-model="contact.time" />
            </div>
          </div>
          <div class="row mt-4">
            <label class="col-sm-2 col-form-label">Mô Tả</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                v-model="contact.description"
              />
            </div>
          </div>
          <div class="row mt-4">
            <label class="col-sm-2 col-form-label">Note</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="contact.note" />
            </div>
          </div>
          <!-- <div class="row mt-4">
            <label class="col-sm-2 col-form-label">Minh họa</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                v-model="contact.imageUrl"
              />
            </div>
          </div> -->
          <div class="row mt-4">
            <label class="col-sm-2 col-form-label">Minh Họa</label>
            <div class="col-sm-10">
              <input type="file" @change="previewFiles" multiple />
            </div>
          </div>
          <button class="btn btn-primary mt-4">Gửi</button>
          <router-link :to="{ name: 'home' }">
            <button type="button" class="btn btn-secondary ml-4 mt-4">
              Quay lại
            </button>
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
  .form-item {
    padding: 10px;
  }
  </style>
  <script>
  import contactService from "../services/contact.service";
  import axios from "axios";
  
  export default {
    data() {
      return {
        contact: null,
        _id: localStorage.getItem("_id"),
      };
    },
  
    methods: {
      async AddContact() {
        try {
          console.log(this.contact.imageUrl);
          const response = await axios({
            method: "post",
            url: "http://localhost:3000/api/contacts",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            data: {
              userId: this._id,
              problem: this.contact.problem,
              time: this.contact.time,
              description: this.contact.description,
              note: this.contact.note,
              state: "chờ xữ lý",
              imageUrl: this.contact.imageUrl,
            },
          });
          // const response = await contactService.create({
          //   userId: this._id,
          //   problem: this.contact.problem,
          //   time: this.contact.time,
          //   description: this.contact.description,
          //   note: this.contact.note,
          //   state: "chờ xữ lý",
          //   imageUrl: this.contact.imageUrl,
          // });
          console.log(response);
        } catch (e) {
          console.log(e);
        }
      },
      previewFiles(event) {
        console.log(event.target.files[0]);
        this.contact.imageUrl = event.target.files[0];
      },
    },
    created() {
      this.contact = {};
      this._id;
    },
  };
  </script>
  