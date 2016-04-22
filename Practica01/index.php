<!DOCTYPE html>
<html ng-app="cotizaciones" ng-controller="mainController">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">

	<!-- Incluir Bootstrap -->
    <link rel="stylesheet" href="css/bootstrap.min.css">

    <!-- Animate.css -->
	<link rel="stylesheet" href="css/animate.css">

    <!-- Estilo personalizado -->
    <link rel="stylesheet" href="css/style.css">
	
	<!-- Angular JS-->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular-route.min.js"></script>
	
	<!-- Archivos principales -->
	<script src="js/app.js"></script>
	<script src="js/config.js"></script>
	
	<!-- Controllers generales -->
	<script src="js/controllers.js"></script>

	
</head>
<body>	

	<div ng-include="menuSuperior"></div>
	
	<div class="container">
		<div ng-view></div>
	</div>

	
</body>
</html>