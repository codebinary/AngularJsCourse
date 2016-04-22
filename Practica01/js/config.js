app.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'includes/home.html', 
			controller: 'inicioCtrl'
		})
		.when('/cotizaciones',{
			templateUrl: 'includes/cotizaciones.html',
			controller: 'cotizaCtrl'
		})
});