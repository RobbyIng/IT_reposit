// 4.1
// const pet_1 = { 
//     name: "Шарик", 
//     age: 10 
// },
// pet_2 = { 
//     name: "Жучка", 
//     age: 5
// };

// function getName() {
//     const result = `${this.name} ${this.age}`;
// return result
// }
// pet_1.getName = getName.bind(pet_1);
// pet_2.getName = getName.bind(pet_2);

// console.log(pet_1);

// 4.2

// const input = {
//     id: 1,
//     value: "Добрый вечер",
//     firstName: "Григорий",
//     lastName: "Стрельников" 
// }

// function sayHi() {
//     console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)
// }

// sayHi.call(input);

// 4.3

// const pet = { 
//     name: "Диксон", 
//     breed: "Немецкая овчарка" 
// }

// function getDescription() { 
//     console.log("Имя питомца: " + this.name + ", Порода: " + this.breed) 
// }

// getDescription = getDescription.bind(pet);

// console.log(getDescription);

// 4.4

// const props= { 
//     name: "Анатолий", 
//     age: 29,
//     sayHi: ()=>"привет"
// }

props = {a:()=>12,b:()=>15}

// console.log(typeof(props.a));

// function getValue() {
//     let answer = "Значения свойств объекта props ("
//     let added = false;
//         for (let key in this) {
//         if (typeof(this[key]) !== "function") {
//         answer += `${key}: ${this[key]}, `;
//         added = true;
//         }
//     }
//         let result = added ? answer.slice(0,answer.length-2)+')' : answer + ')';
//         console.log(result);
//         return result;
//     }
//     getValue = getValue.bind(props);


let answer = "Значения свойств объекта props ("
let added = false;
    for (let key in props) {
    if (typeof(props[key]) !== "function") {
    answer += `${key}: ${props[key]}, `;
    added = true;
    }
}
    let result = added ? answer.slice(0,answer.length-2)+')' : answer + ')';
    console.log(result);

