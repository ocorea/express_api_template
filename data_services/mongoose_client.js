const express = require('express');
const mongoose = require('mongoose');


// create the mongoose connection
//TODO: Check if connection exists
try{
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log('Mongoose connection created');
}catch{
    console.log('Error creating mongoose connection');
}


module.exports = mongoose;