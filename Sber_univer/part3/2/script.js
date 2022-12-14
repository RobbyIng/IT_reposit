// let values = ["Строка", true, "Число", "Объект", "Не число", false];
// for (let i = 0; i< values.length; i++)
// if (typeof(values[i]) === "boolean") {
// values[i] = "Булевый тип";
// break;
// }
// console.log(values);

//2.2
// const partNumbers = ["REGRG34FH","RGREEGT","354254","54GREG34FG"]
//     const filtered = partNumbers.filter(e => /\d{2}\D{2}$/.test(e));
//     console.log(filtered);

//2.3

//  const layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>33";
// const layout = "<p>Привет друзья!</p>"
// const output = [];
// let chislo = '';
// for (let i = 0; i < layout.length; i++){
//     if (Number.isInteger (parseInt(layout[i]))) {chislo += layout[i]; console.log(typeof(chislo));}
//     else if (chislo !== '') { output.push(parseInt(chislo)); chislo = ''; }
//     if ((i+1 === layout.length) && (chislo !== '')) output.push(parseInt(chislo));
// }
// const result = output.map(e => e % 2 === 0 ? e**2 : e);
// // output = layout.map(e => parseInt(e))
// console.log(result);

//2.4

const tasks = [
    {title: "Умыться" , completed: true},
    {title: "Сделать зарядку" , completed: true},
    {title: "Приготовить завтрак" , completed: false}
]

const titles = tasks.map(e => e.title);
console.log(titles);