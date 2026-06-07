function setup() {
  createCanvas(600, 400);
  colorMode(RGB);
}

function draw() {
  let skyR = 120 + sin(frameCount * 0.005) * 40;
  let skyG = 170 + sin(frameCount * 0.005) * 30;
  let skyB = 90 + cos(frameCount * 0.005) * 80;

  background(skyR, skyG, skyB);

  let ballY = (frameCount * 3) % 450;
  let ballSize = 25 + sin(frameCount * 0.1) * 8;

  push();
  translate(295, 150);
  rotate(frameCount * 0.01);

  fill(220, 70, 70);
  stroke(255, 0, 0);
  strokeWeight(1);
  ellipse(0, 0, 200, 200);

  let b = 200 + sin(frameCount * 0.04) * 55;

  fill(30, 150, b);
  stroke(0, 0, 255);
  ellipse(0, 0, 150, 150);

  fill(0, 255, 250);
  stroke(80);
  ellipse(0, 0, 100, 100);

  pop();

let orbitX = 95 + cos(frameCount * 0.05) * 20;
let orbitY = 130 + sin(frameCount * 0.05) * 20;

let bigSize = 40 + sin(frameCount * 0.08) * 8;
let smallSize = 20 + cos(frameCount * 0.08) * 5;

fill(250);
noStroke();
ellipse(orbitX, orbitY, bigSize, bigSize);

fill(255);
stroke(190);
ellipse(
  orbitX + 10,
  orbitY + 20,
  smallSize,
  smallSize
);

  fill(130, 200, 255);
  stroke(205);
  strokeWeight(3);
  ellipse(150, 150, 80, 80);

  let blackSize = 100 + sin(frameCount * 0.08) * 15;

  fill(50);
  stroke(0);
  strokeWeight(1);
  ellipse(430, 190, blackSize, blackSize);

  fill(255, 0, 0);
  stroke(255);
  triangle(470, 180, 430, 250, 550, 250);

  fill(30, 150, 250);
  stroke(0, 0, 255);
  ellipse(130, 270, 80, 80);

  fill(255, 0, 0);
  stroke(255);
  let triTop = 180 + sin(frameCount * 0.08) * 25;
  triangle(150, triTop, 180, 320, 240, 250);

  fill(245, 140, 260);
  noStroke();
  ellipse(150, 270, 25, 25);

  fill(245, 245, 245);
  stroke(150, 120, 180);
  strokeWeight(2);
  ellipse(410, 310, 85, 45);

  fill(255, 150, 250);
  stroke(45);
  circle(350, 250, 60);

  stroke(155);
  fill(170, 200, 120);
  quad(290, 240, 240, 290, 290, 340, 340, 290);

  fill(205, 0, 0);
  noStroke();
  triangle(220, 170, 195, 260, 245, 240);

  fill(150, 220, 200);
  ellipse(480, 140, 25, 25);

  stroke(120, 90, 170);
  strokeWeight(2);
  line(380, 320, 540, 210);

let purpleMove = sin(frameCount * 0.1) * 20;

let purpleR = 120 + sin(frameCount * 0.05) * 60;
let purpleB = 140 + cos(frameCount * 0.05) * 70;

fill(purpleR, 100, purpleB);

stroke(80, 70, 100);

triangle(
  330, 260 + purpleMove,
  310, 310 + purpleMove,
  370, 300 + purpleMove
);

  let yellowX = 250 + cos(frameCount * 0.03) * 60;

  fill(255, 200, 0);
  stroke(200, 150, 0);
  strokeWeight(1);
  ellipse(yellowX, 70, 40, 40);

  fill(255);
  stroke(180);

  ellipse(520, ballY, ballSize, ballSize);

  line(512, ballY - 5, 516, ballY + 5);
  line(524, ballY - 5, 528, ballY + 5);
}

function keyPressed() {
  saveGif('baseball_animation', 5);
}