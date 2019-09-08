function panggilPerintahMap(){
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
    dataKota.map((item, index, arr) => {
        console.log(item);
        console.log(index);
        console.log(arr);
    })
}

panggilPerintahMap();