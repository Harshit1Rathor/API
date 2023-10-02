header('Access-Control-Allow-Origin:  *');  
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');   
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');


const express = require("express");
const router = express.Router();

const {getAllProducts, getAllProductsTesting} = require("../controllers/products")

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;
