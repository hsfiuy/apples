status="";
video="";
function preload(){
    video = createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
}
function draw(){
    image(video, 0,0,400,300);
}
function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
     document.getElementById("status").innerHTML="status=oobject detecting"
}
function modelLoaded(){
    console.log("the model isnt loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
    
}
