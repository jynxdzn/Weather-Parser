app.controller('MainController', ['$scope', 'weatherParser', function($scope, weatherParser) {
	weatherParser.success(function(data) {
		$scope.fiveDay = data;
	});
}]);