var app = angular.module('cotizaciones', ['ngRoute']);

app.controller('mainController', ['$scope', '$http', function($scope, $http){

	$scope.menuSuperior = 'includes/menu.html';

	$scope.activarMenu = function(opcion){ //mInicio || mCotizaiones
		$scope.mInicio			= "";
		$scope.mCotizaciones 	= "";

		$scope[opcion] = "active";
	}

}]);


app.filter('telefono', function(){

	return function(numero){
		return numero.substring(0,3) + " - " + numero.substring(3);
	}

});