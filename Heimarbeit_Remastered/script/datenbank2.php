<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ourbase";

$conn = mysqli_connect($servername, $username, $password, $dbname);
$result = mysqli_query($conn, "SELECT * FROM ourtable");
$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

echo json_encode($data);
?>