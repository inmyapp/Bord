define(['./module'], function (controllers) {
	'use strict';
	controllers.controller('PlaneController', ['$scope', '$interval', 'DTOptionsBuilder', 'DTColumnBuilder', function ($scope, $interval, DTOptionsBuilder, DTColumnBuilder) {
		var vm = this;

    	vm.dtOptions = DTOptionsBuilder
			.fromSource('data.json')
			.withDOM('lfrtipB')
			.withOption('autoWidth', false)
			.withOption('order', [0, 'asc']);

		vm.dtColumns = [
			DTColumnBuilder
				.newColumn('name')
				.withTitle('Name'),
			DTColumnBuilder
				.newColumn('baard')
				.withTitle('Baard'),
			DTColumnBuilder
				.newColumn('kaap')
				.withTitle('Kaap'),
		];

		vm.dtInstance = {};
	}]);
});