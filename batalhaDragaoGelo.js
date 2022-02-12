//Chamada do Prompt
var prompt = require('prompt-sync')();

//limpa o console na inicialização
console.clear();

//Inicio -> inserir nome do personagem
console.log('Bem-vindo ao OuterWorld!');
const nome = 'Jefferson';
// prompt('Qual o nome do seu guerreiro? ');

//Apresenta a introdução ao jogador
// console.log(`Introdução ${nome} `);

const sujeitoPersonagem = {
	nome: nome,
	vida: 100,
	stamina: 50,
	ataque: 1,
	itens: [{ nome: 'espada', valor: 1 }],
	skills: [{ nome: 'bolaFogo', valor: 3 }],
	status: function () {
		var status = `nome: ${this.nome} Vida: ${this.vida} Stamina: ${this.stamina} Itens: ${this.itens[0].nome}`;
		return status;
	},
};

const dragaoGelo = {
	vida: 100,
	ataque: 2,
	especial: 2,
};
// console.log(sujeitoPersonagem);
// console.log(dragaoGelo);

// Luta chefão Dragão de gelo

/**
Observação: Somente um esboço inicial
- criar exibição da batalha turno por turno
- usar poder especial ao atingir um critério
- dragão usara 3 tipos de ataque dois ramdon e um especial ao atingir um critério
*/

let rodada = 0;

function fight() {
	while (sujeitoPersonagem.vida > 0 && dragaoGelo.vida > 0) {
		let dano = 0;
		let escolha = 0;

		console.log();
		console.log(`${sujeitoPersonagem.nome} HP: ${sujeitoPersonagem.vida} e Dragão HP: ${dragaoGelo.vida}`);

		console.log();
		console.log('Ataque personagem: ');
		console.log(`Quantidade de ${sujeitoPersonagem.skills[0].nome}:  ${sujeitoPersonagem.skills[0].valor}`);
		escolha = parseInt(prompt('Escolha uma alternativa: 1 - Ataque comum | 2 - Bola de fogo '));
		switch (escolha) {
			case 1:
				dano = porrada(1, 1, sujeitoPersonagem.ataque);
				dragaoGelo.vida -= dano;
				break;
			case 2:
				dano = porrada(1, 2, sujeitoPersonagem.ataque);
				dragaoGelo.vida -= dano;
				break;
			default:
				dano = 0;
		}

		console.log();
		console.log('Ataque Dragao: ');
		escolha = +prompt('Escolha uma alternativa: 1 - Defender | 2 - Correr ');
		switch (escolha) {
			case 1:
				dano = porrada(2, 1, dragaoGelo.ataque);
				sujeitoPersonagem.vida -= dano;
				break;
			case 2:
				dano = porrada(2, 2, dragaoGelo.ataque);
				sujeitoPersonagem.vida -= dano;
				break;
			default:
				dano = 0;
		}

		rodada++;
	}
}

fight();

console.log();
if (sujeitoPersonagem.vida <= 0) {
	console.log(`${sujeitoPersonagem.nome} perdeu a batalha`);
} else {
	console.log(`${sujeitoPersonagem.nome} venceu a batalha`);
}

function porrada(player, ataque, forca) {
	let golpe = 0;

	if (player == 1) {
		if (ataque == 1) {
			golpe = forca + sujeitoPersonagem.itens[0].valor + Math.floor(5 * Math.random());
			console.log({ golpe });
		} else if (ataque == 2) {
			golpe = (forca + sujeitoPersonagem.itens[0].valor) * Math.floor(10 * Math.random() + 10);
			console.log({ golpe });
		}
	} else if (player == 2) {
		if (ataque == 1) {
			golpe = forca * Math.floor(5 * Math.random()) - 1;
			console.log({ golpe });
		} else if (ataque == 2) {
			golpe = forca * Math.floor(5 * Math.random() + 10) - 1;
			console.log({ golpe });
		}
	}
	return golpe;
}

console.log(sujeitoPersonagem.status());
console.log(`Foram gastos ${rodada} turnos para definir um campeão`);