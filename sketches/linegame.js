var best = 0;
var bestl = [0,0,0,0];
var worst = 0;
var worstl = [0,0,0,0];


function delta(i, j) {
  return Math.abs(i-j);
}

function dst(x1, y1, x2, y2) {
  return sqrt(Math.pow(delta(x1,x2), 2) + Math.pow(delta(y1,y2), 2))
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);
}

function draw() {
  background(255);
  stroke(100);
  line(pmouseX, pmouseY, mouseX, mouseY);
  stroke('#EC6A5C');
  line(worstl[0], worstl[1], worstl[2], worstl[3]);
  stroke('#67D5B5');
  line(bestl[0], bestl[1], bestl[2], bestl[3]);
  var dist = dst(pmouseX, pmouseY, mouseX, mouseY);
  if (dist > 0) {
    if (best != 0) {
      if (dist > best) {
        best = dist;
        bestl = [pmouseX, pmouseY, mouseX, mouseY];
      }
    } else {
      best = dist;
      bestl = [pmouseX, pmouseY, mouseX, mouseY];
    }
    if (worst != 0) {
      if (dist < worst) {
        worst = dist;
        worstl = [pmouseX, pmouseY, mouseX, mouseY];
      }
    } else {
      worst = dist;
      worstl = [pmouseX, pmouseY, mouseX, mouseY];
    }
  }
}
