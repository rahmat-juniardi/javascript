function objectsproperty(){
    var mobil = {
        type: 'Sedan',
        harga: 100000000,
        warna: 'Putih',
        tahun:[2000,2001,2002,2003],
    }
    console.log(mobil.harga);
    mobil.harga = 200000000;
    console.log(mobil.harga);
}

objectsproperty();