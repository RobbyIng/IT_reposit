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
        for (const keys of Object.keys(obj2)) {
            if (obj[key] === keys) {
                isThere = true;
                break;
            }
        }
    if (isThere) {
    obj2[obj[key]] += 1;  
    }
    else obj2[obj[key]] = 1;   
}
console.log(obj2);

