app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mAlumnos");

	$scope.alumnos = {};
	$scope.limit = 5; //Variable para la paginacion

	$http.get('php/servicios/alumnos.listado.php').success(function(data){
		$scope.alumnos = data;
	});

	//Funciones para la paginacion
	$scope.siguientes = function(){
		if($scope.alumnos.length > $scope.limit){
			$scope.limit += 5;
		}
	}

	$scope.anteriores = function(){
		if($scope.limit > 5){
			$scope.limit -= 5;
		}
	}


}]);