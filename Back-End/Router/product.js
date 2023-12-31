const router = require("express").Router();

const {getProduct, getProducts, getProductFilters, createProduct } = require('../Controller/Product')
const upload = require("../Middleware/files");

router.get('/', getProducts)
router.get('/filters', getProductFilters)
router.get('/:porductID', getProduct);
router.post('/', createProduct)
// router.post('/',upload.single('file'), createProduct)
module.exports = router;