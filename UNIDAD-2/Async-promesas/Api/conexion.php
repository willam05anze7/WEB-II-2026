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
$dbname="_web2"; 
//variable
$conn=new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){ 
    http_response_code(500);
    die(json_encode(["error"=>"conecion mala " . $conn->connect_error])); 
}

$method=$_SERVER['REQUEST_METHOD'];
switch($method){
    case 'GET':
        $id=$_GET['id'] ?? null;
        if ($id){
            $stmt=$conn->prepare("SELECT * FROM _cliente WHERE ID_cliente = ?");
            $stmt->bind_param("s",$id); 
            $stmt->execute();
            $result=$stmt->get_result(); 
            $cliente=$result->fetch_assoc();
            echo json_encode($cliente); 
        }else{
            $result=$conn->query("SELECT * FROM _cliente"); 
            $cliente=[];
            while($row=$result->fetch_assoc()){
                $cliente[]=$row;
            }
            echo json_encode($cliente);
        }
        break;
    case 'POST':
        $input=json_decode(file_get_contents('php://input'),true);
        $id=$input['id'] ?? uniqid();
        $nombre=$input['nombre'];
        $email=$input['email'];
        $stmt=$conn->prepare("INSERT INTO _cliente (ID_cliente, Nombre, email) VALUES (?,?,?)");

        $stmt->bind_param("sss", $id, $nombre, $email);
        if($stmt->execute()){
            http_response_code(201);
            echo json_encode(["message"=>"creado existosamente", "id"=>$id]);
        }else{
            http_response_code(500);
            echo json_encode(["error"=>"todo mal"]);
            }
        break;
    
    case 'PUT':
        $input=json_decode(file_get_contents('php://input'),true);
        $id=$input['id'];
        $nombre=$input['nombre'];
        $email=$input['email'];
        $stmt=$conn->prepare("UPDATE _cliente SET Nombre=?, email=? WHERE ID_cliente=?");
        $stmt->bind_param("sss", $nombre, $email, $id);
        if($stmt->execute()){
            http_response_code(201);
            echo json_encode(["message"=>"actualizado existosamente"]);
        }else{
            http_response_code(500);
            echo json_encode(["error"=>"todo mal"]);
        }
        break;

    case 'DELETE':
        $id=$_GET['id'];
        $stmt=$conn->prepare("DELETE FROM _cliente WHERE ID_cliente=?");
        $stmt->bind_param("s", $id);
        if($stmt->execute()){
            echo json_encode(["message"=>"eliminado existosamente"]);
        }else{
            http_response_code(500);
            echo json_encode(["error"=>"todo mal"]);
        }
        break;

    default;
    http_response_code(405);
    echo json_encode(["error"=>"no permitido"]);
}
$conn->close();
?>