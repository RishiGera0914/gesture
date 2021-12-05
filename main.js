noseX=0;
rightWristX=0;
noseY=0;
leftWristX=0;
difference=0;

function setup()
{

    canvas=createCanvas(550,500);
    canvas.center();
    video=createCapture(VIDEO);
video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("poseNet is intialized");
}
function gotPoses(results)
{
    if (results.length>0)
    {
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw()
{
background("gray");
document.getElementById("square_side").innerHTML="width and height will be"+difference+"px";
fill("red");
stroke("red");
square(noseX,noseY,difference);
}




    