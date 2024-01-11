const router = require("express").Router();

const {getProduct, getProducts, getProductFilters, createProduct } = require('../Controller/Product')

const upload = require('../Middleware/files')


router.get('/', getProducts)
router.get('/filters', getProductFilters)
router.get('/:porductID', getProduct);
router.post('/', upload.single('image'), createProduct)
module.exports = router;