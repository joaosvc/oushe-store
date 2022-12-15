<?php

include_once "connection.php";

if (isset($_POST['email'], $_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $email_stmt = $con->prepare('SELECT id FROM users WHERE (email LIKE ?) LIMIT 1');
    $email_stmt->bind_param('s', $email);
    $email_stmt->execute();

    $count = $email_stmt->get_result()->num_rows;

    if ($count > 0) {
        $stmt = $con->prepare('SELECT id, password, token, secure FROM users WHERE (email LIKE ? OR name LIKE ?) LIMIT 1');
        $stmt->bind_param('ss', $email, $email);
        $stmt->execute();

        $user = $stmt->get_result()->fetch_assoc();
        $stmt->close(); 

        if ($user) {
            if ($user['password'] == password_verify($password, $user['password'])) {
                setcookie('ID', $user['id'], time() + (10 * 365 * 24 * 60 * 60)); 
                setcookie('TOKEN', $user['token'], time() + (10 * 365 * 24 * 60 * 60));
                setcookie('SECURE', $user['secure'], time() + (10 * 365 * 24 * 60 * 60));
                die('success');
            } else {
                die('incorret_password');
            }
        } else {
            die('database_error');
        }
    } else {
        die('email_not_found');
    }
} else {
    die('form_error');
}
?>