var app = angular.module('app', []);

app.controller('helloWorldController', function ($scope) {
	$scope.message = 'Hello World';
});