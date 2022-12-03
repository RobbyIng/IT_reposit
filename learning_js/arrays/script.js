//exercise 1
// const numbers = arrayFromRange(-10, -4);
// console.log(numbers);

// function arrayFromRange(min, max){
//     const array = [];
//     for (let item = min; item <= max; item ++)
//     array.push(item);
//     return array;
// }
//exercise 2

// const array = [1, 2, 3, 4];

// console.log(includes(array, 3));

// function includes (array, searchElement){
//     for (let element of array)
//     if (element === searchElement) return true;
//     return false;
// }

//exercise 3

const numbers = [1, 2, 3, 1, 5, 1, 7, 9, 8];

const output = except(numbers, [1, 7]);

console.log(output);
function except(numbers, exceptArray){
const outputArray = [];
for (let element of numbers)
    if (!exceptArray.includes(element)) outputArray.push(element)
return outputArray;

}
