const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        // require: true,
    },
    username:{
        type: String,
        // require: true,
        minlength: 6,
        maxlength: 20,
        unique: true
    },    
    email:{
        type: String,
        // require: true,
        minlength: 10,
        maxlength: 50,
        unique: true
    },
    password:{
        type: String,
        // require: true,
        minlength: 6,
    },
    password_confirm:{
        type: String,
        // require: true,
        minlength: 6,
    },
    admin:{
        // type:Boolean,
        // default:false,
        type: String,
    },
    phone:{
        type: String,
        // require: true,
    },
    address:{
        type: String,
        // require: true,
    }
},
{timestamps:true}
);

module.exports = mongoose.model("User", userSchema);