// 3.1

// const car  = {
//     model: "Audi", 
//     color: "white",
//     weight: 1850,
//     engine: "170 hp"
// }

// delete car.engine;

// console.log(car);

// 3.2

// const goods = {
//     title: "Самокат", 
//     price: 6000,
//     good_id: 1
// }

// const result = [];

// console.log(result.concat(Object.keys(goods), Object.values(goods)));

// 3.3

// const article = {
//     title: "Загадки дачного огурца", 
//     text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
// },
// author = {
//     name: "Ричард М.В.",
//     age: 43
// }

// const result = Object.assign(article, author);
// console.log(result);

// 3.4

// const array = [true, 4, "word", "10n"];
// function count(arr){
// console.log(`Количество элементов в массиве: ${arr.length}`);
// return arr.length;
// }

// count(array);

// 3.5

// const employee  = [
//     ["firstName", "Ivan"], 
//     ["lastName", "Ivanov"],
//     ["hireDate", "21.10.2015"]
// ]
// const filtered = employee.filter((e) => e[0] !== "hireDate");
// filtered.push(["jobName", "IT PROG"]);
// console.log(filtered);

// 3.6

// const array = [
//     [ "boolean", true ], 
//     [ "number", 4 ],
//     [ "string", "word" ],
//     [ "object", {}]
// ]

// function countString(arr) {
//     let count = 0;
//     for (let item of arr) {
//         if (typeof(item [1]) === "string") count +=1;
//     }
//     console.log(`Количество строковых элементов в именованном массиве: ${count}`);
// return count
// }
// countString(array);
