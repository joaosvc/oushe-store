<?php

include_once "user.php";

$imageId = $_POST['imageId'] ?? null;
$image = $_FILES['change-profile'] ?? null;
$savePath = $_POST['savePath'] ?? null;

if ($imageId && $image && $savePath) { 
    $tmp_name = $image['tmp_name'];
    $path = ".$savePath/$imageId";

    foreach (scandir($localPath = ".$savePath") as $file) {
        $currentPath = "$localPath/$file";
        if ($file !== "." && $file !== ".." &&
            pathinfo($file, PATHINFO_FILENAME) == pathinfo($imageId, PATHINFO_FILENAME)) {
            unlink($currentPath);
        }
    }
    if (file_exists($path)) {
        unlink($path);
    }

    if (is_uploaded_file($tmp_name)) {
        if (move_uploaded_file($tmp_name, $path)) {
            $stmt = $con->prepare("UPDATE users SET profile = ? WHERE id = ?");
            $stmt->bind_param("si", $imageId, $id);
            $stmt->execute();
            $stmt->close(); 

            die("moved.uploaded");
        } else {
            die("save.image.error");
        }
    } else {
        die("load.image");
    }
}