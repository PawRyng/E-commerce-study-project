const router = require("express").Router();

const  { getProducts } = require('../Controller/Cart')

router.get('/', getProducts);

module.exports = router