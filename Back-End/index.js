const express = require('express');
const dotenv = require("dotenv");
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


dotenv.config();
const port = process.env.APP_PORT || 3000;

//import middleware
const {dbConnection, dbClose} = require('./Middleware/dbConnection')
//configure image path
const imagesPath = path.join(__dirname, 'public', 'images');
app.use('/images', express.static(imagesPath));

//configure CORS
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
}));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//router import
const userRouter = require('./Router/user')
const product = require('./Router/product')
const cart = require('./Router/cart')


app.use(dbConnection);

app.use('/user',userRouter);
app.use('/product', product);
app.use('/cart', cart);


app.use(dbClose);

app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
  });
