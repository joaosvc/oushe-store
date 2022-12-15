<?php

include_once "user.php";

$imageId = $_POST['imageId'] ?? null;
$savePath = $_POST['savePath'] ?? null;

if ($imageId && $savePath) { 
    $default = "default";
    $path = ".$savePath/$imageId";
    
    if (file_exists($path)) {
        unlink($path);
    }
    
    $stmt = $con->prepare("UPDATE users SET profile = ? WHERE id = ?");
    $stmt->bind_param("si", $default, $id);
    $stmt->execute();
    $stmt->close(); 

    die("profile.removed");
}