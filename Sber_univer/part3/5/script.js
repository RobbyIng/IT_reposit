// 5.1

// const order = {
//     productName: "Велосипед",
//     costomerName: "Саша",
//     salesName: "Петя",
//     totalPrice: 15000
// }
// const descriptor = Object.getOwnPropertyDescriptor(order, 'totalPrice');
// console.log(descriptor);

// 5.2
// const employees = {
//     firstName: "Петя",
//     lastName: "Иванов",
//     ratePerDay: 2500,
//     workingDays: 5,
//     getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
// }
// let str = '';
// for (let item in employees) {
//     if (typeof(employees[item]) !== "function") str += `${item}, `; 
// }
// let result = str.slice(0, str.length - 2); 
// console.log(result);

// 5.3

