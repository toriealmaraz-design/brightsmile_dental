<?php
$host = "192.0.2.55";
$user = "brightsmile_ftp_user";
$password = "SecureProdPass2026!";
$database = "brightsmile_production_db";

$conn = mysqli_connect($host, $user, $password, $database);
if (!$conn) {
    die("Database Connection Failed: " . mysqli_connect_error());
}
?>
