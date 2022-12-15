<?php

include_once "user.php";

die(json_encode([
    "cookie" => $cookie,
    "id" => $id ?? null,
    "email" => $email ?? null
]));
?>