header('Access-Control-Allow-Origin:  *');  
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');   
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');



const Product = require("../models/product");
const getAllProducts = async (req, res)=>{

    const {description, title, sort, select} = req.query;
    const queryObject = {};

    if(description){
        queryObject.description = {$regex: description, $options: "i"};
    }

    if(title){
        queryObject.title = {$regex: title, $options: "i"};
    }

    let apiData = Product.find(queryObject);

    if(sort){
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }
    
    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }


    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 9;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    const myData = await apiData.sort(sort);
 res.status(200).json({myData});
};

const getAllProductsTesting = async (req, res)=>{
    res.status(200).json({msg: " Get Products Testing"});
};


module.exports = {getAllProducts, getAllProductsTesting};
