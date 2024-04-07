const express = require('express');
const axios = require('axios');
const router = express.Router()
const { query, validationResult, matchedData, param } = require('express-validator')

//example call an external api

const validation=()=>{
    return [
        query('date').notEmpty().isDate(),
    ]
}

router.get('/apod',validation(), (req, res) => {
    //call external api 
    try {
        const result = validationResult(req);
        if (result.isEmpty()) {
             const data = matchedData(req);
             console.log('DATA:' + data);
        axios.get(`https://api.nasa.gov/planetary/apod?date=${data.date}&api_key=${process.env.NASA_API_KEY}`).then((resp)=>{
                console.log(resp.data);
                res.send({'image_url':resp.data.hdurl, 'description':resp.data.explanation })
                    
            }).catch((error)=>{
                console.log('ERROR:' + error)
            })

                   
           }else{
            res.send({ errors: result.array() });  
           }    
   

   
 
   
        
    } catch (error) {
            console.log('error:'+ error);
    }


   
}
);

module.exports = router;