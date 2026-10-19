<?php
$host = "192.0.2.55"; // Your live server IP address
$user = "brightsmile_ftp_user"; // Your live database/FTP user
$password = "SecureProdPass2026!"; // Your live server password
$database = "brightsmile_production_db"; // Your live database name

$conn = mysqli_connect($host, $user, $password, $database);
if (!$conn) {
    die("Database Connection Failed: " . mysqli_connect_error());
}
?>
