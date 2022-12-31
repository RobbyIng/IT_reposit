// 3.1
// let styleDiv = document.getElementById("div_elem");
// styleDiv.style.width = "100px";
// styleDiv.style.height = "100px";

// 3.2
// let styleP = document.getElementById("rainbow");
// styleP.style.color = '#2980b9';

// 3.3

// let inputArea = document.getElementById('target');
// let labelArea = inputArea.parentElement.previousElementSibling;

// labelArea.setAttribute('for', 'target');

// 3.4

// let styleRainb = document.getElementById("rainbow");
// let number = +styleRainb.innerText;
// if (number >= 1 && number <= 9) styleRainb.style.color = "#c0392b";
// else if (number >= 10 && number <= 20) styleRainb.style.color = "#e17055";
// else styleRainb.style.color = "#fdcb6e";

// 3.5

// let imgArea = document.getElementById("photo");
// imgArea.innerHTML = `<img src=${imgArea.innerText}>`;
// let image = imgArea.querySelector("img");
// image.style.width = "100px";
// image.style.height = "100px";
// console.log(image);

// 3.6

// let selectArea = document.getElementById("numbers");

// for (let i = 10; i <= 550; i += 10) {
//     let optionObj = document.createElement("option");
//     optionObj.value = i;
//     optionObj.innerText = i;
//     selectArea.appendChild(optionObj);
// }

// 3.7

const countries = ["Armenia", "Russia", "Germany", "France", "Georgia"];

let selectArea2 = document.getElementById("countries");
// let selectArea2 = document.querySelector("select");

let tags = countries.map(t => {
    const elem = document.createElement("option");
    elem.innerText = t;
    elem.value = t.slice(0, 2).toLowerCase();
    return elem;
});

selectArea2.append(...tags);