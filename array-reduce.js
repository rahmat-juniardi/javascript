const array1 = [1 ,2 ,3 ,4 ];
const reducer = (accumulator, currentValue) => accumulator - currentValue;
// menambahkan keseluruhan element tanpa menggunakan perulangan

console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 23));