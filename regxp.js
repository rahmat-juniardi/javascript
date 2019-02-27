function panggilRegxp() {
  let str = "abcdefghijklmnopxrstuvwxyz-abcdefghijklmnopxrstuvwxyz";

  console.log(str.search(/e/))
  console.log(str.search(/K/)); // K tidak ditemukan maka hasil "-1"
  console.log(str.search(/K/i));  // dengan FLAGS "i" maka akan mengabaikan hurud BESAR dan kecil

  console.log(str.match(/c/));  //mencari dan menjadi array, TANPA "g"/global program mencari sekali saja dan tidak meneruskan
  console.log(str.match(/c/g))  //menggunakan "g" maka pencarian akan global ATAU keseluruhan/sampai habis
  console.log(str)


}

panggilRegxp()
