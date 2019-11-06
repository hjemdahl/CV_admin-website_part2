<?php
// Projekt - Webbutveckling III - Moa Hjemdahl 2019

//Start session
if(session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Enable error reporting
error_reporting(-1); // Report all type of errors
ini_set("display_errors", 1); // Display all errors