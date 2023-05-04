const contactController = require("../controllers/contactController");
var multer = require("multer");

const router = require("express").Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".");
    const newExt = ext[ext.length - 1];
    cb(null, `${Date.now()}.${newExt}`);
  },
});

const upload = multer({ storage: storage });
// const router = require("express").Router();
router.post("/", upload.single("imageUrl"),contactController.addContact);
router.get("/",contactController.getAllContact);

router.get("/:id",contactController.getContact);

router.put("/:id",contactController.updateContact);

router.delete("/:id", contactController.deleteContact);
// router.post("/test", upload.single("avatar"), function (req, res, next) {
//     // req.file là 1 file `avatar` được upload
//     console.log(req.body);
  
//     console.log(req.file.filename);
//     return res.status(200).send(req.body);
//     // req.body sẽ giữ thông tin gắn kèm (vd: text fields), nếu có
//   });
  

module.exports = router;