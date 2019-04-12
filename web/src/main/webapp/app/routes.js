define(['./app'], function (app) {
	'use strict';
	return app.config(['$stateProvider', '$urlRouterProvider', '$sceProvider', function ($stateProvider, $urlRouterProvider, $sceProvider) {

		$urlRouterProvider.otherwise('/bike');

		$stateProvider
		.state('bike', {
			url: '/bike',
			templateUrl: 'views/test.html',
			controller: 'BikeController',
			controllerAs: 'controller'
		})
		.state('car', {
			url: '/car',
			templateUrl: 'views/table.html',
			controller: 'CarController',
			controllerAs: 'controller'
		})
		.state('plane', {
			url: '/plane',
			templateUrl: 'views/table.html',
			controller: 'PlaneController',
			controllerAs: 'controller'
		})
		.state('rocket', {
			url: '/rocket',
			templateUrl: 'views/table.html',
			controller: 'RocketController',
			controllerAs: 'controller'
		});

		$sceProvider.enabled(false);
	}]);
});