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
	stamina: 100,
	ataque: 5,
	itens: [{ nome: 'espada', valor: 20 }],
	skills: [{ nome: 'Bola de fogo', valor: 50, uso: 3 }],
	status: function () {
		var status = `Nome: ${this.nome} Vida: ${this.vida.toFixed(1)} Stamina: ${this.stamina} Itens: ${this.itens[0].nome}`;
		return status;
	},
};

const gigante = {
	nome: 'Hercules',
	vida: 60,
	ataque: 2,
};

const cerberino = {
	nome: 'Cerberino',
	vida: 80,
	ataque: 3,
};

const dragaoGelo = {
	nome: 'Viserion',
	vida: 100,
	ataque: 5,
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

let rodada;

function fight(mob, skillNome) {
	rodada = 0;
	while (sujeitoPersonagem.vida > 0 && mob.vida > 0) {
		let dano = 0;
		let escolha = 0;
		let skill = verificaskills(skillNome);

		console.log();
		console.log(`${sujeitoPersonagem.nome} HP: ${sujeitoPersonagem.vida.toFixed(1)} e ${mob.nome} HP: ${mob.vida.toFixed(1)}`);

		console.log();
		console.log(`Ataque de ${sujeitoPersonagem.nome}: `);
		if (skill == undefined) {
			skill = { nome: 'Ataque forte', valor: 0, uso: 0 };
			console.log(`Você não possui nenhuma skill`);
		} else {
			console.log(`Quantidade de ${skill.nome}:  ${skill.uso}`);
		}
		escolha = parseInt(prompt(`Escolha uma alternativa: 1 - Ataque comum | 2 - ${skill.nome} `));
		switch (escolha) {
			case 1:
				dano = porrada(1, 1, sujeitoPersonagem.ataque, sujeitoPersonagem.itens[0], skill);
				mob.vida -= dano;
				break;
			case 2:
				dano = porrada(1, 2, sujeitoPersonagem.ataque, sujeitoPersonagem.itens[0], skill);
				mob.vida -= dano;
				break;
			default:
				dano = 0;
		}

		if (mob.vida <= 0) {
			break;
		}

		console.log();
		console.log(`Ataque de ${mob.nome}: `);
		escolha = +prompt('Escolha uma alternativa: 1 - Defender | 2 - Correr ');
		switch (escolha) {
			case 1:
				dano = porrada(2, 1, mob.ataque);
				sujeitoPersonagem.vida -= dano;
				break;
			case 2:
				dano = porrada(2, 2, mob.ataque);
				sujeitoPersonagem.vida -= dano;
				break;
			default:
				dano = 0;
		}

		rodada++;
	}
}

fight(gigante, '');

console.clear();
console.log(sujeitoPersonagem.status());
console.log(`Foram gastos ${rodada} turnos para definir um campeão`);
avancar();

fight(cerberino, 'Bola de fogo');

console.clear();
console.log(sujeitoPersonagem.status());
console.log(`Foram gastos ${rodada} turnos para definir um campeão`);
avancar();

fight(dragaoGelo, 'Bola de fogo');

console.log();
if (sujeitoPersonagem.vida <= 0) {
	console.log(`${sujeitoPersonagem.nome} perdeu a batalha`);
} else {
	console.log(`${sujeitoPersonagem.nome} venceu a batalha`);
}

function porrada(player, ataque, forca, item, skill) {
	let golpe = 0;

	if (player == 1) {
		if (ataque == 1) {
			golpe = 2 * forca + 0.5 * parseFloat((item.valor * Math.random()).toFixed(1)) * 1;
		} else if (ataque == 2) {
			if (skill.nome == 'Bola de fogo' && skill.uso == 0) {
				console.log(`Nenhuma ${skill.nome}`);
			} else {
				golpe = 5 * forca + 0.5 * parseFloat((skill.valor * Math.random()).toFixed(1)) * 2;
				skill.uso -= 1;
			}
		}
	} else if (player == 2) {
		if (ataque == 1) {
			if (rodada == 2) {
				golpe = 3 * forca + 0.7 * parseFloat(Math.random().toFixed(1) * 15) * 3;
				console.log('Ataque Especial');
			} else {
				golpe = 2 * forca + 0.5 * parseFloat(Math.random().toFixed(1)) * 1;
			}
		} else if (ataque == 2) {
			if (rodada == 2) {
				golpe = 3 * forca + 0.5 * parseFloat(Math.random().toFixed(1) * 15) * 3;
				console.log('Ataque Especial');
			} else {
				golpe = 2 * forca + 0.2 * parseFloat(Math.random().toFixed(1)) * 1;
			}
		}
	}
	console.log(`Golpe: ${golpe.toFixed(1)}`);
	return golpe;
}

console.clear();
console.log(sujeitoPersonagem.status());
console.log(`Foram gastos ${rodada} turnos para definir um campeão`);

function verificaskills(nome) {
	let existe = sujeitoPersonagem.skills.find((x) => x.nome === nome);
	return existe;
}

function avancar() {
	console.log();
	prompt('Pressione ENTER para continuar!');
	console.clear();
}