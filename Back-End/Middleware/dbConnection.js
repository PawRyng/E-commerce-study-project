const mongoose = require('mongoose');

const dbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true

}

module.exports ={
    dbConnection: async (req, res, next) =>{
        try{
            await mongoose.connect(process.env.DATABASE_URL, dbOption);
            console.log("Connected with DB!")
            next();
        }
        catch(err){
            console.error('error in conection with db ->', err);
            next(err);
        }
    },
    dbClose: async (res, req, next)=>{
        try{
            mongoose.connection.close()
            console.log("DB closed")
            next();
        }
        catch(err){
            console.error('DB not closed');
            next(err)
        }
    }
}