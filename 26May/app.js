var app  = angular.module("httpApp", []);

app.controller("httpCntrl", function($scope, $http){
	
	$scope.prodDetails = [];
	$scope.showLBlock = false;
	$scope.shwErr = false;
	$scope.loadProdData = function() {
		$scope.showLBlock = true;
		var dataReq = $http({
			url: 'http://localhost:8080/products/proddetails',
			method: 'GET',
			dataType: 'JSON'
		});
		dataReq.then(function(res){
			$scope.showLBlock = false;
			$scope.prodDetails = res.data.prodDetails;
		}, function(err){
			$scope.shwErr = true;
			$scope.showLBlock = false;
			console.log("Error");
			console.log(err);
		});
	}
});