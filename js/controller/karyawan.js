import { karyawanURL } from "../config/url.js";
import { generateKaryawanTable } from "/js/temp/karyawan.js";

function displayKaryawan(karyawanData) {
    const tableBody = document.getElementById('karyawan-tabel');
    tableBody.innerHTML = '';

    karyawanData.forEach(karyawan => {
        const row = document.createElement('tr');
        row.className = "bg-white border-b dark:bg-zinc-800 dark:border-zinc-700";
        row.innerHTML = generateKaryawanTable(karyawan); // Pass karyawan object here
        tableBody.appendChild(row);
    });
}

export function getKaryawan() {
    console.log('Fetching Karyawan Data...');
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(karyawanURL, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Fetched Karyawan Data:', data.data);
            displayKaryawan(data.data);
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
}