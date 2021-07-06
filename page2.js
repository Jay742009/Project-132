img = "";

function preload() {
    img = loadImage("diningtable.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status2").innerHTML = "Status = Object Detecting";
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
    text("Laptop", 25, 200);
    noFill();
    stroke("red");
    rect(10, 150, 210, 130);

    fill("yellow");
    text("Chair", 270, 200);
    noFill();
    stroke("red");
    rect(240, 150, 260, 250);

}