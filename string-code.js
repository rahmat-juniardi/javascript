function kodestring() {
    // Belajar pengguaan String pada Javascript

    var kode = "Saya Ingin Makan";
    console.log(kode.charCodeAt(2));
    // menurut Table Ascii index ke-2 / 'y' adalah Dec ke-121
    // charCodeAt untuk konvert string to Dec Ascii
    
    console.log("============================");    
    console.log(String.fromCharCode(55,0x2615,0x2744,0x2f40));
    // fromcharCode untuk konvert Dec/Hex ke string dari Tabel Ascii

    console.log("============================");
    console.log(kode.toLowerCase());
    console.log(kode.toUpperCase());
    // Cara penggunaan Upper dan Lower Case

    console.log("============================");
    console.log(kode.charAt(5));
    // index ke-5 adalah 'I'

    console.log("============================");
    var aku  = "Aku Pintar Memasak";
    console.log(aku.substr(3));
    console.log(aku.substr(3,10));
    console.log(aku.substr(-5,3));
    // substr = mencari/ mengambil suatu bagian string dengan control posisi dan jumlah char yang diambil 
    // substr(start,stop), (posisi mulai, jumlah char yang diambil);

    console.log("============================");
    console.log(aku.slice(3));
    console.log(aku.slice(3, 8));   // mulai index-3, 8-3=5 (5 adalah jumlah char yang akan diambil dari index-ke 3)
    console.log(aku.slice(-5,-3));
    // slice(start,stop), mirip dengan substr tetapi (start > stop) dan (start - stop = jumlah char yang diambil)

    console.log("============================");
    /*
    console.log(aku.split(""));     // string to array per-huruf/char (space include);  
    console.log(aku.split(" "));    // string to array per-kata/word (space not include); */
    console.log(aku.split("  "));   // string to array per-huruf/char (space include); 
    
    console.log("============================");
    var kata= "         Hello World            ";
    console.log(kata);
    console.log(kata.trim());
    // trim() untuk menghilangkan whitespace/ space kanan kiri yang tidak diperlukan didalam string

    console.log("============================");
    var kalimat1 = "Saya";
    var kalimat2 = kalimat1.concat(" Pintar");
    console.log(kalimat2.concat(" dalam"," memasak"," makanan"));

    console.log("============================");
    console.log(aku.includes("Mem"));
    console.log(aku.includes("int"));
    // boolean includes() untuk mengecek apakan ada char tersebut didalam variable yang jawaban hanya true false;

    console.log("============================");
    console.log(aku.startsWith("Aku"));
    console.log(aku.endsWith("Goreng"));
    console.log(aku.startsWith("Pintar",4));
    // startsWith() dan endsWith() = boolean seperti includes hanya saja lebih spesifik 

    console.log("============================");
    var isi = "Ayo Belajar ...";
    console.log(isi.repeat(3));
    console.log("Ayo belajar .".repeat(2));
    // repeat() untuk me-repeat string

    console.log("============================");
    var kon = new String("Belajar Kuy..." + "dsafsdafsf");
    console.log(typeof(kon));
    console.log(kon);
    var konf = kon.toString();
    console.log(typeof(konf));
    console.log(konf);
    var konf2 = kon.valueOf();
    console.log(typeof(konf2));
    console.log(konf2);
    // toString() dan valueOf() untuk mengkonversi object string menjadi string data primitif
    
    console.log("============================");
    var angka = [22,33,11];
    console.log(angka.indexOf(22));
    console.log(angka.indexOf(44));
    // indexOf() untuk mencari posisi suatu element, Jika TIDAK DITEMUKAN maka hasilnya akan -1

    console.log("============================");
    var isi = "Belajar bahasa di Niomic dan mempelajari bahasa java";
    console.log(isi.lastIndexOf("bahasa"));
    console.log(isi.lastIndexOf("bahasa",40));
    // lastIndexOf() , mirip dengan indexOf() hanya saja dicari posisi paling akhir yang dapat ditemukan

    console.log("============================");
    console.log(isi.search("di"));
    console.log(isi.search(/di/));
    // search(), mirip indexOf() untuk pencarian lebih specific

    console.log("============================");
    var isi = "Saya Pintar memasak nasi goreng";
    console.log(isi.match("Pintar"));
    console.log(isi.match(/goreng/));
    // match(), pencarian posisi index untuk dijadikan array berbasis regular expression dan jika tidak ditemukan maka hasil 'null'

    console.log("============================");
    console.log(isi);
    console.log(isi.replace("memasak","mengolah"));
    // replace() untuk mengganti bagian string 
}

kodestring();