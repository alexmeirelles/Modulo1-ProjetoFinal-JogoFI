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

//Controi o personagem e seus atributos
const sujeitoPersonagem = {
  nome: nome,
  vida: 100,
  stamina: 100, //Energia
  ataque: 100,
  defesa: 100,
  itens: [],
};

console.log(sujeitoPersonagem);

//Reino de Gelo
// O personagem se depara com um velho misterioso que lhe oferece uma rede de pesca para
// pegar peixes e se alimentar recuperando um pouco de vida/energia
// Mas para conseguir rede o personagem deve jogar cara ou coroa com o velho
// O jogo tem 3 rodas

let vitoriaPersonagem = 0;
let vitoriaVelho = 0;

for (let i = 0; i < 3; i++) {
  let escolhaPersonagem;
  let faceMoeda;

  do {
    let escolhaVelho;
    console.log(`\nRodada ${i + 1}\n`);
    escolhaPersonagem = parseInt(
      prompt('Escolha uma opção: 1 - Cara | 2 - Coroa: ')
    );
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
}

if (vitoriaPersonagem > vitoriaVelho) {
  console.log('\nParabens! \nVocê ganhou o duelo e recebeu uma rede de pesca!');
  sujeitoPersonagem.itens.push({ nome: 'RedePesca', atrib: 50 });
} else {
  console.log('\nQue pena! \nVocê perdeu o duelo!');
}

// Pescar pela sobrevivencia - Se tiver a rede de pesca pega peixes que restauram de 50% a 70%
// da vida/energia. Se não tiver a rede de pescar ele usa outro item e pesca so um peixe que restaura até 20%

//Verifica se o objeto existe
let item = sujeitoPersonagem.itens.find((x) => x.nome === 'RedePesca');

// Se o item retornar undefined ele não existe
if (item != undefined) {
  console.log('Voce tem Rede de Pesca e pegou muitos paixes. Ganha 50 de vida');
  sujeitoPersonagem.vida += item.atrib;
} else {
  console.log(
    'Como voce não tem uma rede de pesca, voce tentou pegar um peixe com a mão. Voce conseguiu pegar mas foi um peixe muito pequeno e ainda congelou a mão, você recupera apenas 10 de vida mas gastou 50 de stamina'
  );
  sujeitoPersonagem.vida += 10;
  sujeitoPersonagem.stamina -= 50;
}

console.log(sujeitoPersonagem);

// Luta chefão Dragão de gelo - vida - dinheiro/itens

//Implementar aqui a mesma logica dos outros chefões
