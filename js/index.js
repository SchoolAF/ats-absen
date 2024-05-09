import { getAbsen } from "./controller/absen.js";
import { getKaryawan } from "./controller/karyawan.js";

function loadIndex() {
    getKaryawan()
    getAbsen()
}

window.onload = loadIndex;