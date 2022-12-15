<?php 

$con = mysqli_connect("localhost", "root", "", "oushe-store");

if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
} else {
    mysqli_query($con, "SET time_zone='+00:00'");
    date_default_timezone_set("UTC");
}
?>