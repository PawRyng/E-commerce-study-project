const router = require("express").Router();

const { getProduct, createProduct } = require('../Controller/Product')
const upload = require("../Middleware/files");

router.get('/', getProduct)
router.post('/', createProduct)
// router.post('/',upload.single('file'), createProduct)
module.exports = router;