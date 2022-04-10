img = "";
Status = "";

function preload() {
    img = loadImage("Trolley.jpg");
}

function setup() {
    canvas = createCanvas(650, 450);
    canvas.position(420, 150);

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("staus").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded");
    Status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.log(error);
    }

    else {
        console.log(results);
    }
}

function draw() {
    // ** Nothing in here for now ** //
}