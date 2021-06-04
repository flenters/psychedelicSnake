var r;
var g;
var b;

function setup() {
    createCanvas(1920,1080);
}

function draw() {
    if (mouseIsPressed) {
        fill(255);
    }else {
        r = random(255);
        g = random(255);
        b = random(255);
        fill(r,g,b);
    }
    stroke(255);
    ellipse(mouseX, mouseY, 80,80);
}



