// const road = " 15 km"
// console.log(typeof(parseFloat((road.replace("km", "")*0.62).toFixed(1))));

const symbols = "g5fscesc";
console.log(Number.isInteger(parseFloat(symbols[0])) ? "Первый символ цифра" : "Первый символ не цифра");