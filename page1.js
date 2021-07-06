img = "";

function preload() {
    img = loadImage("Ac.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status1").innerHTML = "Status = Object Detecting";
}

function modelloaded() {
    console.log("cocossd is ready ");
    status = true;
    objectDetector.detect(img, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Clock", 25, 200);
    noFill();
    stroke("red");
    rect(10, 200, 90, 70);
    fill("blue");
    text("Ac", 320, 115);
    noFill();
    stroke("blue");
    rect(280, 100, 300, 100);

}