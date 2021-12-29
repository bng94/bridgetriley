var requestPermission = function() {
    DeviceMotionEvent.requestPermission().then(response => {
        if (response == "granted") {
          return true; 
        }else{
          return false;
        }
      });
}

/*.then(response => {
    if (response == "granted") {
        window.addEventListener('devicemotion', handleMotionEvent, true);
    } else {
        return console.log("can't request device permission");
    }
  }).catch(console.error);
*/
