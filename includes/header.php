<?php
// Projekt - Webbutveckling III - Moa Hjemdahl 2019
include('includes/config.php');

// If session is not set, send back to login page
if(!isset($_SESSION['username'])) {
    header("Location: login.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Sedgwick+Ave+Display&display=swap" rel="stylesheet">
    <title>Admin</title>
</head>
<body> 
    <nav>
        <ul>
            <li><a href="portfolio.php">Portfolio</a></li>
            <li><a href="studies.php">Studier</a></li>
            <li><a href="work.php">Jobb</a></li>
            <li><a href="logout.php">Logga ut</a></li>
        </ul>
    </nav>