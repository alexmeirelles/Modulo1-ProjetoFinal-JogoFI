//Chamada do Prompt
var prompt = require('prompt-sync')();

//limpa o console na inicialização
console.clear();

//Inicio
console.log();
console.log('/--------------------------------------------/');
console.log('***        Bem-vindo ao OuterWorld!        ***');
console.log('/--------------------------------------------/');
console.log();

//Inserir nome do personagem
const nome = prompt('Qual o nome do seu guerreiro? ');

//Apresenta a introdução ao jogador
console.log(`
Ah Nobre Guerreiro ${nome}!! Eu já lhe aguardava! A Princesa Astrid já havia
me dito de sua chegada. Seu nome por essas bandas já é famoso e sei que você
veio para provar as aventuras de nosso Vale. Ele não é brincadeira não, muitos
aventureiros já ficaram pelo caminho. Mas, você, eu sei que você é de uma
graduação diferente!
`);

avancar();

console.log(`
Ahhh já estava quase me esquecendo! Você passará por três reinos. 
O do nosso Condado, a Montanha da Perdição e o Reino de Gelo. Prepare-se! 
Você enfrentará 3 Desafios em cada um. Seja sábio em suas escolhas.
`);

avancar();

console.log(`
Como você viajou o dia todo, peço que você se junte ao nosso salão principal,
hoje é dia de Cordeiro e do vinho das Montanhas de Ziu! Um espetáculo, embalará
o seu sono...`);
console.log(`
Amanha você partirá, após nosso café Imperial. Uma dose de carboidrato e proteínas
lhe deixarão pronto para desfiladeiros e Dragões!`);

avancar();

//Controi o personagem e seus atributos
const sujeitoPersonagem = {
	nome: nome,
	vida: 100,
	stamina: 100,
	ataque: 5,
	itens: [],
	skills: [],
	status: function () {
		var status = `${this.nome} | Vida: ${this.vida.toFixed(1)} Stamina: ${this.stamina} `;
		return status;
	},
};

//Constroi os Mobs e seus atributos
const gigante = {
	nome: 'Hercules',
	vida: 100,
	ataque: 2,
};

const cerberino = {
	nome: 'Cerberino',
	vida: 120,
	ataque: 3,
};

const dragaoGelo = {
	nome: 'Viserion',
	vida: 150,
	ataque: 5,
};

//Variaveis de controle
let rodada;
let dia = 1;

// ---- Reino 1 : Floresta Tropical / Condado ---- //
console.log(`Bom Dia Guerreiro! Espero que tenha descansado bem, uma nova sequencia de aventura
nos aguarda e vai exigir muito de sua disposição, habilidades e sorte.
Um café forte é uma bela pedida, depois de um banho gelado nas Cascatas de Xelim. 
Você agora precisa se equipar, na saída do condado há varios caminhos para serem escolhidos..`);

