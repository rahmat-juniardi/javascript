// http://masputih.com/2015/11/belajar-regular-expression

    // .	Sebarang karakter
    // \d	Sebarang angka, 1 digit, 0 – 9
    // \D	Sebarang karakter yang bukan angka
    // \w	Sebarang angka atau huruf kecil & besar termasuk underscore
    // \W	Sebarang karakter yang bukan huruf, angka, atau underscore
    // \s	Karakter whitespace, spasi, tab, line-break
    // \. untuk mencari titik

function panggilRegExp() {
  var str= "ba bi bu\nba bi bu\nba bi bu";
  var re1 = /^ba/g;
  var re2 = /^ba/gm;

  console.log(str);
  console.log(str.match(re1));
  console.log(str.match(re2));

}

panggilRegExp()
