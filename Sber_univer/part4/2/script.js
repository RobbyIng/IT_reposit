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

// let new_element = document.createElement("li");
// new_element.innerText = "Велосипед";
// let ulObj = document.querySelector("ul");
// let obj = document.querySelector("li");
// ulObj.insertBefore(new_element,obj);

// console.log(obj);

// 2.4

// let objects = document.querySelectorAll("div");
// console.log(objects);
// for (item of objects){
//     item.className = "adds";
// }
// console.log(objects);

// 2.5

// let objects = document.querySelectorAll("p");
// console.log(objects);
// let i = 0;
// for (item of objects){
//     i++
//     item.id = `p_${i}`;
// }
// console.log(objects);

// 2.6
// let objects = document.querySelectorAll("p");
// console.log(objects);

//  for (item of objects){
//     if (item.innerText === "Delete")  item.remove();
// }
// console.log(objects);

// 2.7

// const values=[15, 20, 25];
// const objects = document.getElementsByClassName("elems");

// for (let i = objects.length-1; i >= 0; i--){
//     if (values.includes(+objects[i].innerText))  {objects[i].remove()};
// }