// Colheita com o Elfo Armador
while (caminho != 'bosque' && caminho != 'ferreiro' && caminho != 'exercito') {
	console.log('Que caminho você gostaria de iniciar? ');
	var caminho = prompt('Para escolher digite: Bosque, Ferreiro ou Exercito. ');
	let item;

	switch (caminho.toLowerCase()) {
		case 'bosque':
			console.clear();
			console.log('Voce optou pelo Bosque. Daqui vc tem duas opcoes de itens.');
			item = prompt('Escolha um item e digite: Estilingue ou  Mágia. ');
			if (item.trim().toLowerCase() == 'estilingue') {
				console.log('Voce pegou o item: estilingue');
				sujeitoPersonagem.itens.push({ nome: 'estilingue', valor: 10 });
			} else {
				console.log('Voce pegou o item: Mágia do Elfo');
				sujeitoPersonagem.itens.push({ nome: 'magia', valor: 10 });
			}
			break;

		case 'ferreiro':
			console.clear();
			console.log(
				'Voce optou pelo Ferreiro. Não é uma caminhada longa, ele faz muitos adornos\n' +
					'as elites e não pode se distanciar muito do palácio do Rei. Daqui vc tem duas opcoes..'
			);
			item = prompt(`Escolha um item e digite: Punhal ou Martelo. `);
			if (item.trim().toLowerCase() == 'punhal') {
				console.log('Voce pegou o item: Punhal de Ferro');
				sujeitoPersonagem.itens.push({ nome: 'punhal', valor: 15 });
			} else {
				console.log('Voce pegou o item: Martelo');
				sujeitoPersonagem.itens.push({ nome: 'martelo', valor: 20 });
			}
			break;

		case 'exercito':
			console.clear();
			console.log(
				'Voce optou ir visitar a artilharia pesada. Você considera que é bom estar armado para \n' +
					'sua jornada. Bem pensado, afinal, quais desafios você pode encontrar pelo caminho!? \n' +
					'E como transpo-los sem nada na mão!?'
			);
			console.log(
				'Você chega e é recepcionado pelo Sargeto Orveu, ele é o responsável pelas armas de \n' +
					'combate e já aguardava a sua chegada. Orveu tem uma presença dominante e não é de \n' +
					'muitas palavras. Pergunta rapidamente qual será a sua jornada, o que possivelmente você \n' +
					'irá enfrentar e pega dos itens a mão. Uma espada e uma foice. '
			);
			item = prompt('Escolha um item e digite: Foice ou Espada. ');
			if (item.trim().toLowerCase() == 'espada') {
				console.log('Voce pegou o item: Espada');
				sujeitoPersonagem.itens.push({ nome: 'espada', valor: 25 });
			} else {
				console.log('Voce pegou o item: Foice');
				sujeitoPersonagem.itens.push({ nome: 'foice', valor: 10 });
			}
			break;

		default:
			console.clear();
			console.log(`Desculpe, o caminho ${caminho} não existe. \n`);
	}
}

avancar();

console.log(`Você chegou na Adega do Gnomo! Aqui muitos guerreiros vem para descansar e tomar uns drinks.
Papo vai, Papo vem e você foi desafiado para uma roleta russa com os drinks de um mago poderoso 
do local. São 3 rodadas de shots e duas das três bebidas não fazem bem para sua saude. 
Uma tirará meio ponto de vidae a outra tirará um ponto. 
Espero que você escolha a certa todas as vezes, grande Guerreiro!`);

for (let i = 0; i < 3; ) {
	avancar();
	console.log(`Rodada ${i + 1} \n`);
	var opcao = prompt('Qual é a sua opcao pra essa rodada? Digite Azul, Vermelha, ou Verde: ');
	var resposta = Math.floor(Math.random() * 3 + 1);
	console.log(resposta);

	if (opcao.trim().toLowerCase() == 'azul') {
		bebidaEscolhida(opcao, resposta);
	} else if (opcao.trim().toLowerCase() == 'vermelha') {
		bebidaEscolhida(opcao, resposta);
	} else if (opcao.trim().toLowerCase() == 'verde') {
		bebidaEscolhida(opcao, resposta);
	} else {
		console.clear();
		console.log('Opção inválida! Digite a palavra!');
		continue;
	}
	i++;
}
avancar();

// Adcionar Aqui a luta do Reino 1
console.log(`Bem-vindo ao estágio final deste Reino! O final deste e o inicio de novas aventuras! Só há um único problema..
Agora você deve passar pelo Gigante Hércules. Com uma aparência simples, com vestimentas feudais mas com um 
soco poderoso que parece uma forte marreta.
Você é esperto. Conseguirá bater mais vezes. Bata o mais rápido que puder, traga a vida dele a zero... antes da sua.
Hércules aparece: Haha você? Comece.. te dou a oportunidade enquanto vou estralando os dedos..`);

fight(gigante, '');

console.clear();
console.log(`${sujeitoPersonagem.nome} venceu a batalha`);
console.log(sujeitoPersonagem.status());
console.log(`Foram gastos ${rodada + 1} turnos para você consagrar-se campeão`);
avancar();

//mudança de reino, mudança de dia
console.log(`Boa Guerreiro. Este Desafio e este dia se chega ao fim! Uma taverna com boa cama garantirá o seu 
descanso e a recuperação de algum dano de sua jornada.`);
dia++;
console.log(
	`Hoje foi seu dia ${dia} dessa incrível jornada. Sua vida é de ${sujeitoPersonagem.vida.toFixed(
		1
	)} e terá mais 10 acrescido com seu sono reparador!`
);
sujeitoPersonagem.vida += 10;

// ---------------------
// Adcionar Aqui as missões do Reino 2

