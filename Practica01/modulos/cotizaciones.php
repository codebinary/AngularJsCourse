<?php 
	
	include('lib/ezsql/ezsql.php');

	$db = new ezSQL_mysql("root", "", "intrujil_inter_db", "localhost");

	$sql = "SELECT * FROM cotizaciones ORDER BY id ASC";

	$resultado = $db->get_results($sql);

	echo json_encode($resultado);

 ?>