const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

//load the .env variables

//TODO: add cors
app.use(bodyParser.json());

//import the routes
const userRouter = require('./routes/user_router');
const productRouter = require('./routes/product_router');
const orderRouter = require('./routes/order_router');
const externalRouter = require('./routes/external_router');

//route mapping
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);
app.use('/external', externalRouter);

//sample of method calling
//curl -X GET "http://localhost:3000/user/hello/10?person=John&edad=20" -H  "accept: application/json"
//curl -X GET "http://localhost:3000/product/products" -H  "accept: application/json"
//curl -X GET "http://localhost:3000/order/orders" -H  "accept: application/json"



//start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});