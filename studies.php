<?php
// Projekt - Webbutveckling III - Moa Hjemdahl 2019
include('includes/header.php');
?>

    <h2 class="pageName">Studier</h2>

    <!-- Table -->
    <table id="table">
    </table>

    <!-- Update form -->
    <h3>Uppdatering</h3>
    <form id="updateForm">
        <label for="school">Skola:</label>
        <input type="text" name="school" id="uSchool" class="inputs"> 
        <label for="program">Program:</label>
        <input type="text" name="program" id="uProgram" class="inputs">
        <label for="course">Kurs:</label>
        <input type="text" name="course" id="uCourse" class="inputs">
        <label for="startDate">Startdatum ÅÅÅÅ-MM-DD:</label>
        <input type="text" name="startDate" id="uStartDate" class="inputs">
        <label for="endDate">Slutdatum ÅÅÅÅ-MM-DD:</label>
        <input type="text" name="endDate" id="uEndDate" class="inputs">
        <button id="update">Uppdatera</button>
    </form>

    <!-- Add form -->
    <h3>Lägg till</h3>
    <form id="form">
        <label for="school">Skola:</label>
        <input type="text" name="school" id="school" class="inputs"> 
        <label for="program">Program:</label>
        <input type="text" name="program" id="program" class="inputs">
        <label for="course">Kurs:</label>
        <input type="text" name="course" id="course" class="inputs">
        <label for="startDate">Startdatum ÅÅÅÅ-MM-DD:</label>
        <input type="text" name="startDate" id="startDate" class="inputs">
        <label for="endDate">Slutdatum ÅÅÅÅ-MM-DD:</label>
        <input type="text" name="endDate" id="endDate" class="inputs">
        <button id="add">Lägg till</button>
    </form>

    <!-- JavaScript -->
    <script src="js/studies.js"></script>
</body>
</html>