console.log(`
${sujeitoPersonagem.status()}
"Abandone toda a esperança, você que entra por esses portões."
Você encontra uma figura raquítica, um senhor, que diz: Antes de mais nada você tem que responder 
algumas perguntas (nunca se sabe, de repente você ganha algo)! 
Você se parece muito com Dante. Boa sorte!`);

avancar();
console.log(`${sujeitoPersonagem.status()}`);

console.log(`ENIGMA => você recebe uma letra a cada tentativa (max tentativas: 3) `);
avancar();
enigma();

console.log(`Você acaba de conhecer Caronte, o barqueiro. Sujeito grave, taciturno, "poucas ideias".
Neste reino tudo o que te aguarda são desafios e desventuras. Prepare-se.`);

avancar();

//do {
  console.log(`${sujeitoPersonagem.status()}
    Perigo!!!!
  Você dá de cara com um cachorro gigantesco, de 3 cabeças. Sem dúvidas,
  era Cerberino, o cão abestado.`);
  avancar();
  fight("Cerberino", 100, 10, 9);
  avancar();
  console.log(`Após derrotar Cerberino, você entra no nível em que estão os apostadores. Hora de testar
  sua sorte.`);
  avancar();
  diceGame(3);
  avancar();



// Adicionar Aqui a luta do Reino 2
fight(cerberino, 'Bola de fogo');

console.clear();
console.log(`${sujeitoPersonagem.nome} venceu a batalha`);
console.log(sujeitoPersonagem.status());
console.log(`Foram gastos ${rodada + 1} turnos para você consagrar-se campeão`);
avancar();

//mudança de reino, mudança de dia
console.log(`Boa Guerreiro. Este Desafio e este dia se chega ao fim! Uma taverna com boa cama garantirá o seu 
descanso e a recuperação de algum dano de sua jornada`);
dia++;
console.log(
	`Hoje foi seu dia ${dia} dessa incrível jornada. Sua vida é de ${sujeitoPersonagem.vida.toFixed(
		1
	)} e terá mais 10 acrescido com seu sono reparador!`
);
sujeitoPersonagem.vida += 10;

//Reino de Gelo
console.log(
	`${sujeitoPersonagem.nome}, você acaba de chegar na Cidade do Gelo! Uma nevasca nunca antes 
vista devastou completamente esta cidade e por isso recebeu tal nome. 
Aqui os recursos são escassos e logo voce precisará de comida!
`
);

avancar();

console.log(
	`Após alguns passos para dentro da cidade, você se depara com um velho misterioso.
Ele carrega consigo uma vara de pescar. Você se aproxima dele e pergunta como conseguir
algo para comer. O velho olha para você com um sorriso deboxado e diz que existe um
buraco cortado no gelo a 1km ao norte, e que ali existem peixes. 
`
);

avancar();

console.log(
	`Ele logo te adverte que é muito perigoso tentar pegar um peixe sem uma vara de pescar.
Você pergunta onde encontrar uma vara de pescar e ele te faz uma proposta:
A vara de percar que ele tinha foi tirada de um cadaver que estava congelado.
Ele então te oferece a vara de pescar mas tem um preço, vocês devem jogar cara ou coroa!
São 3 rodas, se você ganhar duas, a vara de pesca será sua! 
`
);

avancar();

// Jogo Cara ou Coroa
let vitoriaPersonagem = 0;
let vitoriaVelho = 0;

for (let i = 0; i < 3; i++) {
	let escolhaPersonagem;
	let escolhaVelho;
	let faceMoeda;

	do {
		console.clear();
		console.log(`\nRodada ${i + 1}\n`);
		escolhaPersonagem = parseInt(prompt('Escolha uma opção: 1 - Cara | 2 - Coroa: '));
		if (escolhaPersonagem == 1) {
			escolhaVelho = 2;
		} else if (escolhaPersonagem == 2) {
			escolhaVelho = 1;
		} else {
			console.log('Opção inválida!! \n');
		}
		faceMoeda = Math.floor(2 * Math.random() + 1);
	} while (escolhaPersonagem != 1 && escolhaPersonagem != 2);

	if (escolhaPersonagem == faceMoeda) {
		vitoriaPersonagem++;
	} else {
		vitoriaVelho++;
	}

	console.log(`Placar: Velho: ${vitoriaVelho} | ${nome}: ${vitoriaPersonagem}`);
	avancar();
}

