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

1.6

// const obj = document.querySelector(".links");
// let text = `<a>${obj.textContent}</a>`;
// obj.innerHTML = text;

// console.log(obj);

// 1.7
const obj = document.querySelector(".content");
// const conten = obj.querySelector("p")
let text = obj.textContent.replace("p>", "b>");
obj.innerHTML = text;
