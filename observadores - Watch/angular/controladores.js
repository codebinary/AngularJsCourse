var app = angular.module('paginacionApp.controladores',[]);

//Esto es para tipos de busquedas y poder llamar desde una base de datos la informacion que este buscando el usuario
app.controller('observadorCtrl', ['$scope', function ($scope) {
	
	$scope.nombre = "James Ontiveros";

	//nombre de la variable y una funcion que se ejecutara que recibe como parametro el valor nuevo y el valor viejo
	$scope.$watch( 'nombre', function( valorNuevo, valorViejo ){

		console.log(valorNuevo, valorViejo);
	});
	

}]);