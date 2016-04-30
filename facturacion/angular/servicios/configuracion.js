var app = angular.module( 'facturacionApp.configuracion', []);

app.factory('Configuracion', ['$http', '$q', function($http, $q){

	var self = {

		config: {},
		cargar: function(){

			//Definimos la promesa
			var d = $q.defer();

			//Cargamos el archivo json
			$http.get('configuracion.json')
				.success(function(data){

					self.config = data;
					d.resolve();

				})
				.error(function(){

					d.reject();
					console.error("No se pudo cargar el archivo de configuracion");

				});

			//siempre retorna la promeso
			return d.promise;
		}

	};


	return self;

}]);