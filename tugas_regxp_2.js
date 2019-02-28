function panggilRegxp(velue) {
  var result = /html|css/.test(velue);
if (result === true) {
  console.log(velue);
}else{
  console.log("Belajar ");
}

}

panggilRegxp("Belajar html")
panggilRegxp("Belajar javascript");
panggilRegxp("Belajar css");
panggilRegxp("Belajar php");
