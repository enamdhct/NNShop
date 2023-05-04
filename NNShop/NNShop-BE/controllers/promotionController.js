const {Promotion} = require("../models/model");

const promotionController = {
    addPromotion: async(req, res) => {
        try {
            let link_image = req.file.filename;
            req.body.imageUrl = link_image;
            const newPromotion = new Promotion(req.body);
            const savedPromotion = await newPromotion.save();
            res.status(200).json(savedPromotion);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getAllPromotion: async(req, res) => {
        try {
            const allPromotion = await Promotion.find();
            res.status(200).json(allPromotion);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getPromotion: async(req, res) => {
        try {
            const promotion = await Promotion.findById(req.params.id);
            res.status(200).json(promotion);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updatePromotion: async(req, res) => {
        try {
            const promotion = await Promotion.findById(req.params.id);
            await promotion.updateOne({$set : req.body});
            res.status(200).json("Updated succesfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deletePromotion: async (req, res) => {
        try {
            // await User.updateOne(
            //     {account: req.params.id}, 
            //     {$pull: {account: req.params.id}}
            // );
            await Promotion.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = promotionController;