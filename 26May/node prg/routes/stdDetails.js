var express = require('express');
var router = express.Router();
var sql = require("mssql");

/* GET users listing. */
router.get('/', function(req, res, next) {
	var studentDetails = {};
	var config = {
        user: 'sa',
        password: 'india143',
        server: 'localhost', 
        database: 'studentdetails' 
    };
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) {
        	console.log(err);
        } else {
        	console.log("Success communiction");
        }

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from sdetails', function (err, response) {
        	sql.close();
            res.send(response.recordset);
        });
    });  	
});

module.exports = router;
