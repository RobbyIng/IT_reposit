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
window.addEventListener('load', function() {context.drawImage(img, 10, 10, 80, 80);});
            context.fillStyle = "black";
            context.font = "12px sans-serif";
            context.fillText("Могу ли я Вам чем-то", 100, 30);
            context.fillText("помочь?", 100, 50);
            // object.onclick = function(){myScript};
            // $(document).ready(function(){
            // $("openModalWindow").click(function(){$(modalWindowBoxID).show();});
            
            //  var element = document.getElementById('openModalWindow');
            //  element.click(function() {
            //  var toopenwindow = document.getElementById('modalWindowBoxID');
            //  toopenwindow.display = "block";
            //  });

              // let element = document.getElementById('openModalWindow');
              // element.background = "rgb(245, 242, 242)";

              // $(document).ready(function(){
              // $('openModalWindow').on('mouseover', '.openModalWindow', function(){
              // $('openModalWindow').css('color','red'); });
              // });

//  function openModalWindow() {document.getElementById("modalWindowBoxID").visibility = "visible";}
  //   openModalWindow:onclick = function() {modalWindowBoxID.visibility="visible";}
     $('.OperatorHelpButton').click(function() {
         $(this).parent('.modalWindowBox').visibility('visible');
      });
// function toCloseModalWindow() {document.getElementById("modalWindowBoxID").visibility = "hidden";}
