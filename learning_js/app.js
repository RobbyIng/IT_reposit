// function max(a,b) {
//     return (a > b) ? a : b;
// }
// function isLanscape(width, height){
//     return (width > height);
// }
// function fizzBazz (input) {
//  if (typeof(input) !== "number") return "Not a number";
//  if ((input % 3 === 0) &&  (input % 5 ===0)) return "FizzBazz"; 
//  if (input % 3 ===0) return "Fizz";
//  if (input % 5 ===0) return "Bazz"; 
//  return input;
// }
// function checkSpeed (actSpeed){
//     const speedLimit = 70;
//     const speedPerPoint = 5;
// if (actSpeed < speedLimit + speedPerPoint) return "OK";
//     let f = Math.floor((actSpeed - speedLimit) / speedPerPoint);
//     return (f < 12) ? f : "Licence suspended";
// }
// function showNumbers(limit){
//     for (let i = 0; i <= limit; ++i){
//     const message = (i % 2 === 0) ? "EVEN" : "ODD";
//     console.log(i,message);  
//     }    
// }
// function countTruthy(array){
//     const falsyArray = [undefined, null, "", false, 0, NaN];
//     let counter = 0;
//     for (let i of array){
//         if (i) counter += 1;
//     }
//     return counter;
// }
// const movie = {
//     title: "a",
//     releaseYear: 1991,
//     rating: 4.5,
//     director: "Boss"
// };
// function showProperties(movie){
// for (const property in movie)
//     if (typeof(movie[property]) === "string")
//     console.log(property, movie[property]);
// }
// function sum (number){
// let sum = 0;
//     for (let i = 1; i <= number; i++)
// if (i % 3 == 0 || i % 5 == 0) sum +=i;

// return sum;
// }


// function calculateGrade(marks){
// const average = calculateAverage(marks);

//     if (average < 60) return "F";
//     if (average < 70) return "D";
//     if (average < 80) return "C";
//     if (average < 90) return "B";
//     return "A"; 
// }

// function calculateAverage(array){
//     let sum = 0;

//     for (const value in array) sum += array[value];
//     return sum / array.length;
// }    

// function showStars(rows) {
//     let star = "";
//     for (let row = 1; row <= rows; row++){
//     star += "*";
//     console.log(star);    
//     }
// }

// function isPrimeFun(value) {
//     for (let factor = 2; factor <= value/2; factor++)
//         if (value % factor === 0) return false;

//     return true;
// }

// function showPrime(limit) {
// for (let number = 2; number <= limit; number++)   
// if (isPrimeFun(number)) console.log(number);
// }

// showPrime(100);
// // let word_1 = "??????????????????", word_2 = "??????????????";
// // console.log(word_1 + " " + word_2);
// const word_1 = "??????????", word_2 = "????????????";
// const result = word_1 + " " + word_2;
// console.log(result);

// let name = "????????????????";
// let last_name = "\n????????????????????";

// last_name = last_name.trim();
// console.log(name.trim().length+last_name.trim().length);

// let obj = {
//     name: "????????????????",
//     last_name:"????????????????",
//     age: 38
// };

// console.log(parseInt("twenty"));

// console.log(parseFloat("100px"));console.log(parseFloat("10a")*parseFloat("7b")*parseFloat("3c"));
// const price = "100px";
// console.log(parseInt(price));
// if (isNaN(parseInt(price))) console.log("???? ??????????");
// else if (parseInt(price) <= 0) console.log("?????????? ???? ????????????????????");
// else console.log(parseInt(price));

// if (a > b && a > c) console.log(a);
// else if (b > a && b > c) console.log(b);
// else console.log(c);

// let activity = "";

// if (weather === "clear") {
//     if (temp >= 25) activity = "golf";
//     if (temp > 10 && temp <= 24) activity = "bowling";
// }
// else activity = "hiking";
// const task = "??????????????????????????";

// switch (task){
//     case "??????????????": console.log("delete");
//             break;
//     case "??????????????????????????": console.log("rename");
//     break;
//     case "??????????????????????????": console.log("edit");
//     break;
//     default: break;
//     }
    // switch (sign){
    //     case "+": console.log(a+b);
    //             break;
    //     case "-": console.log(a-b);
    //     break;
    //     case "/": console.log(a/b);
    //     break;
    //     case "*": console.log(a*b);
    //     break;
    //     default: break;
    //     }
// let word = "??????????????????";
//     let result = "";
//     for (let i = 0; i < word.length; i++){
//     result = word[i]+result;
//     console.log(word);
//     }
//     word.toLowerCase() == result.toLowerCase() ? console.log("?????????? ???????????????? ??????????????????????!") : console.log("?????????? ???? ???????????????? ??????????????????????!");


// let arr = [];
// arr[5] = 5;
// console.log(arr);

// console.log(String([1, true, [], {}]));

// function makeCounter() {
//     let count = 0;
  
//     return function() {
//       return count++;
//     }
//   }
  
//   const counter = makeCounter();
  
//   counter()
//   console.log(counter());

// array = [1, 2, 3, 4];
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
//   
// console.log((10/"2"));

// alert("12" / 0);

let a;
console.log(typeof typeof 1);