if (vitoriaPersonagem > vitoriaVelho) {
	console.log('\nParabens! \nVocê ganhou o duelo e recebeu uma vara de pescar!');
	sujeitoPersonagem.itens.push({ nome: 'VaraPesca', valor: 3 });
} else {
	console.log('\nQue pena! \nVocê perdeu o duelo!');
}

avancar();

console.log(
	`O velho simplesmente desapareceu e você continuou seguindo seu caminho! E exatamente
após andar 1Km ao norte, você avistou um buraco cortado no gelo. A fome é tanta que você
correu e foi tentar pegar um peixe para se alimentar!
`
);

avancar();

// Pescar pela sobrevivencia

//Verifica se o objeto existe
let item = verificaItem('VaraPesca');

// Se o item retornar undefined ele não existe
if (item != undefined) {
	console.log(`Voce tem uma vara de pesca e ela foi usada ${item.valor}x.`);
	for (let i = 0; i < item.valor; i++) {
		let adiciona = Math.floor(15 * Math.random() + 5);
		console.log(`Pesca ${i + 1}: Voce encontrou 1 peixe e recebeu ${adiciona} de vida`);
		sujeitoPersonagem.vida += adiciona;
	}
} else {
	console.log(
		'Como voce não tem uma vara de pesca, voce tentou pegar um peixe com a mão. \n' +
			'Voce até conseguiu pegar um, mas foi um peixe muito pequeno e ainda acabou congelando a mão, \n' +
			'você ganhou apenas 10 de vida pelo peixe, mas perdeu 15 de stamina pela mão congelada!'
	);
	sujeitoPersonagem.vida += 10;
	sujeitoPersonagem.stamina -= 15;
}

// Adicionar Aqui a luta do Reino 3
fight(dragaoGelo, 'Bola de fogo');

console.clear();
console.log(`${sujeitoPersonagem.nome} venceu a batalha`);
console.log(sujeitoPersonagem.status());
console.log(`Foram gastos ${rodada + 1} turnos para você consagrar-se campeão`);
avancar();

//mudança de reino, mudança de dia
console.log(`Boa Guerreiro. A sua jornada chegou ao fim e você foi o grande campeão!`);
dia++;
console.log(`Você gastou ${dia} dias para concluir esta jornada. Sua vida final é de ${sujeitoPersonagem.vida.toFixed(1)}!`);

// --------------------- FUNÇÕES --------------------- //

//Função escolha da bebida
function bebidaEscolhida(opcao, resposta) {
	console.clear();
	console.log(`Você escolheu a bebida ${opcao}. `);
	if (resposta == 1) {
		console.log('Você perdeu uma vida.');
		sujeitoPersonagem.vida -= 1;
	} else if (resposta == 2) {
		console.log('Você perdeu meia vida.');
		sujeitoPersonagem.vida -= 0.5;
	} else {
		console.log('Escapou! Não perdeu vida.');
	}
}

//Função que chama a luta X Mob
function fight(mob, skillNome) {
	rodada = 0;
	while (sujeitoPersonagem.vida > 0 && mob.vida > 0) {
		let dano = 0;
		let escolha = 0;
		let skill = verificaskills(skillNome);

		console.log();
		console.log(`Turno ${rodada + 1}`);
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
	console.log();
	if (sujeitoPersonagem.vida < 1) {
		console.log(`${sujeitoPersonagem.nome} HP: ${sujeitoPersonagem.vida.toFixed(1)} e ${mob.nome} HP: ${mob.vida.toFixed(1)}`);
		console.log('Game Over');
		process.exit(1);
	}
}

//Função que retorna a força do golpe
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

//Função Avançar
function avancar() {
	console.log();
	prompt('Pressione ENTER para continuar!');
	console.clear();
}

//Verifica se o item existe na lista de itens
function verificaItem(nome) {
	let existe = sujeitoPersonagem.itens.find((x) => x.nome === nome);
	return existe;
}

//Verifica se a skill existe na lista de skills
function verificaskills(nome) {
	let existe = sujeitoPersonagem.skills.find((x) => x.nome === nome);
	return existe;
}

// Colas


//Teste adiciona nova skill
//sujeitoPersonagem.skills.push({ nome: 'Bola de fogo', valor: 50, uso: 3 });