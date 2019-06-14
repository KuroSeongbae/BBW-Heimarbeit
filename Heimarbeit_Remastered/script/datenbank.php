<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ourbase";

$name = $_GET["dname"];
$gebtag = $_GET["dgebtag"];
$ort = $_GET["dort"];
$rolle = $_GET["drolle"];


//write data in database
$mysqli = new mysqli($servername, $username, $password, $dbname);
$mysqli->set_charset("utf8");
$sqlStatement = $mysqli->prepare("INSERT INTO `ourtable` (`name`, `gebtag`, `ort`, `rolle`) VALUES (?, ?, ?, ?)");
$sqlStatement->bind_param("ssss", $name, $gebtag, $ort, $rolle);
$sqlStatement->execute();
$sqlStatement->close();
?>