const router = require("express").Router();
var bagController = require("../controllers/bagController.js");

router.delete("/:id", bagController.deleteBag);
router.post("/add", bagController.postBag);
router.get("/", bagController.getAllBags);

module.exports = router;
