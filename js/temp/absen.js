export function generateAbsenTable(absen) {
    return `
    <th scope="row" class="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">
        ${absen.waktu_absen}
    </th>
    <td class="px-6 py-4">
        ${absen.username}
    </td>
    <td class="px-6 py-4">
        ${absen.status}
    </td>
    `;
}