// 1 - Sarapan
// 2 - Makan Siang
// 3 - Makan Malam
// 4 - Sarapan
// 5 - Makan Siang
// 6 - Makan Malam


const makanJadwal = ['Sarapan', 'Makan Siang', 'Makan Malam']
counter = 1;

const countdown_data = (arrayTable, i) => {
    while (i < 20) {
        for (j = 0; j < arrayTable.length; j++) {
            console.log(i +' - '+makanJadwal[j]);
            i++;
        }
    }
}

countdown_data(makanJadwal, counter);