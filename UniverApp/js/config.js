//Se encarga de la navegacion
app.config(function($routeProvider){

	$routeProvider
		.when('/', {
			//Aqui redireccionarmos a la pagina que deseamos
			templateUrl: 'parciales/home.html',
			controller: 'inicioCtrl'
		})
		.when('/profesores', {
			//Aqui redireccionarmos a la pagina que deseamos
			templateUrl: 'parciales/profesores.html',
			controller: 'profesoresCtrl'
		})
		.when('/alumnos', {
			//Aqui redireccionarmos a la pagina que deseamos
			templateUrl: 'parciales/alumnos.html',
			//Llamamos al controller alumno
			controller: 'alumnosCtrl'
		})
		//default = java
		.otherwise({
			redirectTo: '/'
		})

});