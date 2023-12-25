const Product = require('../Models/ProductSchema')



module.exports = {
    getProduct: async (req, res) =>{
        res.status(200).json({test:'test'})
    },
    createProduct: async (req, res)=>{
        try{
            // const {name, description, imagePath} = req.body;
            // const existingProduct = await Product.findOne({ name });
            const filePath = req.file.path;

            console.log(filePath)
            // if(existingProduct){
            //     console.log(existingProduct)
            //     return res.status(400).json({message: "This product is in DB"})
            // }
            // const newUser = new Product({
            //     name, description, imagePath
            // })
            // newUser.save()
            res.status(201).json({name: "existingProduct"})
        }
        catch(err){
            console.error(err)
            res.status(500).json({message: "error"})
        }
        
    }
}