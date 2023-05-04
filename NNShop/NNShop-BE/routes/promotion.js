const promotionController = require("../controllers/promotionController");
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

router.post("/",upload.single("imageUrl"),promotionController.addPromotion);
router.get("/",promotionController.getAllPromotion);

router.get("/:id",promotionController.getPromotion);

router.put("/:id",promotionController.updatePromotion);

router.delete("/:id", promotionController.deletePromotion);


module.exports = router;