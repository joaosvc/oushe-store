<?php

include_once "user.php";

if (isset($id, $token, $secure)) {
    die(json_encode($user));
}

die(json_encode([]));
?>