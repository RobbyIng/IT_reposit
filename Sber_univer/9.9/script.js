// const sentence = "sdkjhfsdkf sdkfhskdf sdfhs sdfsph pjtprm";
// let listWord = [];
// nextWord = '';

// for (item = 0; item < sentence.length; item++){
// 	if (sentence[item] !== " ") nextWord += sentence[item];
// 	else {
// 		listWord.push(nextWord);
// 		nextWord = '';
// 	}
//     if (item === sentence.length-1) listWord.push(nextWord);
// }
// console.log(listWord);
// let objectArray = [{ name: 'Иван' }, { name: 'Петя' }, { name: 'Саша' }];
// console.log(objectArray.toString());
// function average (list) {
// 	let sum = 0;
// 	for (let item of list){
// 		sum +=item;
// 	}
// return Math.round(sum/list.length);
// }
// console.log(average (list));
const list = [2,54,2,54,false,2];
let sum = 0;
for (let item of list){
if (typeof (item) !== "number") break;
sum += item;
}
console.log(sum);