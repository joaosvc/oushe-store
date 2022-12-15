<?php

include_once "user.php";

if (isset($_POST['name'], $_POST['lastname'], $_POST['email'], $_POST['password'], $_POST['changePassword'])) {
    $name = $_POST['name'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $changePassword = $_POST['changePassword'] == "true" ? true : false;

    $hash = password_hash($password, PASSWORD_DEFAULT);

    if ($changePassword) {
        $stmt = $con->prepare("UPDATE users SET name = ?, lastname = ?, email = ?, password = ? WHERE id = ?");
        $stmt->bind_param("ssssi", $name, $lastname, $email, $hash, $id);
    } else {
        $stmt = $con->prepare("UPDATE users SET name = ?, lastname = ?, email = ? WHERE id = ?");
        $stmt->bind_param("sssi", $name, $lastname, $email, $id);
    }
    
    $stmt->execute();
    $stmt->close(); 

    if ($stmt) {
        die('user.info.edited');
    } else {
        die('connection.error');
    }
} else {
    die('form_error');
}
?>
?>