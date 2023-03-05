// const arr = [1,2]
// const [,b] = arr;
// console.log(b);

// const obj = {
//     level1: {
//         level2: {
//             level3: "Hello"
//         }
//     }
// }
// const {level1:{level2:{level3:greetings}}} = obj;
// console.log(greetings);

// const obj = {
//     level1: [
//         {
//             key: 'value'
//         }
//     ]
// }
// const {level1: [{key}]} = obj;
// console.log(key);

const origArr = [1,2,3]
function func([...arr]) {
    console.log(arr);
    console.log((arr === origArr));
}
func(origArr);