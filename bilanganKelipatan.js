function kelipatan() {
  var bilangan = [];
    for(var i=1; i<= 50; i++){
      if (i%5 === 0) {
        bilangan.push(i);        
      }
    }
    return bilangan;
}

console.log(kelipatan());
