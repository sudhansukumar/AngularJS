var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(req.query.productId);
	var prodData = {	
	"prodDetails": [
		{
			"name": "laptop",
			"price": "200$",
			"manu": "Samsung",
			id: 'prod_1',
			"imageurl": "images/laptop.png"
		},
		{
			"name": "laptop",
			"price": "300$",
			"manu": "HTC",
			id: 'prod_2',
			"imageurl": "images/laptop.png"
		},
		{
			"name": "laptop",
			"price": "300$",
			"manu": "Samsung",
			id: 'prod_3',
			"imageurl": "images/laptop.png"
		},
		{
			"name": "laptop",
			"price": "300$",
			id: 'prod_4',
			"manu": "Dell",
			"imageurl": "images/laptop.png"
		},
		{
			"name": "mobile",
			"price": "500$",
			"manu": "Dell",
			id: 'prod_5',
			"imageurl": "images/laptop.png"
		}
	]};
	var responseData  = {};
	if (req.query.productId) {
		for (var i = 0 ; i < prodData.prodDetails.length; i++) {
			if (prodData.prodDetails[i].id == req.query.productId) {
				responseData  = prodData.prodDetails[i];
			}
		}
		res.send(responseData);
	} else {
		var data = JSON.stringify(prodData);
		setTimeout(function(){
			res.send(data);	
		}, 100);
	}
	

	

	
  	
});

module.exports = router;
