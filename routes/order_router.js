const express = require('express');
const router = express.Router()
const { query, validationResult, matchedData, param } = require('express-validator')
//import the Postgres dataservice client
const pgClient = require('../data_services/pg_client');


//TODO: Validation input

router.get('/orders', (req, res) => {
    try {
        pgClient.query('SELECT * FROM orders', (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
        })
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }

}
);

module.exports = router;