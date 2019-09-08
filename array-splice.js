function panggilSplice() {
  var kota = ['jakarta','medan','padang','malang']
  console.log(kota)
  //kota.splice(2,1,'palembang')
  //  2 = menentukan lokasi , 1 = 1(satu) data diposisi tersebut akan DI-HAPUS

  kota.splice(2,2,"Solo");
  return kota;
}

console.log(panggilSplice())
