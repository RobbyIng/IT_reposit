// function square(num) {
//     return num **2;
// }
// const num = 2;
// let medSquare = square(num);
// let result = String (medSquare);

// for (let i = 0; i < 2; i++) {
//     medSquare = square(medSquare);
//     result = result + " " + String(medSquare);
// }

// console.log (result);

// const obj = {
//     'first': 'ivan',
//     age: 12
// };
// console.log(obj[1]);
// let key = 'first';
// console.log(obj[key]);
// console.log(obj['first']);
// delete obj[age];
// console.log (obj);

// let obj1 = {color:"red"};
// let obj2 = new Object();

// let count;
// for (i = 10; i<20; i++){
//     count= i+1;
// }
// console.log(count);
let array = [4, 5, 6];
function f1(arr) {
  arr[0] = 'Oops!';
}
f1(array);

console.log(array); // ???