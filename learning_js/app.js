function max(a,b) {
    return (a > b) ? a : b;
}
function isLanscape(width, height){
    return (width > height);
}
function fizzBazz (input) {
 if (typeof(input) !== "number") return "Not a number";
 if ((input % 3 === 0) &&  (input % 5 ===0)) return "FizzBazz"; 
 if (input % 3 ===0) return "Fizz";
 if (input % 5 ===0) return "Bazz"; 
 return input;
}
function checkSpeed (actSpeed){
    const speedLimit = 70;
    const speedPerPoint = 5;
if (actSpeed < speedLimit + speedPerPoint) return "OK";
    let f = Math.floor((actSpeed - speedLimit) / speedPerPoint);
    return (f < 12) ? f : "Licence suspended";
}
console.log(checkSpeed(130));