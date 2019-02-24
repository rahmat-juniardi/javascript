function balikKata(kata) {
 // return kata.split('').reverse();
 var result = "";
 var jml = kata.length-1;

for (jml ; jml >= 0 ; jml--) {
  result += kata[jml] ;
}

 return result;

}



// testCase
console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))
