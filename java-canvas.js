function init() {
    var canvas = document.getElementById("canvas");

    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "#FF0000"; /*draws a canvas wide rectangle */
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#AF002A"; /*draws a floating rectangle */
        ctx.fillRect(100, 100, 50, 50);

        ctx.lineWidth = 5; /*draws an empty rectangle with border "lineWidth"*/
        ctx.strokeStyle = "#A4c639";
        ctx.strokeRect(100, 100, 50, 50);

        ctx.fillStyle = "#00308F"; 
        ctx.beginPath();
        ctx.arc(200, 200, 50, 0, Math.PI*2, true);
        /*begins arc: x, y, radius, start angle. Math=PI*2 draws circle
        true/false:counterclockwise, clockwise */
        ctx.fill();

        ctx.fillStyle = "#3B444B";
        ctx.beginPath();
        ctx.moveTo(350, 200); /*cursor start point*/
        ctx.lineTo(400, 50); /*draw line to x,y*/
        ctx.lineTo(450, 100); 
        ctx.lineTo(450, 200);
        ctx.closePath(); /*connect last cursor point and start cursor point*/
        ctx.fill();

        ctx.strokeStyle = "A4C639"; /*draws a poly outline*/
        ctx.beginPath();
        ctx.moveTo(325, 225); /*cursor start point*/
        ctx.lineTo(400, 15); /*draw line to x,y*/
        ctx.lineTo(475, 100); 
        ctx.lineTo(475, 225);
        ctx.closePath();
        ctx.stroke();

        var linGrad = ctx.createLinearGradient(500, 100, 500, 500); /*draw gradient*/
        linGrad.addColorStop(0, "#8DB600");
        linGrad.addColorStop(0.5, "#AF002A");
        linGrad.addColorStop(1, "#00308F");
        ctx.fillStyle = linGrad;
        ctx.fillRect(500, 100, 100, 100);

        var linGrad = ctx.createLinearGradient(300, 50, 500, 500); 
        //draw floating rectangle
        ctx.fillStyle = "rgba(10, 150, 255, 0.5)";
        ctx.fillRect(300, 50, 100, 100);

        /*var radGrad = ctx.createRadialGradient(600, 250, 5, 620, 260, 100);
        //x,y,r,endx,endy
        radGrad.addColorStop(0, "red");
        radGrad.addColorStop(1, "white");
        ctx.fillStyle = radGrad;
        ctx.arc(600, 250, 50, 0, Math.PI*2, true);
        ctx.fill();*/
        //BROKE: FILLS CTX.STROKESTYLE WITH WHITE

        ctx.font = "bold 40px Arial";
        ctx.fillStyle = "#8BD600";
        ctx.fillText("Hello", 100, 300);

        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.strokeText("outline", 120, 320);

        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 3;
        ctx.shadowColor = "black";
        ctx.fillText("shadow", 140, 340);

    }
}

onload = init;