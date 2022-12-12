function getNumber(data){
    if (isNaN(parseInt(data))) return 0; // parseFloat!!!
    else return parseInt(data);
}

console.log (getNumber(data));