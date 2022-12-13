// let values = ["Строка", true, "Число", "Объект", "Не число", false];
// for (let i = 0; i< values.length; i++)
// if (typeof(values[i]) === "boolean") {
// values[i] = "Булевый тип";
// break;
// }
// console.log(values);

//2.2
const partNumbers = ["REGRG34FH","RGREEGT","354254","54GREG34FG"]
    const filtered = partNumbers.filter(e => /\d{2}\D{2}$/.test(e));
    console.log(filtered);
