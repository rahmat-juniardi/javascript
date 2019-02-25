function panggilNestedArray(velue) {
  for (var i = 0; i < velue.length; i++) {
    console.log("id : ", velue[i][0]);
    console.log("name : ", velue[i][1]);
    console.log("company : ", velue[i][2]);
    console.log('\n');
  }
}

var nestedArray = [
  [1,"Mark Zuckerberg", "Facebook"],
  [2, "Elon Mush", "Tesla"],
  [3, "Bill Gates", "Microsoft"],
  [4, "Steve Jobs", "Apple"],
]

panggilNestedArray(nestedArray)
