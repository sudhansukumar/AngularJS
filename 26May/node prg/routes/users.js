var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var prodData = {	
	
	}
	var data = JSON.stringify(prodData);
  	res.send(data);
});

module.exports = router;
