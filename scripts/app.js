var app = angular.module('app', []);

app.controller('helloWorldController', function ($scope) {
	$scope.message = 'Hello World';
	$scope.dummyFn = function () {
		console.log($scope.message);
	};

});