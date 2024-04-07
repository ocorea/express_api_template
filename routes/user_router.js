const express = require('express')
const router = express.Router()
const { query, validationResult, matchedData, param } = require('express-validator')

//using mongoose schema and current client
//import the mongoose database connection


//input validation model
const validateGetHello=()=> {
    return [
        //validation of queries
        query('person').notEmpty().escape().trim(),
        query('edad').notEmpty().isNumeric(),
        param('peso').isNumeric(),
    
       
    ]
};

router.get('/hello/:peso',validateGetHello(),(req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        //ejecutar el codigo normal que se espera cuando todos los datos son enviados
        const data = matchedData(req);
        return res.send(`Hello, ${data.person}!, with age ${data.edad} and weight: ${data.peso} !`);       
      }    
      res.send({ errors: result.array() });  
}
);
//sample of method calling
//curl -X GET "http://localhost:3000/user/hello/10?person=John&edad=20" -H  "accept: application/json"


module.exports = router;