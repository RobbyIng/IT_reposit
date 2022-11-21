function square(num) {
    return num **2;
}
const num = 2;
let medSquare = square(num);
let result = String (medSquare);

for (let i = 0; i < 2; i++) {
    medSquare = square(medSquare);
    result = result + " " + String(medSquare);
}

console.log (result);