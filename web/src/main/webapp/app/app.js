define([
	'angular',
	'angular-resource',
	'angular-ui-router',
	'angular-datatables',
	'angular-datatables.bootstrap',
	'./models/index',
	'./controllers/index'
], function (angular) {
	'use strict';

	return angular.module('app', [
		'app.models',
		'app.controllers',
		'ui.router',
		'ngResource',
		'datatables',
		'datatables.bootstrap'
	]);
});
