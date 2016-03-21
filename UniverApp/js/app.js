var app = angular.module('universidadApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  //Variable que contiene la url del menu
  $scope.menuSuperior = 'parciales/menu.html';

  //Esta funcion es para activar el menu
  //Recibe un parametro 
  $scope.setActive = function(Opcion){

  	//Despintamos todos los li
  	$scope.mInicio 		= "";
  	$scope.mProfesores 	= "";
  	$scope.mAlumnos		= "";

  	//Pintamos la opcion que llega
  	$scope[Opcion] = "active";
  };

}]);
