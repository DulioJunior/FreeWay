//código carros
//lista:
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [47, 102, 154, 217, 267, 321];
let velocidadeCarros = [2.2, 2.5, 3.2, 4, 5, 4];

let compCar = 40; //comprimento do carro
let larguraCar = 30; // largura do carro

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i += 1){ // poderia ser i++
    image(imagemCarros[i], xCarros[i], yCarros[i], compCar, larguraCar);
  }
}

function movimentaCarro(){
  for (let c = 0; c < imagemCarros.length; c += 1){ //poderia ser c++
    xCarros[c] -= velocidadeCarros[c];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let v = 0; v < imagemCarros.length; v += 1){ //poderia ser v++
    if (passouTodaTela(xCarros[v])) {
      xCarros[v] = 600;
    }
  } 
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}