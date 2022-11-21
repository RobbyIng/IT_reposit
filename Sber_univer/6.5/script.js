function getNumber(data){
    if (isNaN(parseInt(data))) return 0;
    else return parseInt(data);
}

console.log (getNumber(data));