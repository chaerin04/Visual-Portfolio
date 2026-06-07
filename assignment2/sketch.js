function setup() {
  createCanvas(400, 600);
  background(230, 245, 255);

  fill(90, 60, 40);
  noStroke();
  rect(110, 200, 180, 230);
  arc(200, 210, 180, 180, PI, TWO_PI);

  fill(255, 224, 200);
  noStroke();
  ellipse(200, 250, 130, 170); 
  rect(185, 325, 30, 50);

  fill(255);
  square(70, 375, 260, 45);
  line(211, 430, 233, 400); 
  line(189, 430, 167, 400);

  stroke('#f28c8c');
  strokeWeight(4);
  noFill();
  arc(200, 300, 30, 20, 0, PI);

  stroke(110, 80, 50);
  strokeWeight(4);
  noFill();
  
  line(155, 235, 170, 230);
  line(170, 230, 185, 235);
  
  line(215, 235, 230, 230);
  line(230, 230, 245, 235);

  fill(255); 
  noStroke();
  ellipse(165, 250, 35, 25); 
  ellipse(235, 250, 35, 25);

  fill(40); 
  stroke(0); 
  strokeWeight(1);
  ellipse(165, 250, 10, 20); 
  ellipse(235, 250, 10, 20); 

  noStroke();
  fill(255);
  ellipse(165, 247, 5, 5); 
  ellipse(235, 247, 5, 5); 

  fill(250, 200, 170);
  noStroke();
  quad(
  195, 265, 
  205, 265, 
  210, 285, 
  190, 285  
);
  fill(250, 195, 160);


  stroke(180);
  strokeWeight(2);
  noFill();
  arc(200, 380, 60, 50, 0, PI); 
  fill(180);
  noStroke();
  ellipse(200, 405, 10, 10);
}