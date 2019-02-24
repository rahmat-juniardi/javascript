function panggilShift() {
  var kota = ['jakarta','bandung','malang','surabaya','makassar'];
  console.log(kota);
  console.log("=============");
  // kota = kota.shift()

  var kota2 = kota.shift();
  console.log(kota2);

  var kota2 = kota.shift();
  console.log(kota2);

  return kota;
}

console.log(panggilShift());

//    Shift untuk mengambil satu data pertama di-suatu variable
