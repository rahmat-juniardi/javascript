function panggilRegxp() {
  let str = "abcdefghijklmnopxrstuvwxyz- abcdefghijklmnopxrstuvwxyz";
  let kalimat = "satu-dua-tiga-empat-lima"

  console.log(str.search(/e/))
  console.log(str.search(/K/)); // K tidak ditemukan maka hasil "-1"
  console.log(str.search(/K/i));  // dengan FLAGS "i" maka akan mengabaikan hurud BESAR dan kecil
  console.log("============================");

  console.log(str.match(/c/));  //mencari dan menjadi array, TANPA "g"/global program mencari sekali saja dan tidak meneruskan
  console.log(str.match(/c/g))  //menggunakan "g" maka pencarian akan global ATAU keseluruhan/sampai habis
  console.log("============================");

  console.log(kalimat.replace(/-/g," "));// mencari "-", dan diganti dengan " ",atau spasi (bisa apapun), menggunakan "g" agar global/keseluruhan sampai habis
  console.log(kalimat.replace(/-/," (ini spasi) ")); // tidak menggunakan "g" agar ketika sudah KETEMU SEKALI maka akan BERHENTI
  console.log("============================");

  console.log(/satu/.test(kalimat));


}

panggilRegxp()
