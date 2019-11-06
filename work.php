<?php
// Projekt - Webbutveckling III - Moa Hjemdahl 2019
include('includes/header.php');
?>
    <h2 class="pageName">Jobb</h2>

    <!-- Table -->
    <table id="table">
    </table>

    <!-- Update form -->
    <h3>Uppdatering</h3>
    <form id="updateForm">
        <label for="role">Roll:</label>
        <input type="text" name="role" id="uRole" class="inputs"> 
        <label for="employee">Arbetsgivare:</label>
        <input type="text" name="employee" id="uEmployee" class="inputs">
        <label for="startDate">Startdatum ÅÅÅÅ-MM-DD:</label>
        <input type="text" name="startDate" id="uStartDate" class="inputs">
        <label for="endDate">Slutdatum ÅÅÅÅ-MM-DD:</label>
        <input type="text" name="endDate" id="uEndDate" class="inputs">
        <button id="update">Uppdatera</button>
    </form>

    <!-- Add form -->
    <h3>Lägg till nytt</h3>
    <form id="form">
        <label for="role">Roll:</label>
        <input type="text" name="role" id="role" class="inputs"> 
        <label for="employee">Arbetsgivare:</label>
        <input type="text" name="employee" id="employee" class="inputs">
        <label for="startDate">Startdatum ÅÅÅÅ-MM-DD:</label>
        <input type="text" name="startDate" id="startDate" class="inputs">
        <label for="endDate">Slutdatum ÅÅÅÅ-MM-DD:</label>
        <input type="text" name="endDate" id="endDate" class="inputs">
        <button id="add">Lägg till</button>
    </form>

    <!-- JavaScript -->
    <script src="js/work.js"></script>
</body>
</html>