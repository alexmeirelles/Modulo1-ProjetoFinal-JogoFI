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
  itens: [{ nome: 'itenQualquer', valor: 1 }],
};

const dragaoGelo = {
  vida: 100,
  ataque: 2,
  especial: 2,
};
console.log(sujeitoPersonagem);
console.log(dragaoGelo);

// Luta chefão Dragão de gelo

/**
Observação: Somente um esboço inicial
- criar exibição da batalha turno por turno
- usar poder especial ao atingir um critério
- dragão usara 3 tipos de ataque dois ramdon e um especial ao atingir um critério
*/

let rodada = 0;
while (sujeitoPersonagem.vida > 0 && dragaoGelo.vida > 0) {
  let dano = 0;

  //Turno do dragao
  dano = porrada(dragaoGelo.ataque);
  sujeitoPersonagem.vida -= dano;

  //Turno do personagem
  dano = porrada(sujeitoPersonagem.ataque + sujeitoPersonagem.itens[0].valor);
  dragaoGelo.vida -= dano;

  rodada++;
}

if (sujeitoPersonagem.vida <= 0) {
  console.log(`${sujeitoPersonagem.nome} perdeu a batalha`);
} else {
  console.log(`${sujeitoPersonagem.nome} venceu a batalha`);
}

function porrada(forca) {
  forca *= Math.floor(5 * Math.random());
  return forca;
}

console.log(`Vida ${sujeitoPersonagem.nome}: ${sujeitoPersonagem.vida} e Dragão: ${dragaoGelo.vida}`);
// console.log(dragaoGelo);
console.log(`Foram gastos ${rodada} turnos para definir um campeão`);
