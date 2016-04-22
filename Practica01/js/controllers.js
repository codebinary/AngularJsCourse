//Contorlador para la pagina de inicio
app.controller('inicioCtrl', ['$scope', function($scope){

	$scope.activarMenu("mInicio");

}]);



//Controlador para la pagina de cotización
app.controller('cotizaCtrl', ['$scope', '$http', function($scope, $http){

	$scope.activarMenu("mCotizaciones");
	$scope.limite = 5; //limite de resultados
	$scope.inicio = -5; //inicio de los resultados

	$http.get('modulos/cotizaciones.php').success(function(data){
		$scope.listaCotizaciones = data;
	});


	//Paginación 
	$scope.siguientes = function(){
		if($scope.listaCotizaciones.length > $scope.limite){
			$scope.limite += 5;
		};
	}

	$scope.anteriores = function(){
		if($scope.limite > 5){
			$scope.limite -=5;
		}
	}




}]);