header('Access-Control-Allow-Origin:  *');  
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');   
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');


const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
        title: {
            type: String,
            required: true,
        },
        
        description: {
            type: String,
            required: true,
        },
        
        price: {
            type: Number,
            required: true,
        },
        
        img: {
            type: String,
            required: true,
        },
        
        quantity: {
            type: Number,
            required: true,
        }


    }
);

module.exports = mongoose.model("Product", productSchema);
