img = "";

function preload() {
    img = loadImage("Football.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status3").innerHTML = "Status = Object Detecting";
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
    fill("blue");
    text("Football", 320, 115);
    noFill();
    stroke("blue");
    rect(120, 100, 420, 240);

}