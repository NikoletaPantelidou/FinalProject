const router = require("express").Router();
var userController = require("../controllers/userController.js");

router.post("/signin", userController.userSignin);
router.post("/login", userController.userLogin);
router.get("/userInfo/:token", userController.getUserInfoByToken);

module.exports = router;
