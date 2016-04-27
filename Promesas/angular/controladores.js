var app = angular.module('promesasApp.controladores', []);

app.controller('personasCtrl', ['$scope', 'Personas', function($scope, Personas){
	
	$scope.personas = Personas;

}]);