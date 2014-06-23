describe('helloWorldController tests', function () {

	beforeEach(function () {
		angular.mock.module('app');
	});

	beforeEach(inject(function ($injector) {
		var $controller = $injector.get('$controller');
		var $rootScope = $injector.get('$rootScope');
		this.scope = $rootScope.$new();
		this.controller = $controller('helloWorldController', {
			$scope: this.scope
		});
	}));

	it('should exists', function () {
		expect(this.controller).toBeDefined();
	});

	it('message should be valid', function () {
		expect(this.scope.message).toBe('Hello World');
	});
});