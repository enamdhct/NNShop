const {Contact} = require("../models/model");

const contactController = {
    addContact: async(req, res) => {
        try {
            let link_image = req.file.filename;
            req.body.imageUrl = link_image;
            const newContact = new Contact(req.body);
            const savedContact = await newContact.save();
            res.status(200).json(savedContact);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getAllContact: async(req, res) => {
        try {
            const allContact = await Contact.find();
            res.status(200).json(allContact);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getContact: async(req, res) => {
        try {
            const contact = await Contact.findById(req.params.id);
            res.status(200).json(contact);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateContact: async(req, res) => {
        try {
            const contact = await Contact.findById(req.params.id);
            await contact.updateOne({$set : req.body});
            res.status(200).json("Updated succesfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteContact: async (req, res) => {
        try {
            // await User.updateOne(
            //     {account: req.params.id}, 
            //     {$pull: {account: req.params.id}}
            // );
            await Contact.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = contactController;