const address = {
    street: "Gagarina",
    city: "Ulyanovsk",
    zipCode: 432071
}
function showAddress (address){
    for (key in address){
        console.log(key,address[key])
    }
}
showAddress(address);