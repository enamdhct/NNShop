const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const userRoute = require("./routes/user");
const upRoute = require("./routes/uploads");
const contactRoute = require("./routes/contact");
const authRoute = require("./routes/auth");
// const accountRoute = require("./routes/account");
const productRoute = require("./routes/product");
const promotionRoute = require("./routes/promotion");
const cartRoute = require("./routes/cart");
const parser = require ("body-parser");
var multer = require('multer');
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
// var upload = multer({ dest: 'uploads/' });
dotenv.config();
app.use(cors());
app.use(cookieParser());
app.use (parser.json());
app.use(express.json());
app.use(parser.urlencoded({extended : true}));


//connect database
mongoose.connect("mongodb://127.0.0.1:27017/NNShop", ()=>{
    console.log("Connected");
})

// routes
app.use("/openFIle", upRoute);
app.use("/api/users", userRoute);
app.use("/api/contacts", contactRoute);
app.use("/api/carts", cartRoute);
app.use("/api/products", productRoute);
app.use("/api/promotions", promotionRoute);
app.use("/api/auth", authRoute);
app.listen(3000, () => {
    console.log("Server is running...");
})



// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "./uploads/");
//     },
//     filename: (req, file, cb) => {
//       const ext = file.originalname.split(".");
//       const newExt = ext[ext.length - 1];
//       cb(null, `${Date.now()}.${newExt}`);
//     },
//   });
  
// const upload = multer({ storage: storage });
//   app.post("/hihi", upload.single("avatar"), function (req, res, next) {
//     // req.file là 1 file `avatar` được upload
//     console.log(req.file);
//     // req.body sẽ giữ thông tin gắn kèm (vd: text fields), nếu có
//   });
