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

// 2.8

// const firstDiv = document.getElementById("div1");
// const p = firstDiv.getElementsByTagName("p")

// const secondDiv = document.getElementById("div2");

// secondDiv.innerHTML = secondDiv.innerHTML + firstDiv.innerHTML;
// for (let i = p.length-1; i >=0; i--){
//     p[i].remove();    
// }

// console.log(secondDiv);
// console.log(firstDiv);

// 2.9

// const new_element = document.createElement("li");

// let element = document.getElementById('first');

// element.appendChild(new_element);

// console.log(element.children.length);

// 2.10  !!!! не по порядку, разобраться как сделать по порядку

// const values = ["велосипед", "ролики", "лыжи"];
// const div1 = document.getElementById("div1");
// const div2 = document.getElementById("div2");

// let elemsDiv1 = div1.getElementsByTagName('p');

// for (let i = elemsDiv1.length - 1; i >= 0; i--) {
//     if (values.includes(elemsDiv1[i].innerText)) div2.appendChild(elemsDiv1[i]);
// }

// console.log(div2);
// console.log(div1);

// // 2.11
// const tasks = ["Проверить документы", "Отправить начальству", "Организовать собрание"];
// const elems = [];
// let findRoot = document.getElementById("root");

// for (let i in tasks) {
//     elems[i] = document.createElement("p");
//     elems[i].innerText = tasks[i];
//     console.log(elems[i]);
//     findRoot.appendChild(elems[i]);
// }
// console.log(findRoot);

// teacher decision

// const tasks = ["Проверить документы", "Отправить начальству", "Организовать собрание"];
//     const tags = tasks.map(t => {
//         const elem = document.createElement("p");
//         elem.innerText = t;
//         return elem
//     });
//     document.querySelector("#root").append(...tags);

// 2.12
// const result = {};
// const divs = document.querySelectorAll("div");
// result.div = divs.length;
// const ps = document.querySelectorAll("p");
// result.p = ps.length;
// const h2s = document.querySelectorAll("h2");
// result.h2 = h2s.length;

// console.log(result);

// 2.13

// const Ul = document.getElementById("tasks");

// const lisUl = Ul.querySelectorAll('li');
// let obj = '';
// console.log(lisUl);

// for (let i = lisUl.length - 1; i > 0; i--) {
// if (lisUl[i].innerText.length < lisUl[i-1].innerText.length) {
//     obj = lisUl[i].innerText;
//     lisUl[i].innerText = lisUl[i-1].innerText;
//     lisUl[i-1].innerText = obj;
// }
// if (lisUl[lisUl.length - i].innerText.length < lisUl[lisUl.length - i-1].innerText.length){
//     obj = lisUl[lisUl.length - i].innerText;
//     lisUl[lisUl.length - i].innerText = lisUl[lisUl.length - i-1].innerText;
//     lisUl[lisUl.length - i-1].innerText = obj;
// }

// // }
// console.log(document.firstElementChild.firstChild.nextSibling);