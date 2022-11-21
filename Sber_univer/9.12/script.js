const list = [2,54,2,54,false,2];
let sum = 0;
for (let item of list){
if (typeof (item) !== "number") break;
sum += item;
}
console.log(sum);