const {Product} = require("../models/model");
// var multer = require('multer');
// var upload = multer({ dest: 'uploads/' });

const productController = {
    addProduct: async(req, res) => {
        try {
            let link_image = req.file.filename;
            req.body.imageUrl = link_image;
            const newProduct = new Product(req.body);
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getAllProduct: async(req, res) => {
        try {
            const allProduct = await Product.find();
            res.status(200).json(allProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getProduct: async(req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getImage: async(req, res) => {
        try {
            const allProduct = await Product.find();
            res.status(200).json(allProduct.imageUrl);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateProduct: async(req, res) => {
        try {
            // let link_image = req.file.filename;
            // req.body.imageUrl = link_image;
            const product = await Product.findById(req.params.id);
            await product.updateOne({$set : req.body});
            res.status(200).json("Updated succesfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteProduct: async (req, res) => {
        try {

            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = productController;