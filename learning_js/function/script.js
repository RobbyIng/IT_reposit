// excercise 1
// function sum(...items){
//   if (Array.isArray(items[0]) && items.length === 1) items = [...items[0]];
// return items.reduce((a, c) => a + c);
// }

// console.log(sum([1, 2, 3, 4, 5, 6]));


// excercise 2
// const circle = {
// radius: 2,
// get area() {
//     return Math.PI*this.radius*this.radius;
// }
// }
// console.log (circle.area);

// excercise 3

try {
// const numbers = [1, 2, 3, 1, 5, 1, 1, 7, 9, 8];
        const numbers = true;
        const count = countOccurrences(numbers, 1);
        console.log(count);
}
catch (g) {
console.log(g.message);
}
s
function countOccurrences (array, searchElement) {
    if (!Array.isArray(array)) 
    throw new Error('You set not array of numbers');

    return output = array.reduce ((accumulator, currentValue) => {
        const occurance = (currentValue === searchElement) ? 1 : 0;
        return accumulator + occurance;
    }, 0);
}