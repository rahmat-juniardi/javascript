function deretAngka(angka) {
  var i = 1;
  var deret = '';
  while ( i <= angka) {
    if (i % 3 === 0) {
      deret += "NIO ";
    }else if (i % 5 === 0) {
      deret += "MIC ";
    }else if (i % 3 === 0 && i % 5 === 0) {
      deret += "NIOMIC ";
    }else {
      deret += i + " ";
    }
    i++;
  }
  return deret;
}

console.log(deretAngka(10));
console.log(deretAngka(20));
console.log(deretAngka(30));
