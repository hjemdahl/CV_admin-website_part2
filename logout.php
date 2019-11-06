<?php
// Projekt - Webbutveckling III - Moa Hjemdahl 2019

//Log out, end session
session_start();
session_destroy();
unset($_SESSION['username']);
header("Location: login.php");