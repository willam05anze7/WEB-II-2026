<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Datos de conexión a la bd
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "_web2"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){ 
    http_response_code(500);
    die(json_encode(["error" => "conexión mala " . $conn->connect_error])); 
}

$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case 'GET':
        $id = $_GET['id'] ?? null;
        if ($id){
            // Buscamos en la tabla productos por id
            $stmt = $conn->prepare("SELECT * FROM productos WHERE id = ?");
            $stmt->bind_param("s", $id); 
            $stmt->execute();
            $result = $stmt->get_result(); 
            $producto = $result->fetch_assoc();
            echo json_encode($producto); 
        } else {
            // Listar todos los productos
            $result = $conn->query("SELECT * FROM productos"); 
            $productos = [];
            while($row = $result->fetch_assoc()){
                $productos[] = $row;
            }
            echo json_encode($productos);
        }
        break;

    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        $id = $input['id'] ?? uniqid();
        $nombre = $input['nombre'];
        $precio = $input['precio'];
        $descripcion = $input['descripcion'];
        
        // Insertamos en la tabla productos
        $stmt = $conn->prepare("INSERT INTO productos (id, nombre, precio, descripcion) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssds", $id, $nombre, $precio, $descripcion); // "s" string, "d" double/numeric

        if($stmt->execute()){
            http_response_code(201);
            echo json_encode(["message" => "producto creado exitosamente", "id" => $id]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "todo mal al crear"]);
        }
        break;
    
    case 'PUT':
        $input = json_decode(file_get_contents('php://input'), true);
        $id = $input['id'];
        $nombre = $input['nombre'];
        $precio = $input['precio'];
        $descripcion = $input['descripcion'];

        // Actualizamos la tabla productos
        $stmt = $conn->prepare("UPDATE productos SET nombre=?, precio=?, descripcion=? WHERE id=?");
        $stmt->bind_param("sdss", $nombre, $precio, $descripcion, $id);

        if($stmt->execute()){
            http_response_code(201);
            echo json_encode(["message" => "producto actualizado exitosamente"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "todo mal al actualizar"]);
        }
        break;

    case 'DELETE':
        $id = $_GET['id'];
        $stmt = $conn->prepare("DELETE FROM productos WHERE id=?");
        $stmt->bind_param("s", $id);
        
        if($stmt->execute()){
            echo json_encode(["message" => "producto eliminado exitosamente"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "todo mal al eliminar"]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "no permitido"]);
}

$conn->close();
?>