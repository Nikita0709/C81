canvas = document.getElementById("mycanvas");
color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0 , 2 * Math.PI);
ctx.stroke();
