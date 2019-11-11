// Projekt - Webbutveckling III - Moa Hjemdahl 2019

// Variables
const url = 'http://studenter.miun.se/~mohj1800/web3/projekt/rest/cv.php/api/portfolio';
var add = document.getElementById('add');
var upd = document.getElementById('update');

// Eventlisteners
window.onload = getPortfolio;
add.addEventListener('click', addPortfolio);
upd.addEventListener('click', updatePortfolio);

//Function to get portfolio from REST
function getPortfolio() {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {

        //Varable for table
        let output = '<tr><th>Titel</th><th>URL</th><th>Bild</th><th>Information</th><th></th><th></th></tr>';

        //Loop trough rows
        data.forEach(row => {
            output +=`
                <tr>
                    <td>${row.title}</td>
                    <td>${row.url}</td>
                    <td>${row.img}</td>
                    <td>${row.info}</td>
                    <td><button onclick="deletePortfolio(${row.id})">Radera</button></td>
                    <td><button onclick="fillForm(${row.id},'${row.title}','${row.url}','${row.img}','${row.info}')">Uppdatera</button></td>
                </tr>
            `;
        })
    document.getElementById('table').innerHTML = output;
    })
    // Catch error if exists and writes to console
    .catch((err) => console.log(err))
}

// Function to delete row
function deletePortfolio(id) {
    fetch(url + '/' + id, {
        method: 'DELETE'
    })
    .then((res) => res.json())
    .then(() => {
        getPortfolio();
    })
}

// Function to add row
function addPortfolio(e) {
    e.preventDefault();

    // Data from form to JSON
    let formData = JSON.stringify({
        title: document.getElementById('title').value,
        url: document.getElementById('url').value,
        img: document.getElementById('img').value,
        info: document.getElementById('info').value
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
        getPortfolio();
    })
    .catch((err) => console.log(err)) // Catch error if exists and writes to console

    // Clear form
    document.getElementById('form').reset();
}

// Function to fill form
function fillForm(i, t, u, img, info) {
    document.getElementById('uTitle').value = t;
    document.getElementById('uUrl').value = u;
    document.getElementById('uImg').value = img;
    document.getElementById('uInfo').value = info;
    document.getElementById('update').name = i;
}

// Function to update portfolio
function updatePortfolio(n) {

    n.preventDefault();

    var id = document.getElementById('update').name;

    // Data from form to JSON
    let formData = JSON.stringify({
        id: document.getElementById('update').name,
        title: document.getElementById('uTitle').value,
        url: document.getElementById('uUrl').value,
        img: document.getElementById('uImg').value,
        info: document.getElementById('uInfo').value
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
        getPortfolio();
    })
    .catch((err) => console.log(err)) // Catch error if exists and writes to console

    // Clear form
    document.getElementById('updateForm').reset();
}