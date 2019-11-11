// Projekt - Webbutveckling III - Moa Hjemdahl 2019

// Variables
const url = 'http://studenter.miun.se/~mohj1800/web3/projekt/rest/cv.php/api/studies';
var add = document.getElementById('add');
var upd = document.getElementById('update');

// Eventlisteners
window.onload = getStudies;
add.addEventListener('click', addStudies);
upd.addEventListener('click', updateStudies);

//Function to get studies from REST
function getStudies() {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {

        //Varable for table
        let output = '<tr><th>Skola</th><th>Program</th><th>Kurs</th><th>Startdatum</th><th>Slutdatum</th><th></th><th></th></tr>';

        //Loop trough studies
        data.forEach(studie => {
            output +=`
                <tr>
                    <td>${studie.school}</td>
                    <td>${studie.program}</td>
                    <td>${studie.course}</td>
                    <td>${studie.startDate}</td>
                    <td>${studie.endDate}</td>
                    <td><button onclick="deleteStudies(${studie.id})">Radera</button></td>
                    <td><button onclick="fillForm(${studie.id},'${studie.school}','${studie.program}','${studie.course}','${studie.startDate}','${studie.endDate}')">Uppdatera</button></th>
                </tr>
            `;
        })
    document.getElementById('table').innerHTML = output;
    })
    // Catch error if exists and writes to console
    .catch((err) => console.log(err))
}

// Function to delete studies
function deleteStudies(id) {
    fetch(url + '/' + id, {
        method: 'DELETE'
    })
    .then((res) => res.json())
    .then(() => {
        getStudies();
    })
}

// Function to add studies
function addStudies(e) {
    e.preventDefault();

    // Data from form to JSON
    let formData = JSON.stringify({
        school: document.getElementById('school').value,
        program: document.getElementById('program').value,
        course: document.getElementById('course').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value
    });
    
    // Send JSON to REST webservice
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    })
    .then((res) => res.json())
    .then(() => {
        getStudies();
    })
    .catch((err) => console.log(err)) // Catch error if exists and writes to console

    // Clear form
    document.getElementById('form').reset();
}

// Function to fill form
function fillForm(i, s, p , c, sd, ed) {
    document.getElementById('uSchool').value = s;
    document.getElementById('uProgram').value = p;
    document.getElementById('uCourse').value = c;
    document.getElementById('uStartDate').value = sd;
    document.getElementById('uEndDate').value = ed;
    document.getElementById('update').name = i;
}

// Function to update studies
function updateStudies(n) {

    n.preventDefault();

    var id = document.getElementById('update').name;

    // Data from form to JSON
    let formData = JSON.stringify({
        id: document.getElementById('update').name,
        school: document.getElementById('uSchool').value,
        program: document.getElementById('uProgram').value,
        course: document.getElementById('uCourse').value,
        startDate: document.getElementById('uStartDate').value,
        endDate: document.getElementById('uEndDate').value
    });

    // Send JSON to REST webservice
    fetch(url + '/' + id, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: formData
    })
    .then((res) => res.json())
    .then(() => {
        getStudies();
    })
    .catch((err) => console.log(err)) // Catch error if exists and writes to console

    // Clear form
    document.getElementById('updateForm').reset();
}