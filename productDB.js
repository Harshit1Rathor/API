require("dotenv").config();
const connectDB = require("./db/connect");

const ProductJson = require("./products.json");

const Product = require("./models/product");

const start = async ()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("Success");
    }catch(error){
        console.log(error);
    }
}

start();