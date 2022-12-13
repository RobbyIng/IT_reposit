// const road = " 15 km"
// console.log(typeof(parseFloat((road.replace("km", "")*0.62).toFixed(1))));

// const symbols = "g5fscesc";
// console.log(Number.isInteger(parseFloat(symbols[0])) ? "Первый символ цифра" : "Первый символ не цифра");

//1.8

// const phone = "+712:34567*8,90";
//  console.log(phone.replace(/[,*:]/g,""));

// const re = /\d{1,2}\.\d{1,2}\.(\d{4})/;
// const str = "31.12.2021";
// console.log(str.replace(re, '$1 год')); // 2021 год

//1.9
// const emails = "example@ex.ru primer@primer.com email@com.ru";
// console.log(emails.split(/ /g));

//1.10

// const ticket = "helloBM-12234567:RU";
// console.log(/hello/.test(ticket)); // false
// // console.log(/\w{2}/-/\d{8}/.test(ticket));
// console.log(/\w{2}-\d{8}/.test(ticket));
