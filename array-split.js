function panggilSplit() {
  var kalimat = "kita sedang belajar js";
  console.log(kalimat);
  var result = kalimat.split("  "); // "" = per Char(space include) , " " = per kata(space tidak include), "  " = per kalimat(space include)

  return result;
}

console.log(panggilSplit());
