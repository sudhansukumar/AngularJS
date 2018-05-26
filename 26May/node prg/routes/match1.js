var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var matchData = {	
		type: 'T20',
		location: 'Hyderabad',
		time: new Date(),
		between: 'India Vs Pak'
	};
	
	var matchData = JSON.stringify(matchData);
	setTimeout(function(){
		res.send(matchData);	
	}, 5000);
  	
});

module.exports = router;
