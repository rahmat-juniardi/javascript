
    var angka = [5, 12, 8, 130, 44];

    function isLargeNumber(element){
        return element > 6;
    }
    console.log(angka.findIndex(isLargeNumber));

    // find.index(), mencari posisi index yang sesuai kondisi dan yang pertama kali ditemukan
    // element > 6 = 1 :12, 2:8 dan seterusnya dan yang ditampilkan adalah yang pertama kali ditermukan
