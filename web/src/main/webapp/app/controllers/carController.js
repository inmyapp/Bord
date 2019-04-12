define(['./module'], function (controllers) {
	'use strict';
	controllers.controller('CarController', ['$scope', '$interval', function ($scope, $interval) {
		var vm = this;

		vm.dtOptions = {
			ajax: 'data.json',
			dom: 'lfrtipB',
			autoWidth: false,
			pagingType: 'full_numbers',
			order: [[0, 'asc']],
			aoColumns: [{
				'mData': 'name',
				'sTitle': 'Naam'
			},{
				'mData': 'baard',
				'sTitle': 'Baard'
			},{
				'mData': 'kaap',
				'sTitle': 'Kaap'
			}]
		};

		vm.dtInstance = {};
	}]);
});