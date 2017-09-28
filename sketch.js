var i;
// var size=random(5,20);
function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(10);
}

function draw() {
	background(200);
	noStroke();
	fill(255);
	for (i=0;i<height;i+=5) {
	ellipse(random(0, width), i, 10, 10);
	}
}