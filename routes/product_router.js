const express = require('express');
const router = express.Router()
const { query, validationResult, matchedData, param } = require('express-validator')

//call the MongoDB client
const mongoClient = require('../data_services/mongoose_client');

//the schema, models classes exist in the Mongodb client created
const productSchema = new mongoClient.Schema({});
const Products = mongoClient.model('Products', productSchema, 'products');


//TODO: Validation inputs

router.get('/products', (req, res) => {
    try {
        Products.find({},"name price description").then((result) => {
    
            res.json(result);
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
        
    }

});


module.exports = router;