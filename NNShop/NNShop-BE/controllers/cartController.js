const { response } = require("express");
const {Cart} = require("../models/model");

const cartController = {
    
    addCart: async(req, res) => {
        try {
            const newCart = new Cart(req.body);
            const savedCart = await newCart.save();
            res.status(200).json(savedCart);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAllCart: async(req, res) => {
        try {
            const allCart = await Cart.find()
            // const allProduct = await Product.findById(req.params.id).populate("store");
            res.status(200).json(allCart);
            // res.status(200).json(allProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getCart: async(req, res) => {
        try {
            const cart = await Cart.findById(req.params.id)
            // const product = await Product.findById(req.params.id).populate("store");
            res.status(200).json(cart);
            // res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateCart: async(req, res) => {
        try {
            const cart = await Cart.findById(req.params.id);
            await cart.updateOne({$set : req.body});
            // res.status(200).json("Updated succesfully!");
            res.status(200).json(cart);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteCart: async (req, res) => {
        try {
            // await User.updateOne(
            //     {cart: req.params.id}, 
            //     {$pull: {cart: req.params.id}}
            // );
            await Cart.findByIdAndDelete(req.params.id);
            // await User.deleteOne({cart: req.params.id});
            res.status(200).json("Deleted successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    }
};


module.exports = cartController;