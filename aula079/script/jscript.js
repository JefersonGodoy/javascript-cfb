var diryJ, dirxJ, jog, velJ, pjx, pjy;
var tamTelaW, tamTelaH;
var jogo;
var frames;
/*
function teclaDw(event) {
	tecla = event.key;
	if (tecla == 'ArrowUp') {
		diryJ = -1;
	} else if (tecla == 'ArrowDown') {
		diryJ = 1;
	}
	if (tecla == 'ArrowLeft') {
		dirxJ = -1;
	} else if (tecla == 'ArrowRight') {
		dirxJ = 1;
	}
	if (tecla == 'Space') {
		//tiro
	}
}

function teclaUp(event) {
	tecla = event.key;
	if ((tecla == 'ArrowUp') || (tecla == 'ArrowDown')) {
		diryJ = 0;
	}
	if ((tecla == 'ArrowLeft') || (tecla == 'ArrowRight')) {
		dirxJ = 0;
	}
	if (tecla == 'Space') {
		//tiro
	}
}
*/
function controlaJogador() {
	pjy += diryJ * velJ;
	pjx += dirxJ * velJ;
	jog.style.top = pjy + "px";
	jog.style.left = pjx + "px";
}

function gameLoop() {
	if (jogo) {
		//Funções de controle
		controlaJogador();
	}
	frames.requestAnimationFrame(gameLoop);
}

function inicia() {
	jogo = true;

	//ini tela
	tamTelaH = window.innerHeight;
	tamTelaW = window.innerWidth;

	//ini jogador
	dirxJ = diryJ = 0;
	pjx = tamTelaW / 2;
	pjy = tamTelaH / 2;
	velJ = 5;
	jog = document.getElementById("naveJog");
	jog.style.top = pjy + "px";
	jog.style.left = pjx + "px";

	gameLoop();

}

window.addEventListener("load", inicia);
document.addEventListener("keydown", event => teclaDw(event));
document.addEventListener("keyup", event => teclaUp(event));