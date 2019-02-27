function panggilNestedArray(velue) {
  var result = [];
  var result2 = [];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 3; j++) {
      result.push(velue[j][i])
    }
    result2.push(result);
  }
  console.log(result2);

}

var nestedArray = [
  [1,2,3,4],
  ['Mark Zuckerberg','Elon Mush', 'Bill Gates', 'Steve Jos'],
  ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray);
