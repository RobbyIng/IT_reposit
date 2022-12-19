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

// const firstName = "Александр", lastName = "Петров";

// const user = {
//    firstName: firstName,
//    lastName: lastName,
//    get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//    },
//    set fullName(a) { 
//     let splited = a.split(' ');
//     this.firstName = splited[0];
//     this.lastName = splited[1];
//     }    
// }

// 5.4

// const name = "Pizza",
// phone = "81234567890"

// class Delivery {
//     constructor(name, phone) {
//         this.name = name;
//         this.phone = phone;

//     }
//     get validPhone() {
//     return this.phone.slice(0,1) === "+";
//     }
// }

// const deliveryName = new Delivery(name, phone);

// 5.5
class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}
class User extends Permissions{
    constructor (name, create, read, update, remove) {
        super(create, read, update, remove);
        this.name = name;
    }
}

const pe1 = Permissions('Bdfy');

// 5.6
// const array = [2, 4, 7, 8, 1],
// num = 2

// function queue(num, ...arr) {
//     let sum = 0;
//     arr.sort((a,b) => a-b);
//     console.log(arr);
//     for (let i = 0; i < num; i++) {
//         sum += arr[i];    
//     }

//     return sum;
// }

// console.log(queue(num, ...array));