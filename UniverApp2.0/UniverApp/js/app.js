var app = angular.module('universidadApp',['ngRoute', 'ui.mask']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
	$scope.menuSuperior = 'parciales/menu.html';
	$scope.telefonoMask = "9999-9999";


	$scope.setActive = function(Opcion){

		$scope.mInicio     = "";
		$scope.mProfesores = "";
		$scope.mAlumnos    = "";

		$scope[Opcion] = "active";

	}

}]);

app.filter('telefono', function(){
	return function(numero){
		return numero.substring(0,3) + " - " + numero.substring(3);
	}
});