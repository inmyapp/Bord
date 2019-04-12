define(['./module'], function (models) {
	models.factory('RocketFactory', ['$resource', function ($resource) {
 	   return $resource(
 	   	'data.json',
 	   	{},
 	   	{
 	   		rocket: {
 	   			method: 'GET',
 	   			isArray: true,
 	   			interceptor: {
 	   				responseError: function (response) {
 	   					console.log(response);
 	   					return new Array();
 	   				}
 	   			}
 	   		}
 	   	}
 	   );
	}]);
});