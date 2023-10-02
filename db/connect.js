header('Access-Control-Allow-Origin:  *');  
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');   
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');


const mongoose = require("mongoose");


const connectDB = (uri)=>{

    return mongoose.connect(uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
};

module.exports = connectDB;
