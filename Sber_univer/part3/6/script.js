const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(20, 140);   // Двигает перо к нижнему левому углу
// ctx.lineTo(120, 10);   // Рисует линию к верхнему углу
// ctx.lineTo(220, 140);  // Рисует линию к нижнему правому углу
// ctx.closePath();   
// ctx.fill()    // Рисует линию к нижнему левому углу
// ctx.stroke();

// 6.3
ctx.beginPath();
// ctx.strokeStyle = '#e74c3c';
ctx.lineColor = 'black';
ctx.moveTo(100,100);
ctx.lineTo(200,100);
ctx.strokeStyle = '#16a085';
ctx.moveTo(100,150);
ctx.lineTo(200,150);
ctx.strokeStyle = '#2980b9';
ctx.moveTo(100,200);
ctx.lineTo(200,200);
ctx.closePath();
ctx.stroke();

// 6.4
// ctx.beginPath();
// ctx.fillStyle = '#ff3d00';
// ctx.fillRect(10,10,100,100);
// ctx.fillStyle = '#0bdd38';
// ctx.fillRect(120,10,100,100);
// ctx.fillStyle = '#2e77da';
// ctx.fillRect(10,120,100,100);
// ctx.fillStyle = '#ffd200';
// ctx.fillRect(120,120,100,100);
// ctx.closePath();
// ctx.stroke();

// // 6.5
// ctx.beginPath();
// for (let i = 100;i >=2; i-=2 ){
//     (i % 4 === 0) ? ctx.fillStyle = 'black': ctx.fillStyle = 'white';
//     ctx.arc(150, 150, i, 0, 2 * Math.PI);
//     ctx.fill();
// }
// ctx.closePath();
// ctx.stroke();

// 6.6

// let x = 0;
// // let y = 0;
function drawCircle(canvas, xX, yY){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(xX, yY, 25, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();  
    // console.log(xX);

    requestAnimationFrame(drawCircle);
}
document.addEventListener('mousemove', (e) => {
    let x = e.offsetX;    
    let y = e.offsetY;
    drawCircle(canvas, x, y);  
});
// Добавляет обработчика событий для таблицы
// var el = document.getElementById("outside");

