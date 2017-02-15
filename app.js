// BASE SETUP
// ========================================================

//call the packages we need
var express = require("express");	//call express
var app = express();	//define our app using express
var bodyParser = require("body-parser");
const winston = require('winston')



var port = 3000;


var router = express.Router();

//middleware to use for all requests
router.use(function(req,res,next){
	//log (Do analytics for all request , do a common task like verification here)
	var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	console.log("A request came:- " + fullUrl);
	next(); //make sure we go to the next routes and not stop here
});

// test route to make sure everything is working (accessed at GET http://ip_address/api/)
router.get("/",function(req,res){
	res.json({message: 'hello world !!!!'});
});


//START THE SERVER
// ======================================================
app.listen(port);
console.log("Server running at port :- " + port);


//
