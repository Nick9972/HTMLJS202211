var canvas = document.getElementById("canvas");

var ctx = canvas.getContext('2d');

//Square Style
ctx.fillStyle = "yellow";
ctx.strokeStyle = "black"
ctx.lineWidth = "5";

//Square Drawing
ctx.fillRect(85,301,100,100);
ctx.strokeRect(87,303,95,95);

//Circle Style
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red";
ctx.lineWidth = "5";

//Circle Drawing
ctx.beginPath();
ctx.arc(388,440,67,0,(2*Math.PI),true);
ctx.closePath();
ctx.fill();
ctx.stroke();

//Pentagon Stlye
ctx.fillStyle = "#ff00ff";
ctx.strokeStyle = "#00ffff";
ctx.lineWidth = "5";

//Pentagon Drawing
ctx.beginPath();
ctx.moveTo(557,308);
ctx.lineTo(667,284);
ctx.lineTo(724,380);
ctx.lineTo(650,464);
ctx.lineTo(548,420);
ctx.closePath();
ctx.fill();
ctx.stroke();

//Star Style
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "rgb(32,32,32)";
ctx.lineWidth = "5"

//Star Drawing
ctx.beginPath();
ctx.moveTo(636,496);
ctx.lineTo(668,554);
ctx.lineTo(733,567);
ctx.lineTo(688,615);
ctx.lineTo(695,680);
ctx.lineTo(635,653);
ctx.lineTo(576,680);
ctx.lineTo(583,614);
ctx.lineTo(539,567);
ctx.lineTo(604,555);
ctx.closePath();
ctx.fill();
ctx.stroke();

//Line Style
ctx.strokeStyle = "rgb(255,0,0)";
ctx.lineWidth = "5"

//Line Drawing
ctx.beginPath();
ctx.moveTo(85,682);
ctx.lineTo(278,549);
ctx.closePath();
ctx.stroke();