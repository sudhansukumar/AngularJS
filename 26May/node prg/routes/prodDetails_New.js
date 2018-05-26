var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(req.query.productId);
	var prodData = {	
		"prodDetails": [
			{
				image: 'images/laptop.png',
				name: 'Laptop',
				price: '$4000',
				manufacturer: 'Samsung'
			},
			{
				image: 'images/laptop.png',
				name: 'Laptop',
				price: '$100',
				manufacturer: 'Samsung'
			},
			{
				image: 'images/laptop.png',
				name: 'Laptop',
				price: '$300',
				manufacturer: 'Samsung'
			},
			{
				image: 'images/laptop.png',
				name: 'Laptop',
				price: '$300',
				manufacturer: 'Samsung'
			}
		]
	};
	setTimeout(function(){
		res.send(JSON.stringify(prodData));	
	}, 5000);
	
});

module.exports = router;
