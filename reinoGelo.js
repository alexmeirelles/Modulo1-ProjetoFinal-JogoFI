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
  stamina: 50,
  ataque: 1,
  // defesa: 100,
  itens: [],
};

const dragaoGelo = {
  vida: 100,
  ataque: 1,
  especial: 2,
};

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
  avancar();
}

if (vitoriaPersonagem > vitoriaVelho) {
  console.log(
    '\nParabens! \nVocê ganhou o duelo e recebeu uma vara de pescar!'
  );
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
    let adiciona = Math.floor(5 * Math.random() + 5);
    console.log(
      `Pesca ${i + 1}: Voce encontrou 1 peixe e recebeu ${adiciona} de vida`
    );
    sujeitoPersonagem.vida += adiciona;
  }
} else {
  console.log(
    'Como voce não tem uma vara de pesca, voce tentou pegar um peixe com a mão. \n' +
      'Voce até conseguiu pegar um, mas foi um peixe muito pequeno e ainda acabou congelando a mão, \n' +
      'você ganhou apenas 2 de vida pelo peixe, mas perdeu 15 de stamina pela mão congelada!'
  );
  sujeitoPersonagem.vida += 2;
  sujeitoPersonagem.stamina -= 15;
}

console.log(sujeitoPersonagem);

// Luta chefão Dragão de gelo

// while (sujeitoPersonagem.vida > 0 && dragaoGelo.vida) {}

// let dano = 0;
// if (sujeitoPersonagem.vida < dragaoGelo.vida) {
//   console.log('menor');
// } else {
//   console.log('maior');
//   dano = porrada(dragaoGelo.ataque);
//   sujeitoPersonagem.vida -= dano;
// }

// function porrada(forca) {
//   forca *= Math.floor(5 * Math.random());
//   return forca;
// }

// console.log(sujeitoPersonagem);
// console.log(dragaoGelo);

// funções

function avancar() {
  console.log();
  prompt('Pressione ENTER para continuar!');
  console.clear();
}

function verificaItem(nome) {
  let existe = sujeitoPersonagem.itens.find((x) => x.nome === nome);
  return existe;
}