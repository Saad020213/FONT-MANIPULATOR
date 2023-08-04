function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 125);

    canvas = createCanvas(550, 450);
    canvas.position(850,160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

noseX=0;
nosey=0;
difference = 0;
rightWristx = 0;
leftWristx = 0;

function draw()
{
    background('#7f03fc');

    document.getElementById("square_side").innerHTML = ' The font size will be = ' + difference + "px";
    fill('#02faf2');
    stroke("#f37cf7");
    textSize(difference);
    text("SAAD", noseX, nosey);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + nosey);

        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);

        console.log("leftWristX =" + leftWristx + " rightWristX = " + rightWristx + " difference = "+ difference);
    }
}
