<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "_web2";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["error" => "error de conexión: " . $conn->connect_error]));
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $id = $_GET['id'] ?? null;
        if ($id) {
            $stmt = $conn->prepare("SELECT * FROM pets WHERE id = ?");
            $stmt->bind_param("s", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            $pet    = $result->fetch_assoc();
            if ($pet) {
                echo json_encode($pet);
            } else {
                http_response_code(404);
                echo json_encode(["error" => "mascota no encontrada"]);
            }
        } else {
            $result = $conn->query("SELECT * FROM pets");
            $pets   = [];
            while ($row = $result->fetch_assoc()) {
                $pets[] = $row;
            }
            echo json_encode($pets);
        }
        break;

    case 'POST':
        $input   = json_decode(file_get_contents('php://input'), true);
        $id      = $input['id']      ?? uniqid();
        $nombre  = $input['nombre']  ?? '';
        $edad    = $input['edad']    ?? 0;
        $raza    = $input['raza']    ?? '';
        $peso    = $input['peso']    ?? 0;
        $idDueno = $input['idDueno'] ?? '';
        $stmt    = $conn->prepare("INSERT INTO pets (id, nombre, edad, raza, peso, idDueno) VALUES (?,?,?,?,?,?)");
        $stmt->bind_param("ssisds", $id, $nombre, $edad, $raza, $peso, $idDueno);
        if ($stmt->execute()) {
            http_response_code(201);
            echo json_encode(["message" => "mascota creada", "id" => $id]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "error al crear mascota"]);
        }
        break;

    case 'PUT':
        $input   = json_decode(file_get_contents('php://input'), true);
        $id      = $input['id'];
        $nombre  = $input['nombre'];
        $edad    = $input['edad'];
        $raza    = $input['raza'];
        $peso    = $input['peso'];
        $idDueno = $input['idDueno'];
        $stmt    = $conn->prepare("UPDATE pets SET nombre=?, edad=?, raza=?, peso=?, idDueno=? WHERE id=?");
        $stmt->bind_param("sisdss", $nombre, $edad, $raza, $peso, $idDueno, $id);
        if ($stmt->execute()) {
            echo json_encode(["message" => "mascota actualizada"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "error al actualizar mascota"]);
        }
        break;

    case 'DELETE':
        $id = $_GET['id'] ?? null;
        if (!$id) { http_response_code(400); echo json_encode(["error" => "id requerido"]); break; }
        $stmt = $conn->prepare("DELETE FROM pets WHERE id=?");
        $stmt->bind_param("s", $id);
        if ($stmt->execute()) {
            echo json_encode(["message" => "mascota eliminada"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "error al eliminar mascota"]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "método no permitido"]);
}

$conn->close();
?>