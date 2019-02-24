function ganjilGenap() {
  var bilanganGenap = [];
  var bilanganGanjil = [];
  for (var i = 1; i <= 30; i++) {
    if( i % 2 ==! 0){
      bilanganGanjil.push(i);
    }else{
      bilanganGenap.push(i);
    }
  }
  console.log(bilanganGanjil);
  return bilanganGenap;
}

console.log(ganjilGenap());
