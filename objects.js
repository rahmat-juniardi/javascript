function panggilObjects() {
  var mobil = {
    type: 'Sedan',
    harga: 2000000,
    warna:'Putih',
    tahun: [2000,2001,2002,2003]
  }

  console.log(mobil)
  console.log(mobil.warna)
  console.log(mobil.type,mobil.harga)
  console.log(mobil.tahun[1])
}

panggilObjects()
