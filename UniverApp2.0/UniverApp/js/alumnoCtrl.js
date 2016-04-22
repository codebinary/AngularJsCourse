app.controller('alumnoCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

	var codigo = $routeParams.codigo;

	$scope.alumno = {};

	$http.get('php/servicios/alumnos.getAlumno.php?c=' + codigo).success(function(data){
		if(data.err !== undefined){
			
			return window.location = "#/alumnos";
		}else{
			$scope.alumno = data;
		}
		
	})

}]);