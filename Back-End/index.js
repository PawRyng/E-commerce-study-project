const express = require('express');
const dotenv = require("dotenv");
const app = express();
const bodyParser = require('body-parser');


dotenv.config();
const port = process.env.APP_PORT || 3000;

//import middleware
const {dbConnection, dbClose} = require('./Middleware/dbConnection')


//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//router import
const userRouter = require('./Router/user')
const product = require('./Router/product')


app.use(dbConnection);

app.use('/user',userRouter);
app.use('/product', product);


app.use(dbClose);

app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
  });
