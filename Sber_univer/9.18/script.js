list = [
    {product: "Apple", price: 25},
    {product: "Cherry", price: 32},
    {product: "Strawberry", price: 45}
   ]
let max = 0; 
let result = '';
for (let item of list){
    if (item.price > max) {
        max = item.price;
        result = item.product;
    }
}
console.log(result);