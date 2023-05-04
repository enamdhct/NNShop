
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        // require: true
    },
    imageUrl: {
        type: String,
        // require: true
    },
    genres: {
        type: String,
        // require: true
    },
    price: {
        type: String,
        // require: true
    },

    club: {
        type: String,
        // require: true
    },
    amount: {
        type: Number,
        min: [0, 'Het hang']
    },

})

const cartSchema = new mongoose.Schema({
    userId: { type: String},
    productId: {
        type: String
    },
    productName: {
        type: String,
    },
    size: {
        type: String,
        // require: true
    },
    namePlayer: {
        type: String,
    },
    number: {
        type: String,
    },
  
    description: {
        type: String,
    },
    state: {
        type: String,
    },
    sl: {
        type: Number,
    },
    productPrice: {
        type: String
    },
    userAddress: {
        type: String
    }

})



const promotionSchema = new mongoose.Schema({
    name: {
        type: String,
        // require: true,
    },
    discount: {
        type: String,
        // require: true,
    },
    start: {
        type: String,
        // require: true,
    },
    end: {
        type: String,
        // require: true,
    },
    description: {
        type: String,
    },
    imageUrl: { 
        type: String
    },
})
const contactSchema = new mongoose.Schema({
    userId: {
        type: String,

    },
    problem: {
        type: String,
  
    },
    time: {
        type: String,

    },
    description: {
        type: String,
    },
    note: { 
        type: String
    },
    state: { 
        type: String
    },
    imageUrl: { 
        type: String
    },
})



let Product = mongoose.model("Product", productSchema);
let Promotion = mongoose.model("Promotion", promotionSchema);
let Cart = mongoose.model("Cart", cartSchema);
let Contact = mongoose.model("Contact", contactSchema);
module.exports = {Product, Promotion, Cart, Contact};