var app = angular.module('paginacionApp.servicios',[]);

app.factory('Paises', ['$http', function($http){
		
		var self = {

			cargando: false,
			pagina: 1,
			total: 0,
			totalPaginas: 0,
			data: [],


			cargarData:function( opciones ){
				self.cargando = true;
				self.pagina = opciones.pagina;

				
				$http.post("php/servicios/paises.getPaises.php",opciones)
					.success(function(respuesta){

						console.log(respuesta);

					}).error(function(respuesta){

						console.log(respuesta);

					});

			}

		};

		var defecto = {
			pagina:1			
		};

		self.cargarData( defecto );

		return self;

}]);