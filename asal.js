function asal() {
var arr = [1,2,3];
var removeLast = arr.pop()
var removeFirst = arr.shift()
var addLast = arr.push(11)
var addFirst = arr.unshift(1)
var addAndRemove = arr.splice(1,1,'added')

console.log(removeLast);
console.log(removeFirst);
console.log(addLast);
console.log(addFirst);
console.log(addAndRemove);
return arr;
}

console.log(asal())
