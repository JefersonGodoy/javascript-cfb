//Elementos
var vBtIniciar, vBola, vCpu, vJogador, vPaineltxtpontos;

//Controle de animação
var game, frames;

//Posições
var posBolaX, posBolaY;
var posJogadorX, posJogadorY;
var posCpuX, posCpuY;

//Direção de acordo com a tela
var dirJy;

//Posições iniciais
var posJogIniY = 180, posJogIniX = 0;
var posCpuIniY = 180, posCpuIniX = 930;
var posBolaIniX = 475, posBolaIniY = 240;

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
var jogo = false;

function controlaJog() {
    if (jogo) {
        posJogadorY += velJogador * dirJy;
        if (
            ((posJogadorY + barraH) >= campoH) || ((posJogadorY) <= 0)
        ) {
            posJogadorY += (velJogador * dirJy) * (-1);
        }
        vJogador.style.top = posJogadorY + "px";
    }
}

function controlaCpu() {
    if (jogo) {
        if (
            (posBolaX > (campoW / 2)) &&
            (bolaX > 0)) {
            //Movimentar CPU
            if (((posBolaY + (bolaH / 2)) > ((posCpuY + (barraH / 2))) + velCpu)) {
                //Mover para baixo
                if ((posCpuY + barraH) <= campoH) {
                    posCpuY += velCpu;
                }
            } else if ((posBolaY + (bolaH / 2)) < (posCpuY + (barraH / 2)) - velCpu) {
                //Mover para cima
                if (posCpuY >= 0) {
                    posCpuY -= velCpu;
                }
            }
        } else {
            //Posicionar a CPU no centro
            if (
                (posCpuY + (barraH / 2)) < (campoH / 2)) {
                posCpuY += velCpu;
            } else if (
                (posCpuY + (barraH / 2)) > (campoH / 2)) {
                posCpuY -= velCpu;
            }

        }
        vCpu.style.top = posCpuY + "px";
    }
}

function controlaBola() {
    //Movimentação da bola
    posBolaX += velBola * bolaX;
    posBolaY += velBola * bolaY;

    //Colisão com o jogador
    if (
        (posBolaX <= posJogadorX + barraW) &&
        ((posBolaY + bolaH >= posJogadorY) &&
            (posBolaY <= posJogadorY + barraH))) {
        bolaY = (((posBolaY + (bolaH / 2)) -
            (posJogadorY + (barraH / 2))) / 32);
        bolaX *= -1;
    }

    //Colisão com o CPU
    if (
        (posBolaX >= posCpuX - barraW) &&
        ((posBolaY + bolaH >= posCpuY) &&
            (posBolaY <= posCpuY + barraH))) {
        bolaY = (((posBolaY + (bolaH / 2)) -
            (posCpuY + (barraH / 2))) / 32);
        bolaX *= -1;
    }

    //Limite superior e inferior

    if ((posBolaY >= 480) || (posBolaY <= 0)) {
        bolaY *= -1;
    }

    //Saiu da tela, pela direita e pela esquerda
    if (posBolaX >= (campoW - bolaW)) {
        velBola = 0;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        pontos++
        vPaineltxtpontos.value = pontos;
        jogo = false;
        vJogador.style.top = posJogadorY + "px";
        vCpu.style.top = posCpuY + "px";
    } else if (posBolaX <= 0) {
        velBola = 0;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        pontos--;
        vPaineltxtpontos.value = pontos;
        jogo = false;
        vJogador.style.top = posJogadorY + "px";
        vCpu.style.top = posCpuY + "px";
    }

    vBola.style.top = posBolaY + "px";
    vBola.style.left = posBolaX + "px";
}

function teclaDw(event) {
    tecla = event.key;
    if (tecla == 'ArrowUp') {
        dirJy = -1;
    } else if (tecla == 'ArrowDown') {
        dirJy = 1;
    }
}

function teclaUp(event) {
    tecla = event.key;
    if (tecla == 'ArrowUp') {
        dirJy = 0;
    } else if (tecla == 'ArrowDown') {
        dirJy = 0;
    }
}

function game() {
    if (jogo) {
        controlaJog();
        controlaBola();
        controlaCpu();
    }

    frames = requestAnimationFrame(game);
}

function iniciaJogo() {
    if (!jogo) {
        velBola = velCpu = velJogador = 8;
        cancelAnimationFrame(frames);
        jogo = true;
        dirJy = 0;
        bolaY = 0;
        if ((Math.random() * 10) < 5) {
            bolaX = -1;
        } else {
            bolaX = 1;
        }
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posJogadorX = posJogIniX;
        posCpuY = posCpuIniY;
        posCpuX = posCpuIniX;
        game();
    }

}

function inicializa() {
    velBola = velCpu = velJogador = 8;
    vBtIniciar = document.getElementById("btIniciar");
    vBtIniciar.addEventListener("click", iniciaJogo);
    vJogador = document.getElementById("dvJogador");
    vCpu = document.getElementById("dvCpu");
    vBola = document.getElementById("dvBola");
    vPaineltxtpontos = document.getElementById("txtPontos");
    document.addEventListener("keydown", event => teclaDw(event));
    document.addEventListener("keyup", event => teclaUp(event));
}


window.addEventListener("load", inicializa);