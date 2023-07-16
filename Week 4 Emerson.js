
/*this establishes the change in position*/
var intervalid = 10;
var change = 100;
/*this is where the function of start begins*/
function start()
{
    /* this tells the program to disabl;e the start button after activation and then enable the stop button*/
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    
    /* This says to look for an image*/
    var image = document.getElementById("imgMeme");

    intervalid = setInterval(function() {
       // factor = 5;
     //   if (change >150)

     //   {
      //      factor = -10;
       // }
        image.style.left = change + "px";
        image.style.top = change  + "px";

        //change += factor;  // same as change = change + 5;
       /* this is the rate of change as the image moves*/
        change +=10;
        document.getElementById("msg").innerHTML = "X px = " + image.style.left + " y px = " + image.style.top;

    },100); 
    
}
/* here is where the stop button is deactivated then the start button can be used*/

function stop() 
{
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;

    clearInterval(intervalid);
}