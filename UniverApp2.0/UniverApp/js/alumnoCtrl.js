app.controller('alumnoCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

	$scope.setActive("mAlumnos");
	var codigo = $routeParams.codigo;
	$scope.actualizado = false;
	$scope.alumno = {};
	$scope.creando = false;

	if(codigo == "nuevo"){
		$scope.creando = true;
	}else{
		$http.get('php/servicios/alumnos.getAlumno.php?c=' + codigo).success(function(data){
			if(data.err !== undefined){
				
				return window.location = "#/alumnos";
			}else{
				$scope.alumno = data;
			}
			
		});
	}


	$scope.guardarAlumno = function(){

		if( $scope.creando ){
			$http.post('php/servicios/alumnos.crear.php', $scope.alumno).success(function(data){
				if(data.err === false){
					$scope.actualizado = true;

					setTimeout(function(){
						$scope.actualizado = false;
						$scope.$apply();
					}, 3500);

				}
				console.log(data);
			});
		}else{
			$http.post('php/servicios/alumnos.guardar.php', $scope.alumno).success(function(data){
				if(data.err === false){
					$scope.actualizado = true;

					setTimeout(function(){
						$scope.actualizado = false;
						$scope.$apply();
					}, 3500);

				}
				console.log(data);
			});
		}	

	}

}]);