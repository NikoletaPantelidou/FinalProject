const router = require("express").Router();
var productController = require("../controllers/productController.js");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getById);
router.delete("/:id", productController.deleteProduct);
router.post("/add", productController.postProduct);

module.exports = router;
