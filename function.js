var canvas = document.getElementById('myCanvas');
var c = canvas.getContext("2d");
var date = new Date();
var dateCreatedBeforeRendering = new Date();
var defaultCanvasColor = "white";
var colors = ["AliceBlue", "CadetBlue", "Cyan", "DarkBlue", "DarkRed", "Lavender", "LightCyan", "LightSkyBlue", "MistyRose", "PaleTurquoise", "SkyBlue", "Teal"];
var rand = Math.floor(Math.random() * colors.length);
console.log("Before Rendering canvas image: "+dateCreatedBeforeRendering.getMilliseconds());

drawRileyImage(defaultCanvasColor);
window.addEventListener('devicemotion', handleMotionEvent, true);


var dateCreatedAfterRendering = new Date();
//window.requestAnimationFrame(canvasAnimation);
console.log("After Rendering canvas image: "+dateCreatedAfterRendering.getMilliseconds());
var renderTime = dateCreatedAfterRendering.getMilliseconds() - dateCreatedBeforeRendering.getMilliseconds();
console.log("Render Time: "+renderTime);

function drawRileyImage(bgColor){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  c.fillStyle = bgColor;
  c.fillRect(0, 0, canvas.width, canvas.height);
  for(var i=0;i<canvas.height;i++){
    var startPos = 10+(i*15);
    c.beginPath();
    c.lineWidth = 6;
    c.moveTo(startPos, 0);
    c.bezierCurveTo(5+(i*5),5+(i*8), 8+(i*13),3+(i*12), 0,20+(i*18));
    c.stroke();
    c.save();
  }
}
/*canvasAnimation: animated sound wave bouncing back and forth*/
function canvasAnimation(color){
  console.log("running");
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = color;
  c.fillRect(0, 0, canvas.width, canvas.height);
  var i = 0;
  var intervals = setInterval(frame, 5);
  // var maxed = false;
  function frame() {
    if(i >= 200){
      window.requestAnimationFrame(canvasAnimation);
      clearInterval(intervals);
/*      maxed = true;
      var intervals2 = setInterval(frame, 5);
    }else if (i === 0 && maxed == true){
      window.requestAnimationFrame(canvasAnimation);
      maxed = false;
      clearInterval(intervals2);
        }else {
          if(!maxed){
            i++;
          }else {
            i--;
          }*/
    }else {
      i++;
      c.beginPath();
      c.lineWidth = 6;
      c.moveTo(10+(i*15), 0);
      c.bezierCurveTo(5+(i*5),5+(i*8), 8+(i*13),3+(i*12), 0,20+(i*18));
      c.stroke();
      c.save();
    }
  }
  //window.requestAnimationFrame(canvasAnimation);
}

function handleMotionEvent(event){
  console.log("init");
  var x = event.accelerationIncludingGravity.x;
  var y = event.accelerationIncludingGravity.y;
  var z = event.accelerationIncludingGravity.z;
  console.log("x: "+x);
  console.log("y: "+y);
  console.log("z: "+z);
  if(y > 0){
    canvasAnimation(colors[rand]);
  }
}


function permission () {
  // DeviceMotionEvent.requestPermission is not a function -- doesn't work...
  DeviceMotionEvent.requestPermission().then( response => {
      if ( response == "granted" ) {
        window.addEventListener('devicemotion', handleMotionEvent, true);
      }else {
          return console.log("can't request device permission");
      }}).catch( console.error );
}
