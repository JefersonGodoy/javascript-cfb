//Elementos
var vBtIniciar, vBola, vCpu, vJogador, vPaineltxtpontos;

//Controle de animação
var game, frames;

//Posições
var posBolaX, posBolaY;
var posJogadorY;
var posCpuY;

//Direção de acordo com a tela
var dirJy;

//Posições iniciais
var posJogIniY = 180, posCpuIniY = 180;
var posBolaIniX = 475, posBolaIniy = 240;

//Tamanhos
var campoX = 0, campoY = 0, campoW = 960, campoH = 500;
var barraW = 20, barraH = 140, bolaW = 20, bolaH = 20;

//Direção
var bolaX, bolaY;
var cpuY = 0;

//Velocidade
var velBola, velCpu, velJogador;

//Controle
var pontos = 0;
var tecla;
var jogo = false

function teclaDw() {
    tecla = event.keyCode;
}

function teclaUp() {

}

function game() {
    if (jogo) {

    }

    frames = requestAnimationFrame(game);
}

function iniciaJogo() {
    if (!jogo) {
        cancelAnimationFrame(frames);
        jogo = true;
        dirJy = 0;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniy;
        posJogadorY = 0;
        posCpuY = posCpuIniY;
        game();
    }

}

function inicializa() {
    vBtIniciar = document.getElementById("btIniciar");
    vBtIniciar.addEventListener("click", iniciaJogo);
    vJogador = document.getElementById("dvJogador");
    vCpu = document.getElementById("dvCpu");
    vBola = document.getElementById("dvBola");
    vPaineltxtpontos = document.getElementById("txtPontos");
    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keydown", teclaUp);
}


window.addEventListener("load", inicializa)