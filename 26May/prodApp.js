var prodApp = angular.module("prodDetailsApp", []);

prodApp.controller("prodDetailsCntrl", function($scope){
	$scope.name = "TEST";

	$scope.studentName = "Teena";

	$scope.sDetails = {
		age: 40
	}

});