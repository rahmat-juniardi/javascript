function panggilregxp(value) {
    var ambilData = value.match(/ke|Bulan/g); // mengambil yang ingin dicari saja "ke & Bulan"
    console.log(ambilData);

    var ambilData = value.match(/[ke]/g); // mengambil huruf yang ada di kurawal BUKAN "kata", yg dicari huruf "k" dan "e"
    console.log(ambilData);

    // Penggunaan NOT
    var ambilData = value.match(/[^ke]/g); // mengambil YANG BUKAN/ KECUALI huruf "k" dan "e"
    console.log(ambilData);

    var ambilData = value.match(/[a-i]/g); // mengambil huruf dari "a" kecil sampai "i" kecil
    console.log(ambilData);
}

panggilregxp("Bulan ke 1 sd ke 4");