const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let item of list){
// let simple = true;
// if (item === 1) simple = false;
// 	for (let i = 2; i<=item/2; i++){
// 	if (item % i === 0) {
// 		simple = false;
// 		break;
// 		}
// 	}
// 	if (simple) {
//         sum +=item;
//         console.log(item);
//     }
// }
// console.log(sum);
let listRev = [];

for (let item of list){
listRev.unshift(item);
}
console.log(listRev);