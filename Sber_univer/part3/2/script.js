// let values = ["Строка", true, "Число", "Объект", "Не число", false];
// for (let i = 0; i< values.length; i++)
// if (typeof(values[i]) === "boolean") {
// values[i] = "Булевый тип";
// break;
// }
// console.log(values);

//2.2
// const partNumbers = ["REGRG34FH","RGREEGT","354254","54GREG34FG"]
//     const filtered = partNumbers.filter(e => /\d{2}\D{2}$/.test(e));
//     console.log(filtered);

//2.3

//  const layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>33";
// const layout = "<p>Привет друзья!</p>"
// const output = [];
// let chislo = '';
// for (let i = 0; i < layout.length; i++){
//     if (Number.isInteger (parseInt(layout[i]))) {chislo += layout[i]; console.log(typeof(chislo));}
//     else if (chislo !== '') { output.push(parseInt(chislo)); chislo = ''; }
//     if ((i+1 === layout.length) && (chislo !== '')) output.push(parseInt(chislo));
// }
// const result = output.map(e => e % 2 === 0 ? e**2 : e);
// // output = layout.map(e => parseInt(e))
// console.log(result);

//2.4

// const tasks = [
//     {title: "Умыться" , completed: true},
//     {title: "Сделать зарядку" , completed: true},
//     {title: "Приготовить завтрак" , completed: false}
// ]

// const titles = tasks.map(e => e.title);
// console.log(titles);

//2.5  

// const values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"];
// const result = [];
// const startIndex = values.findIndex(e => e === true || e === false);
// let endIndex = 0;
// for (let i = values.length-1; i >=0; i--){
//     if (typeof(values[i]) === 'boolean') {endIndex = i; break;}
// }

// for (let item = startIndex; item <= endIndex; item++){
//     result.push(values[item]);
// }
// console.log(result);

//2.6

// const values = [10, 185, 11200, 9800];

// let result = values.find(e => ((e/1000 >= 1) && (e/1000 <= 10))); 
// console.log(typeof(result) === "number");

//2.7

// const values = [10, 185, 11200, 980];

// let result = values.findIndex(e => ((e/1000 >= 1) && (e/1000 <= 10))); 
// console.log((result !== -1) ? result : "Искомый элемент не был найден");

//2.8

// users = [
//     {login: "user1", role: "Admin"},
//     {login: "user2", role: "State user"},
//     {login: "user3", role: "Moderator"}
// ]

// console.log(users.findIndex(({role}) => role.includes(' ')));

//2.9
// const array = [[1,2,3],[1,2],[1,2,3,4]];

// console.log(array.sort ((a,b) => a.length - b.length));

//2.10

// const randValues = ["Банан", 3, "Апельсин", 2, "Вишня"];
//  let arrDigits = randValues.filter(e => typeof(e) === "number");
//  let arrWords = randValues.filter(e => typeof(e) === "string");
 
//  const sortFirst = (a,b) => {
//  if (a[0] > b[0]) return 1;
//  if (a[0] < b[0]) return -1;
//  return 0;
//  }

// arrDigits.sort ((a,b) => a - b);
// arrWords.sort (sortFirst);


// console.log(arrDigits.concat(arrWords));

//2.11

// const words = ["Заказ", "Такси", "Доход", "vохоv", "Такси", "Такси", "Такси"];

// function polindr(str) {
//     for (let i = 0; i < str.length/2; i++){
//         if (str[i].toUpperCase() !== str[str.length-1-i].toUpperCase()) return false;
//     }
//     return true;
// }
// let count = 0, result = [];
// for (let item of words) {
//     if (polindr(item)) count +=1;
// }

// result.push(count);
// result.push(words.length - count);
// console.log(result);

// 2.12
// const dates = "23.04.1996 07.10.2002 15.08.1945";
// const result = dates.split(".").join("/").split(" ");
// console.log(result);

// 2.13
// const tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140.";

// const result = {}, arr2 = [];

// const arr1 = tickets.split(". ");

// for (let i = 0; i < arr1.length; i++){
//     arr1[i] = arr1[i].replace(/[:.,]/g, '');
//     arr2[i] = arr1[i].split(' ');
//     let str = arr2[i].shift().toLowerCase();
//     result[str] = arr2[i];
// }

// console.log(result);

// 2.14

const numbers = [10, 20, 33, 55, 100];
let statement = false;
const sum = numbers.reduce(function(previousValue, currentItem, currentIndex) {
    
    if ((previousValue + currentItem > 50) && !statement) {statement = true; console.log(currentIndex);}
    return previousValue + currentItem
  }, 0)
