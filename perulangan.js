function panggilPerulangan() {
  var kota = ['jakarta','medan','solo'];
  var kotaBaru = kota.forEach((item,index,array) => {
    console.log(item);
    console.log(index);
    console.log(array);
  })
  return kotaBaru;
}

panggilPerulangan()
