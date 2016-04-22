<?php
// Incluir la clase de base de datos
/*include_once("../lib/ezsql/ezsql.php");

$db = new ezSQL_mysql("root", "", "univer_db", "localhost");

$sql = "SELECT * FROM alumnos ORDER BY nombre ASC";

$resultado = $db->get_results($sql);

echo json_encode($resultado);*/

// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');
$bd = new  Database;

$sql = "SELECT * FROM alumnos ORDER BY nombre ASC";

echo $bd->get_json_rows($sql);
/*print_r(Database::get_json_rows($sql));*/



?>