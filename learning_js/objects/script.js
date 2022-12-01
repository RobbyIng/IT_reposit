// const address = {
//     street: "Gagarina",
//     city: "Ulyanovsk",
//     zipCode: 432071
// }
// function showAddress (address){
//     for (let key in address){
//         console.log(key,address[key])
//     }
// }
// showAddress(address);

//exercise 2

// let address =  addAddress("Gagarina", "Ulyanovsk", 432071);
// function addAddress(street,city,zipCode) {
//     return{
//     street,
//     city,
//     zipCode   
//     };
// }
// console.log(address);
// function AddAddress(street,city,zipCode) {
//     this.street = street,
//     this.city = city,
//     this.zipCode = zipCode
// }

// const address2 = new AddAddress("Gagarina", "Ulyanovsk", 432071);
// console.log(address2);

//exercise 3
let address1 = new AddAddress("Gagarina", "Ulyanovsk", 432071);
let address2 = new AddAddress("Gagarina", "Ulyanovsk", 432071);
function AddAddress(street,city,zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}
function areEqual(address1,address2) {
for (let key in address1){
  if (address1[key] !== address2[key]) return false  
}
return true;
}
function areSame(address1,address2) {
    return address1 === address2;
}
console.log(areEqual(address1,address2));