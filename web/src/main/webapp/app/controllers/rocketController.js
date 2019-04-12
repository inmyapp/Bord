define(['./module'], function (controllers) {
	'use strict';
	controllers.controller('RocketController', ['$scope', '$interval', 'DTOptionsBuilder', 'DTColumnBuilder', 'RocketFactory', function ($scope, $interval, DTOptionsBuilder, DTColumnBuilder, RocketFactory) {
		var vm = this;
		var intervalPromise;

		vm.dtOptions = DTOptionsBuilder
			.fromFnPromise(dataPromise)
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

		function dataPromise() {
			return RocketFactory.rocket().$promise;
		}

		$scope.$on('$destroy', function () {
			if (angular.isDefined(intervalPromise)){
				$interval.cancel(intervalPromise);
				intervalPromise = undefined;
			}
		});

		intervalPromise = $interval( function (vm, dataPromise) {
			if (vm.dtInstance && typeof vm.dtInstance.changeData === 'function') vm.dtInstance.changeData( dataPromise );
		}, 5000);
	}]);
});