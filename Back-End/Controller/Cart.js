const Product = require('../Models/ProductSchema')
module.exports = {
    getProducts: async (req, res) =>{

        let ids = [];
        if(req.query.cart){
            req.query.cart.map(id => ids.push(id.id));
            const allProducts = await Product.find({ _id: { $in: ids } });
            res.status(200).json(allProducts);
        }
        else{
            res.status(201).json({message:"no-product"})
        }

        
    }
}