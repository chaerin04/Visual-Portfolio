let bgR = 230;
let bgG = 245;
let bgB = 255;

let faceX = 200;
let faceY = 250;

let eyeLX = 165;
let eyeRX = 235;
let eyeY = 250;

function setup() {
  createCanvas(400, 600);
}

function draw() {

  background(bgR, bgG, bgB);

  fill(90, 60, 40);
  noStroke();
  rect(110, 200, 180, 230);
  arc(200, 210, 180, 180, PI, TWO_PI);

  fill(255, 224, 200);
  ellipse(faceX, faceY, 130, 170);
  rect(185, 325, 30, 50);

  fill(255);
  square(70, 375, 260, 45);

  let leftArmX1 = 189;
  let leftArmY1 = 430;
  let leftArmX2 = 167;
  let leftArmY2 = 400;

  let rightArmX1 = 211;
  let rightArmY1 = 430;
  let rightArmX2 = 233;
  let rightArmY2 = 400;

  line(rightArmX1, rightArmY1, rightArmX2, rightArmY2);
  line(leftArmX1, leftArmY1, leftArmX2, leftArmY2);

  stroke('#f28c8c');
  strokeWeight(4);
  noFill();

  if (frameCount % 100 < 50) {
    arc(200, 300, 30, 20, 0, PI);
  } else {
    line(185, 300, 215, 300);
  }

  stroke(110, 80, 50);
  strokeWeight(4);
  noFill();

  line(155, 235, 170, 230);
  line(170, 230, 185, 235);

  if (frameCount % 140 < 70) {
    line(215, 235, 230, 230);
    line(230, 230, 245, 235);
  } else {
    line(215, 232, 245, 232);
  }

  let eyeH = 25;
  if (frameCount % 130 < 10) {
    eyeH = 3;
  }

  let eyeMoveX = map(mouseX, 0, width, -6, 6);
  let eyeMoveY = map(mouseY, 0, height, -6, 6);

  fill(255);
  noStroke();
  ellipse(eyeLX + eyeMoveX, eyeY + eyeMoveY, 35, eyeH);
  ellipse(eyeRX + eyeMoveX, eyeY + eyeMoveY, 35, eyeH);

  fill(40);
  stroke(0);
  strokeWeight(1);
  ellipse(eyeLX + eyeMoveX, eyeY + eyeMoveY, 10, eyeH);
  ellipse(eyeRX + eyeMoveX, eyeY + eyeMoveY, 10, eyeH);

  noStroke();
  fill(255);
  ellipse(eyeLX + eyeMoveX, eyeY - 3 + eyeMoveY, 5, 5);
  ellipse(eyeRX + eyeMoveX, eyeY - 3 + eyeMoveY, 5, 5);

  fill(250, 200, 170);
  quad(195, 265, 205, 265, 210, 285, 190, 285);

  let swing = sin(frameCount * 0.08) * 6;

  let necklaceX = 200 + swing;
  let pendantX = 200 + swing * 1.3;

  stroke(180);
  strokeWeight(2);
  noFill();
  arc(necklaceX, 380, 60, 50, 0, PI);

  fill(180);
  noStroke();
  ellipse(pendantX, 405, 10, 10);
}

function keyPressed() {

  if (key === 'c' || key === 'C') {
    bgR = random(255);
    bgG = random(255);
    bgB = random(255);
  }

  if (key === 's' || key === 'S') {
    saveGif("character", 5);
  }
}