var racket = document.getElementById('bat1');
var racket2 = document.getElementById('bat2');
var ball = document.getElementById('ball');
var field = document.getElementById('field');
var breedte = window.innerWidth;
var hoogte = window.innerHeight;
var gameOver = document.getElementsByClassName('game-over')[0];

var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2')
var standP1 = 0;
var standP2 = 0;

var l = 100;
var h = 100;
var racPos = racket.style.bottom = l+"px";
var racPos2 = racket2.style.top = h+"px";

var x = breedte / 2 - 25;
var y = hoogte /2 -25;
var dx = 5;
var dy = 5;
ball.style.left = x + "px";
ball.style.top = y + "px";


function onKey(event) {
  let k = event.key;
  let l = event.key;
  if (k == "w" || k == "W") {
    leftUp();
  }
  else if (k == "s" || k == "S" ) {
    leftDown();
  }
  if (l == "o" || l == "O") {
    rightUp();
  }
  else if (l == "l" || l == "L") {
    rightDown();
  }
  if (k == "Q" || k == "q") {
    gameOver.style.display = "block"
  }
}

function leftUp() {
  if (l < hoogte - 200) {
  l = l +30;
  }
}

function leftDown() {
  if (l > 0) {
    l = l -30;
  }
}

function rightUp() {
  if (h > 0) {
    h = h -30;
  }
}

function rightDown() {
  if (h < hoogte - 200) {
    h = h + 30;
  }
}

function animate() {
  requestAnimationFrame(animate);
  racPos = racket.style.bottom = l+"px";
  racPos2 = racket2.style.top = h+"px";

  y += dy;
  ball.style.top = y + "px";

  if (y > hoogte - 50) {
    dy=-dy
  }
  if (y < 0) {
    dy=-dy
  }

  x += dx;
  ball.style.left = x + "px";
  if (x < 100 && x > 50 && y > hoogte - l - 200 && y < hoogte - l) {
    dx=-dx;
  }
  if (x > breedte - 150 && x < breedte - 100 && y > h && y < h + 200) {
    dx=-dx;
  }
  if (x < 0) {
    win2();
  }
  if (x > breedte) {
    win1();
  }
}
animate();

function win2() {
  standP2++;
  player2.innerHTML = standP2;
  x = breedte /2;
  y = hoogte /2;
  l = 100;
  h = 100;
  dy = 5;
  dx = 5;
}

function win1() {
  x = breedte / 2 -25;
  y = hoogte /2 -25;
  standP1++;
  player1.innerHTML = standP1;
  l = 100;
  h = 100;
  dy = 5;
  dx = -5;
}
