function find(){
    var angka = [5, 12, 8, 130, 44];
    var found = angka.find(function(element) {
            return element > 30;
    })
    // find(), pencarian yang diambil yang pertama ditemukan;
    console.log(found);
}
find();