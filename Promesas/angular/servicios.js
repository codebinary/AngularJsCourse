var app = angular.module('promesasApp.servicios', []);

app.factory('Personas', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){
	
	var self = {
		"cargando": false,
		"mensaje": "",
		"data": []
	};

	self.cargarData = function(){
		self.cargando = true;

		var q = $q.defer()//Deferido que no es en el momento

		//$http.jsonp es para obtener informacion fuera de nuestro dominio
		$http.jsonp('http://www.json-generator.com/api/json/get/cebyjISmuW?callback=JSON_CALLBACK')
		.then(function success(respuesta){

			q.resolve(respuesta.data);
			console.log("Succesfull!!")
			/*self.cargando = false;
			self.data = respuesta.data;

			console.log("Todo bien !!!");
			console.log(data);*/

			}, function error(response){

				console.log("Algo paso mal !!!");
				q.reject("Error al cargar");

			});

		return q.promise;
	};

	//rootScope es lo que esta mas arriba de todo
	$rootScope.promise = self.cargarData();
	$rootScope.promise.then(
		function(data){
			self.cargando = false;
			self.mensaje = "Informacion cargada correctamente";
			self.data = data;
		},
		function(error){
			self.mensaje = "Error al cargar la informacion";
			console.error(error)
		});

	return self;

}])