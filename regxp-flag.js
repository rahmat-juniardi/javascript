function panggilregxp(value) {
    var ambilData = value.match(/\w/g); // \w = mengambil huruf dan angka saja. !character and space
    console.log(ambilData,"jumlah data : " + ambilData.length);

    var ambilData = value.match(/\d/g); // \d = mengambil angka saja
    console.log(ambilData);
    
    var ambilData =value.match(/\s/g); // \s = mengambil spasi saja
    console.log(ambilData);
    console.log("--------------------------------------");
    console.log("--------------------------------------");

    // NOT dari flag
    var ambilData = value.match(/\W/g); // \W mengambil YANG BUKAN "huruf dan spasi"
    console.log(ambilData);

    var ambilData = value.match(/\D/g); // \D mengambil YANG BUKAN "angka"
    console.log(ambilData);

    var ambilData = value.match(/\S/g); // \S mengambil YANG BUKAN "spasi"
    console.log(ambilData);
}

panggilregxp("belajar js 123 *&@@#");