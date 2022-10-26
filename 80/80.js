var canvas = document.getElementById("myCanvas"), 
            context = canvas.getContext("2d");
            context.beginPath();
            context.fillStyle = "white";
            context.fillRect(70, 70, 100, 100);
            context.moveTo(70, 170);
            context.lineTo(170, 170);
            context.lineTo(170, 70);
            context.lineTo(290, 300);
            context.lineTo(135, 300);
            context.closePath();
            context.fillStyle = "rgb(227, 75, 75)"
            context.fill();
