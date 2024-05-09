export function generateKaryawanTable(karyawan) {
    return `
    
        <th scope="row" class="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">
            ${karyawan.nama}
        </th>
        <td class="px-6 py-4">
            ${karyawan.username}
        </td>
        <td class="px-6 py-4">
        <a href="absensi.html?username=${karyawan.username}">Lihat</a>
        </td>
    `;
}