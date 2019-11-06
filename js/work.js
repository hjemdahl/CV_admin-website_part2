// Projekt - Webbutveckling III - Moa Hjemdahl 2019

// Variables
const url = 'http://studenter.miun.se/~mohj1800/projekt/rest/cv.php/api/work';
var add = document.getElementById('add');
var upd = document.getElementById('update');

// Eventlisteners
window.onload = getWork;
add.addEventListener('click', addWork);
upd.addEventListener('click', updateWork);

//Function to get work from REST
function getWork() {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {

        //Varable for table
        let output = '<tr><th>Roll</th><th>Arbetsgivare</th><th>Startdatum</th><th>Slutdatum</th><th></th><th></th></tr>';

        //Loop trough work
        data.forEach(job => {
            output +=`
                <tr>
                    <td>${job.role}</td>
                    <td>${job.employee}</td>
                    <td>${job.startDate}</td>
                    <td>${job.endDate}</td>
                    <td><button onclick="deleteWork(${job.id})">Radera</button></td>
                    <td><button onclick="fillForm(${job.id},'${job.role}','${job.employee}','${job.startDate}','${job.endDate}')">Uppdatera</button></th>
                </tr>
            `;
        })
    document.getElementById('table').innerHTML = output;
    })
    // Catch error if exists and writes to console
    .catch((err) => console.log(err))
}

// Function to delete work
function deleteWork(id) {
    fetch(url + '/' + id, {
        method: 'DELETE'
    })
    .then((res) => res.json())
    .then(() => {
        getWork();
    })
}

// Function to add work
function addWork(e) {
    e.preventDefault();

    // Data from form to JSON
    let formData = JSON.stringify({
        role: document.getElementById('role').value,
        employee: document.getElementById('employee').value,
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
        getWork();
    })
    .catch((err) => console.log(err)) // Catch error if exists and writes to console

    // Clear form
    document.getElementById('form').reset();
}

// Function to fill form
function fillForm(i, r, e , sd, ed) {
    document.getElementById('uRole').value = r;
    document.getElementById('uEmployee').value = e;
    document.getElementById('uStartDate').value = sd;
    document.getElementById('uEndDate').value = ed;
    document.getElementById('update').name = i;
}

// Function to update work
function updateWork(n) {

    n.preventDefault();

    var id = document.getElementById('update').name;

    // Data from form to JSON
    let formData = JSON.stringify({
        id: document.getElementById('update').name,
        role: document.getElementById('uRole').value,
        employee: document.getElementById('uEmployee').value,
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
        getWork();
    })
    .catch((err) => console.log(err)) // Catch error if exists and writes to console

    // Clear form
    document.getElementById('updateForm').reset();
}