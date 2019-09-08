function panggilObject(){
    var mahasiswa = {
        nama : "Adi",
        umur : 23,
        jurusan : "Teknik Informatika",
        semester : 4,
    }

    for(var x in mahasiswa){
        console.log(mahasiswa[x]);
    }
}
panggilObject();