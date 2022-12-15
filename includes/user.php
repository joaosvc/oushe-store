<?php

include_once "connection.php";

$cookie = false;

$id = $_COOKIE['ID'] ?? 2;
$token = $_COOKIE['TOKEN'] ?? "88d8348748e311ff471b9145072ace48fcc12d6b";
$secure = $_COOKIE['SECURE'] ?? "10150582063";

if ($id && $token && $secure) {
    $stmt = $con->prepare('SELECT id, name, lastname, email, password, creation, profile FROM users WHERE (id = ? AND token LIKE ? AND secure = ?) LIMIT 1');
    $stmt->bind_param('isi', $id, $token, $secure);
    $stmt->execute();
    $user = $stmt->get_result()->fetch_assoc();
    $stmt->close(); 

    if ($user) {
        $user = array_merge($user, [
            'id' => $id, 
            'token' => $token, 
            'secure' => $secure
        ]);
        foreach ($user as $k => $v) {
            ${$k} = $v;
        }
        $cookie = true;
    } else {
        setcookie('ID', NULL, 1);
        setcookie('TOKEN', NULL, 1);
        setcookie('SECURE', NULL, 1);
    }
}

?>