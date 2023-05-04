const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/",userController.addUser);
router.get("/",userController.getAllUser);

router.get("/:id", userController.getUser);

router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
module.exports = router;