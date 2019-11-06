<?php
// Projekt - Webbutveckling III - Moa Hjemdahl 2019
include('includes/header.php');
?>

    <h2 class="pageName">Portfolio</h2>

    <!-- Table -->
    <table id="table">
    </table>

    <!-- Update form -->
    <h3>Uppdatering</h3>
    <form id="updateForm">
        <label for="title">Titel:</label>
        <input type="text" name="title" id="uTitle" class="inputs"> 
        <label for="url">URL:</label>
        <input type="text" name="url" id="uUrl" class="inputs">
        <label for="img">Bild:</label>
        <input type="text" name="img" id="uImg" class="inputs">
        <label for="info">Information:</label>
        <input type="text" name="info" id="uInfo" class="inputs">
        <button id="update">Uppdatera</button>
    </form>

    <!-- Add form -->
    <h3>Lägg till nytt</h3>
    <form id="form">
        <label for="title">Titel:</label>
        <input type="text" name="title" id="title" class="inputs"> 
        <label for="url">URL:</label>
        <input type="text" name="url" id="url" class="inputs">
        <label for="img">Bild:</label>
        <input type="text" name="img" id="img" class="inputs">
        <label for="info">Information:</label>
        <input type="text" name="info" id="info" class="inputs">
        <button id="add">Lägg till</button>
    </form>

    <!-- JavaScript -->
    <script src="js/portfolio.js"></script>
</body>
</html>