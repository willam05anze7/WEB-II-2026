<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}
//datos de conexion a la bd
$servername="localhost";
$username= "root";
$password= "";
$dbname=""//nombre d ela base d e daros 
//variable
$con=new mysqli($servername, $username, $password, $dbname);
if($con->connection_code){
    http_response_code(500);
    die(json_encode(["error"=>"conecion mala" . $con->connection_error]));
    }
?>