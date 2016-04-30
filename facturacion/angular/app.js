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

co
app.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'dashboard/dashboard.html'
		})
		.otherwise({
			redirectTo:'/'
		})

}]);