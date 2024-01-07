const Product = require('../Models/ProductSchema')

module.exports = {
    getProduct: async (req, res) =>{

    const productID = req.params.porductID;
    console.log(productID)

    // res.send(`Product ID: ${productID}`);
    try{
        const product  = await Product.findById(productID)
        res.status(200).json(product);
    }catch{
        res.status(404).json({message: "brak produktu w bazie"})
    }
},
    getProducts: async (req, res) =>{

        const limit = parseInt(req.query.limit) || 100;
        let allProduct = [];
        if(req.query.bestseller){
            allProduct = await Product.find({bestseller: true}).limit(limit);
        }else{
            allProduct = await Product.find().limit(limit);
        }
        res.status(200).json(allProduct);
    },
    getProductFilters: async (req, res) =>{
        let products = [];
        if(req.query.main){
            
            products = await Product.find({mainCategory: req.query.main});
        }
        else{
            products = await Product.findAll();
            
        }
        res.status(200).json(products);
    },
    createProduct: async (req, res)=>{
        try{
            const {name, description, mainCategory, price, bestseller, imagePath} = req.body;
            const existingProduct = await Product.findOne({ name });

            let pathToImage = '/images/no-image.svg';
            if(existingProduct){
                return res.status(400).json({message: "This product is in DB"})
            }
            if(imagePath){
                pathToImage = imagePath;
            }
            
            
            
            const newUser = new Product({
                name, description, mainCategory, price, bestseller, imagePath: pathToImage 
            })
            newUser.save()
            res.status(201).json({name: "existingProduct"})
        }
        catch(err){
            console.error(err)
            res.status(500).json({message: "error"})
        }
        
    }
}