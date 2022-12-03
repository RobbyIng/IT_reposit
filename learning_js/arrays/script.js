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

// const numbers = [1, 2, 3, 1, 5, 1, 7, 9, 8];

// const output = except(numbers, [1, 7]);

// console.log(output);

// function except(numbers, exceptArray){
//     const outputArray = [];
//     for (let element of numbers)
//         if (!exceptArray.includes(element)) outputArray.push(element)
//     return outputArray;
// }

//exercise 4
// const numbers = [1, 2, 3, 1, 5, 1, 7, 9, 8];

// const output = move(numbers, 4, -3);

// console.log(output);

// function move (numbers, index, offset){
//     const position = index + offset;
//     if (position >= numbers.length || position < 0) {
//         console.error('Invalid offset');
//         return;
//     }
//     const output = [...numbers];
//     const value = output.splice(index, 1)[0];
//     output.splice(position, 0, value);
//     return output;
// }

//exercise 5

// const numbers = [1, 2, 3, 1, 5, 1, 1, 7, 9, 8];

// const count = countOccurrences(numbers, 1);

// console.log(count);

// function countOccurrences (array, searchElement) {
//     return output = array.reduce ((accumulator, currentValue) => {
//         const occurance = (currentValue === searchElement) ? 1 : 0;
//         return accumulator + occurance;
//     }, 0);
// }

//exercise 6
// const numbers = [1, 2, 3, 1, 5, 1, 1, 7, 0, 8];

// const maximum = Math.max(...numbers);

// const maximumRed = numbers.reduce((a,c) => Math.max(a,c));

// console.log(maximumRed);

//exercise 7

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];
// const moviesRated =  [];
// for (let item of movies){
//  if (item.rating > 4 && item.year === 2018) moviesRated.push(item); 
// }
// moviesRated.sort((a, b) => b.rating - a.rating);
// for (let i of moviesRated) {console.log(i.title)};

const titles = movies
.filter(m => m.year === 2018 && m.rating > 4)
.sort((a, b) => a.rating - b.rating)
.reverse()
.map(m => m.title)

console.log(titles);


 