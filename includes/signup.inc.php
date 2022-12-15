<?php

include_once "connection.php";

if (isset($_POST['name'], $_POST['lastname'], $_POST['email'], $_POST['password'])) {
    $name = $_POST['name'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $email_stmt = $con->prepare('SELECT id FROM users WHERE (email LIKE ?) LIMIT 1');
    $email_stmt->bind_param('s', $email);
    $email_stmt->execute();

    $count = $email_stmt->get_result()->num_rows;

    if ($count <= 0) {
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $token = bin2hex(openssl_random_pseudo_bytes(20));
        $secure = rand(1000000, 99999999999);

        $stmt = $con->prepare('INSERT INTO users (name, lastname, email, password, token, secure, creation) VALUES (?, ?, ?, ?, ?, ?, now())');
        $stmt->bind_param('sssssi', $name, $lastname, $email, $hash, $token, $secure); 
        $stmt->execute();

        $user_stmt = $con->prepare('SELECT id, token, secure FROM users WHERE email = ?');
        $user_stmt->bind_param('s', $email);
        $user_stmt->execute();

        $user = $user_stmt->get_result()->fetch_assoc();
        $stmt->close(); 

        if ($stmt && $user) {
            setcookie('ID', $user['id'], time() + (10 * 365 * 24 * 60 * 60)); 
            setcookie('TOKEN', $token, time() + (10 * 365 * 24 * 60 * 60));
            setcookie('SECURE', $secure, time() + (10 * 365 * 24 * 60 * 60));
            die('success');
        } else {
            die('database_error');
        }
    } else {
        die('email_already_exists');
    }
} else {
    die('form_error');
}
?>