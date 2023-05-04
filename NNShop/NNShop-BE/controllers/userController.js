const User = require("../models/User");

const userController = {
    addUser: async(req, res) => {
        try {
            const newUser = new User(req.body);
            const SavedUser = await newUser.save();
            res.status(200).json(SavedUser);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    getAllUser: async(req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getUser: async(req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    updateUser: async(req, res) => {
        try {
            const user = await User.findById(req.params.id);
            await user.updateOne({$set: req.body});
            res.status(200).json("Updated succesfully!");
        } catch (err) {
            res.status(500).json(err); 
        }
    },
    deleteUser: async (req, res) => {
        // try {
        //     await User.updateOne(
        //         {user: req.params.id}, 
        //         {$pull: {user: req.params.id}}
        //     );
        try { await User.findByIdAndDelete(req.params.id);
           
            // await User.deleteOne({account: req.params.id});
            res.status(200).json("Deleted successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = userController;