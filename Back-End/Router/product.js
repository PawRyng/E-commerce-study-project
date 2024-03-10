const router = require("express").Router();

const {getProduct, getProducts, getProductFilters, createProduct, deleteProduct } = require('../Controller/Product')

const upload = require('../Middleware/files')
const auth = require('../Middleware/auth')

// ToDo: fix auth and add this to delete method!!
router.get('/', getProducts)
router.get('/filters', getProductFilters)
router.get('/:porductID', getProduct);
router.post('/', upload.single('image'), createProduct);
router.delete('/:idProduct', deleteProduct);
module.exports = router;