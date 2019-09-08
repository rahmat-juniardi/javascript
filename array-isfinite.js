function panggilisFinite(){
    var a = isFinite([1,2,3,4,5]);
    var b = isFinite(["Jakarta","Lampung","depok"]);
    var c = isFinite([1,2,3,"Hello","Niomic"]);
    var d = isFinite(-9939.32);
    // isFinite() fungsi boolean pada variable jika nilai nya terbatas maka false, tidak terbatas = true

    console.log(a); //false
    console.log(b); //false
    console.log(c); //false
    console.log(d); //true
    
    
    
}
panggilisFinite();