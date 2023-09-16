//senário e sons do jogo:
let imagemDaEstrada;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemAtor;

let somDaTrilha;
let somDaColisao;
let somDosPontos;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]; //lista imagem carros para imagem.js
  
  somDaTrilha = loadSound("sons/trilha.mp3"); //som da trilha na pasta sons
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDosPontos = loadSound("sons/pontos.wav");
}