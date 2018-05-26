var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var studentDetails = {
		name: 'Raj',
		age: 30
	};
	var data = JSON.stringify(studentDetails);
	setTimeout(function(){
		res.send(data);	
	}, 500);
  	
});

module.exports = router;
