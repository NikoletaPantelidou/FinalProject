const router = require("express").Router();
var favController = require("../controllers/favController.js");

router.delete("/:id", favController.deleteFav);
router.post("/add", favController.postFav);
router.get("/", favController.getAllFavs);

module.exports = router;
