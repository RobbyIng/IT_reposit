// 1.1
// const result = document.querySelector(".secret");
// console.log(result.localName);

// 1.2
// const result = document.getElementById("elem");
//  console.log(result.localName);

// // 1.3
// const result = document.getElementsByClassName("promo");
// console.log(result.length);

// 1.4
//  const result = document.getElementsByClassName("target");
// const last = result.length-1;
//  console.log(result[last].localName);

// 1.5
//     const obj = document.querySelector(".price");
//     let price = +obj.textContent * 2;
//     const text = price.toString();
//     obj.textContent = text;

// console.log(obj);

// 1.6

// const obj = document.querySelector(".links");
// let text = `<a>${obj.textContent}</a>`;
// obj.innerHTML = text;

// console.log(obj);

// 1.7
// const obj = document.querySelector(".content");

// let text = obj.innerHTML.replace(/p>/g, "b>");
//  obj.innerHTML = text;
// console.log(obj.innerHTML);

// 1.8

// let sum = 0;
// const obj = document.getElementsByClassName("price");

//  for (let item of obj){
//     sum += +item.innerHTML
//  }

//  console.log(sum);

// 1.9

// const obj = document.getElementsByClassName("numeric");

//  for (let item of obj){
//     if (+item.innerHTML < 0) item.innerHTML = `<b>${item.innerHTML}</b>`;
//  }

//  console.log(obj);

// 2.0

// let result = 0;

// let elems = document.getElementsByClassName("numeric");
// Array.from(elems).forEach(elem => result += +elem.innerHTML);

//  console.log(result);

//  2.1

const cars = [];
const obj = document.querySelector(".cars");
const lis = obj.querySelectorAll("li")
for (let item of lis){
       cars.push(item.innerHTML);
    }
console.log(cars);
