var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var matchData = {	
		type: '1 Day -  day and night',
		location: 'Delhi',
		time: new Date(),
		between: 'India Vs Aus'
	};
	
	var matchData = JSON.stringify(matchData);
	setTimeout(function(){
		res.send(matchData);	
	}, 3000);
  	
});

module.exports = router;
