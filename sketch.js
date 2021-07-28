
var ground;

function setup() {
  createCanvas(480, 800);
  createSprite(400, 200, 50, 50);

  ground = new Ground(0, 760, 480, 40);
}
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

for (var i = 0; i <=width; i = i + 80) {
  divisions.push(new division(i, height - divisionHeight / 2, 10, divisionHeight));
}
for (var q = 40; q <=width; q = q + 50) {
  plinkos.push(new plinko(q, 75));

}

for (var q = 15; q <= width - 10; q = q + 50) {
  plinkos.push(new plinko(q, 175));

}

for (var q = 40; q <= width; q = q + 50) {
  plinkos.push(new plinko(q, 275));

}
for (var q = 15; q <= width - 10; q = q + 50) {
  plinkos.push(new plinko(q, 375));

}

if(frameCount%60===0){
  particles.push(new particle(random(width/2-10, width/2+10), 10, 10));

}

for (var m = 0;  m < particles.length; m++ ){
  particles[m].display();

}

for (var m = 0;  m < divisions.length; m++ ){
  divisions[m].display();

}

for (var m = 0;  m < plinkos.length; m++ ){
  plinkos[m].display();

}

function draw() {
  background(0);
  drawSprites();
}