let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 15;

let rBolinha = dBolinha / 2;

let velXBolinha = 6;
let velYBolinha = 6;

let xRaquete = 5;
let yRaquete = 150;
let compRaquete = 10;
let altRaquete = 90;

let colidiu = false;

let xOponente = 585;
let yOponente = 150;
let velYOponente;

let meusPontos = 0;
let pontosOponente = 0;

let chanceDeErrar = 0;

let backgroundImage;

function preload() {
  backgroundImage = loadImage('ping-pong.png');
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(backgroundImage);
  mostraBolinha();
  moveBolinha();
  verificaBordas();
  mostraRaquete(xRaquete, yRaquete);
  moveMinhaRaquete();
  verificaMinhaRaquete();
  colideBiblioteca(xRaquete, yRaquete);
  mostraRaquete(xOponente, yOponente);
  movimentaOponente();
  colideBiblioteca(xOponente, yOponente);
  bolinhaNaoFicaPresa();
  incluiPlacar();
  marcaPonto();
}

function bolinhaNaoFicaPresa(){
  if(xBolinha - rBolinha < xRaquete && yBolinha - rBolinha < yRaquete + altRaquete && yBolinha + rBolinha > yRaquete){
    xBolinha *= 3
  } 
}
     
function mostraBolinha(){
  circle(xBolinha, yBolinha, dBolinha);
}

function moveBolinha(){
  xBolinha += velXBolinha;
  yBolinha += velYBolinha;
}

function verificaBordas(){
  if(xBolinha + rBolinha > width || xBolinha - rBolinha < 0){
    velXBolinha *= -1;
  }
  if(yBolinha + rBolinha > height || yBolinha - rBolinha <0){
    velYBolinha *= -1;
  }
}

function mostraRaquete(x, y){
  rect(x, y, compRaquete, altRaquete);
}

function moveMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    if (yRaquete <= 2) {
      yRaquete = yRaquete;
    } else {
      yRaquete -= 10;
    }

  }
  if(keyIsDown(DOWN_ARROW)){
    if (yRaquete >= 310) {
      yRaquete = yRaquete;
    } else {
      yRaquete += 10;
    }
  }
}

function verificaMinhaRaquete(){
  if(xBolinha - rBolinha < xRaquete + compRaquete && yBolinha - rBolinha < yRaquete + altRaquete && yBolinha + rBolinha > yRaquete){
    velXBolinha *= -1;
  }
}

function colideBiblioteca(x, y){
  colidiu = collideRectCircle(x, y, compRaquete, altRaquete, xBolinha, yBolinha, rBolinha);
  if(colidiu){
   velXBolinha *= -1; 
  }
}

function movimentaOponente(){
  if(keyIsDown(87)){
    if (yOponente <= 2) {
      yOponente = yOponente
    } else {
      yOponente -= 10;
    }
  }
  if(keyIsDown(83)){
    if (yOponente >= 310) {
      yOponente = yOponente
    } else {
      yOponente += 10;
    }
  }
}

function incluiPlacar(){
  stroke(0);
  textAlign(CENTER);
  textSize(16);
  fill(color(0, 255, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(0, 0, 255));
  rect (450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}