Status="";
input="";
   
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center(); 
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    object_detector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object ";
    input=document.getElementById("input_box").innerHTML;
}

function modelLoaded()
{
    console.log("modelLoaded");
    Status=true;
}

function draw()
{
    image(video, 0, 0, 300, 300);
}