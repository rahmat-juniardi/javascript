function asal(umur){
  var minimal= 17;
  var setir = true;

  if (umur >= minimal) {
    console.log("Anda Sudah Dewasa");
    if (setir) {
      console.log("Anda bisa dapat SIM");
    }else{
      console.log("Anda belum bisa dapat SIM")
    }

  }else {
    console.log("Anda Belum Dewasa")
  }
}

asal(18);
