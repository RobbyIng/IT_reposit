var canvas = document.getElementById("myCanvas"),
  context = canvas.getContext("2d");
// Создание объекта картинки
let img = new Image();
// Назначение путь до картинки
img.src = "Support.PNG";
context.beginPath();
context.fillStyle = "rgb(248, 203, 121)";
context.roundRect(2, 2, 262, 97, 5);
context.moveTo(262, 30);
context.lineTo(278, 48);
context.lineTo(262, 66);
context.fillStyle = "rgb(248, 203, 121)";
context.strokeStyle = "rgb(248, 203, 121)";
context.closePath();
context.stroke();
context.fill();
context.beginPath();
context.fillStyle = "rgb(245, 242, 242)";
context.roundRect(7, 7, 252, 87, 5);
context.moveTo(252, 28);
context.lineTo(272, 48);
context.lineTo(252, 68);
context.fillStyle = "rgb(245, 242, 242)";
context.strokeStyle = "rgb(245, 242, 242)";
context.closePath();
context.stroke();
context.fill();
// Отслеживание события загрузки страницы

              document.getElementById("openModalWindow").onclick=function(){
                document.getElementById("modalWindowBoxID").style.display = "block";
                };
              document.getElementById("toCloseModalWindow").onclick=function(){
                document.getElementById("modalWindowBoxID").style.display = "none";
                };