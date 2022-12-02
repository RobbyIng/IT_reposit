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
// let address1 = new AddAddress("Gagarina", "Ulyanovsk", 432071);
// let address2 = new AddAddress("Gagarina", "Ulyanovsk", 432071);
// function AddAddress(street,city,zipCode) {
//     this.street = street,
//     this.city = city,
//     this.zipCode = zipCode
// }
// function areEqual(address1,address2) {
// for (let key in address1){
//   if (address1[key] !== address2[key]) return false  
// }
// return true;
// }
// function areSame(address1,address2) {
//     return address1 === address2;
// }
// console.log(areEqual(address1,address2));

//exercise 4

// let post = {
//   title: 'a',
//   body: 'b',
//   author: 'c',
//   views: 10,
//   comments: [
//     {author: 'a', body: 'b'}, 
//     {author: 'c', body: 'd'}
//   ],
//   isLive: true
// };
// console.log(post);

// //exercise 5
// let post = new CreatePost ('a','b','c');
// function CreatePost (title, body, author) {
//   this.title = title,
//   this.body = body,
//   this.author = author,
//   this.views = 0,
//   this.comments = [],
//   this.isLive = false
// };
// console.log(post);

//exercise 6

let priceRanges = [
{label: '$', toltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
{label: '$$', toltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
{label: '$$$', toltip: 'Expensive', minPerPerson: 20, maxPerPerson: 50}
];
let restaurants = [
  {avaragePerPerson: 5}
];