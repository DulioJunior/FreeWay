//códigos do ator
let xAtor = 80;
let yAtor = 367;
let tamAutor = 30; //tamanho autor
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor,yAtor, tamAutor,tamAutor);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }

  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
      yAtor += 3;
    }
  } 
}

function verificaColisao(){
 //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter) 
  for (let c = 0; c < imagemCarros.length; c += 1){
    colisao = collideRectCircle(xCarros[c], yCarros[c], compCar, larguraCar, xAtor, yAtor, 15);  
    if (colisao){
      voltaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function voltaPosicaoInicial(){
  yAtor = 367;
}

function incluiPontos(){
  textAlign(CENTER);
  stroke (255, 240, 60);
  textSize(25);
  fill(255,240,60);
  text(meusPontos, width / 5, 26);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    voltaPosicaoInicial();
    somDosPontos.play();
  }
}

function podeSeMover(){
  return yAtor < 367;
}