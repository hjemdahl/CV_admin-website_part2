<?php
// Projekt - Webbutveckling III - Moa Hjemdahl 2019
include('includes/config.php');

//Log in user with information from form

$username = "admin";
$password = "admin";

if(isset($_POST['login'])) {
    if($_POST['username'] == $username && $_POST['password'] == $password) {
        $_SESSION['username'] = $username;
        header("Location: portfolio.php");
    } else {
        $message = "<p class='mess'>Felaktigt användarnamn eller lösenord...</p>";
    }
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
    <title>Admin - Logga in</title>
</head>
<body>
    <!-- Log in form -->
    <div class="login">
        <h2>Admingränssnitt CV</h2>
        <h3>Logga in</h3>
        <form method="post" action="login.php" class="form1">
            <label for="username">Användarnamn:</label>
            <input type="text" name="username" id="username" class="input">
            <label for="password">Lösenord:</label>
            <input type="password" name="password" id="password" class="input">
            <input type="submit" value="Logga in" name="login" class="btn">
            <!-- Message output -->
            <?php if (isset($message)) { echo $message; } ?>
        </form>
    </div>
</body>
</html>

