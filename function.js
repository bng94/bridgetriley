var canvas = document.getElementById('myCanvas');
var c = canvas.getContext("2d");
drawRileyImage();
function drawRileyImage(){
  console.log("function runs!");
  /* width/height need to be in function as a glitch happens if window is shrinked */
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for(var i=0;i<canvas.height;i++){
    console.log(canvas.width);
    var startPos = 10+(i*15);
    c.beginPath();
    c.lineWidth = 6;
    c.moveTo(startPos, 0);
    c.bezierCurveTo(5+(i*5),5+(i*8), 8+(i*13),3+(i*12), 0,20+(i*18));
    c.stroke();
  }

  /* use for comparsion/QA: /
  var img = new Image;
  img.onload = function(){ c.drawImage(img,0,0); };
  img.src = "118664.jpg";
  //*/
}
