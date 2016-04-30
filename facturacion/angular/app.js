var app = angular.module( 'facturacionApp', [ 
		'ngRoute',
		'facturacionApp.configuracion'
		 ]);

app.controller('mainCtrl', ['$scope', 'Configuracion', function($scope,Configuracion){
	
	$scope.config = {};

	//Llamamos a la funcion, then recibe dos parametros cuando lo hace bien y cuando no
	Configuracion.cargar().then( function(){
		$scope.config = Configuracion.config;
		console.log($scope.config);
	});

}]);

/*=============================
=            Rutas            =
=============================*/

app.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'dashboard/dashboard.html'
		})
		.otherwise({
			redirectTo:'/'
		})

}]);

/*=====  End of Rutas  ======*/

/*===============================
=            Filtros            =
===============================*/

app.filter('cortarPalabra', function(){
	return function(palabra){
		
		/* comprobamos si la palabra esta definida */
		if(palabra){
			if(palabra.length > 1){
				return palabra.substr(1);
			}else{
				return palabra;
			}
		}

	}
});

/*=====  End of Filtros  ======*/




