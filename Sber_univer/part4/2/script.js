// 2.1
// let new_element = document.createElement("p");
// new_element.innerText = "Ура! Мой скрипт отработал верно!";

// let obj = document.getElementById("root");
// obj.appendChild(new_element);

// console.log(obj);

// 2.2

// let new_element = document.createElement("h2");
// new_element.innerText = "Сегодня солнечно, минус 15";

// let obj = document.querySelector(".content");
//  obj.appendChild(new_element);

// console.log(obj);

// 2.3

let new_element = document.createElement("li");
new_element.innerText = "Велосипед";
let ulObj = document.querySelector("ul");
let obj = document.querySelector("li");
ulObj.insertBefore(new_element,obj);

console.log(obj);