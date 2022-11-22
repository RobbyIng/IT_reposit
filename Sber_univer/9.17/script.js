const obj = {
    "Яблоко": "фрукт",
    "Арбуз": "ягода",
    "Помидор": "овощ",
    "Огурец": "овощ",
    "Вишня": "ягода"
};
const obj2 = {};

for (const key of Object.keys(obj)) {
let count = 0;    
let isThere = false; 
console.log(obj[key]);
//     for (let key2 in obj2){
//         console.log(obj2[key2]);
//     if (obj[key] === key2){
//         isThere = true;
//         break;
//         }    
//     }
// if (isThere) obj2.key2 = key;    
}
