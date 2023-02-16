const timestamp = "timestamp";
console.time(timestamp);
console.log(1);

setTimeout(() => {
    console.log(2);
    console.timeEnd(timestamp)
}, 2000);

console.log(3);

//latentflip

//eventloop бесконечный цикл обработки событий

//callbackhell