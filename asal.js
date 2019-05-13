function panggilregxp(kata) {
    var result = /html|css/.test(kata);
    if (result === true) {
        console.log("Belajar");
    }else{
    console.log(kata);
    }
}
console.log(panggilregxp("Belajar html"));
console.log(panggilregxp("Belajar java"));
console.log(panggilregxp("Belajar css"));
console.log(panggilregxp("Belajar mysql"));