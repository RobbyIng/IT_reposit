// 4.1
    // const buton = document.getElementById("btn");
    // const p = document.getElementById("val");

    // buton.onclick = () => console.log(p.innerText);

// 4.2

    // const buton = document.getElementById("btn");
    // const input = document.getElementById("val");
    
    // buton.onclick = () => console.log(input.value);
    
    // 4.3
    
    // const square = document.getElementById("square");
    
    // square.onclick = () => square.style.opacity = 0;
    
    // 4.4
    
    // const button = document.getElementById("clicker");
    
    // button.onclick = () => button.innerText = +button.innerText +1;
    
    // 4.5
    
    // const del = document.getElementById("delete");
    // const ul = document.getElementById("points");

    // del.onclick = () => ul.removeChild(ul.lastElementChild);   

    // 4.6

    // const square = document.getElementById("square");

    // square.onclick = () => {
    //     let number = Math.round(Number.parseFloat(square.style.width)*0.9);

    //     square.style.width = `${number}px`;
    //     square.style.height = `${number}px`;
    // }

    // 4.7

    // const copy = document.querySelector(".copy");
    // const bodyk = document.querySelector("body");
    // const cloneOfCopy = copy.cloneNode(true);

    // copy.onclick = () => {
    //     bodyk.append(cloneOfCopy);
    // }

    // 4.8

    // const cards = document.querySelector(".card");
    // const list = cards.querySelectorAll("p");

    //     for (let i = 0; i < list.length; i++){
    //           list[i].onclick = () => list[i].innerHTML = `${+list[i].innerHTML + 1}`;
    //     }

    // 4.9    ne nravitsya

    const div1 = document.getElementById("div1");
    const list1 = div1.querySelectorAll("p");
    
    const div2 = document.getElementById("div2");
    const list2 = div2.querySelectorAll("p");

    for (let i = 0; i < list1.length; i++) {
        list1[i].onclick = () => {
            div2.appendChild(list1[i]);
            list1[i].remove;
        }
    }
    for (let i = 0; i < list2.length; i++) {
        list2[i].onclick = () => {
            div1.appendChild(list2[i]);
            list2[i].remove;
        }
    }

    console.log(list1);
    console.log(list2);