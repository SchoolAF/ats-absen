import { absenURL } from "./../config/url.js";
import { generateAbsenTable } from "./../temp/absen.js";

function displayAbsen(karyawanData) {
    const tableBody = document.getElementById('absensi-tabel');
    tableBody.innerHTML = '';

    karyawanData.forEach(absen => {
        const row = document.createElement('tr');
        row.className = "bg-white border-b dark:bg-zinc-800 dark:border-zinc-700";
        row.innerHTML = generateAbsenTable(absen);
        tableBody.appendChild(row);
    });
}

export function getAbsen() {
    console.log('Fetching Absen Data...');
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(absenURL, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Fetched Absen Data:', data.data);
            displayAbsen(data.data);
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
}

window.onload = getAbsen;