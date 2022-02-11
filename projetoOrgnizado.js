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
const nome = 'Jefferson';
// prompt('Qual o nome do seu guerreiro? ');

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
  stamina: 100, //Energia
  itens: [],
};

// ---- Reino 1 : Floresta Tropical / Condado ---- //

// Colheita com o Elfo Armador
while (caminho != 'bosque' && caminho != 'ferreiro' && caminho != 'exercito') {
  console.log('Que caminho você gostaria de iniciar? ');
  var caminho = prompt('Para escolher digite: Bosque, Ferreiro ou Exercito. ');
  let item;

  switch (caminho.toLowerCase()) {
    case 'bosque':
      console.clear();
      console.log('Voce optou pelo Bosque. Daqui vc tem duas opcoes de itens.');
      item = prompt('Escolha um item e digite: Pocao ou Dinheiro. ');
      if (item.trim().toLowerCase() == 'pocao') {
        console.log('Voce pegou o item: POÇÃO');
        sujeitoPersonagem.itens.push({ nome: 'pocao', atrib: 3 });
      } else {
        console.log('Voce pegou o item: Dinheiro');
        sujeitoPersonagem.itens.push({ nome: 'dinheiro', atrib: 3 });
      }
      break;

    case 'ferreiro':
      console.clear();
      console.log(
        'Voce optou pelo Ferreiro. Não é uma caminhada longa, ele faz muitos adornos\n' +
          'as elites e não pode se distanciar muito do palácio do Rei. Daqui vc tem duas opcoes..'
      );
      item = prompt(`Escolha um item e digite: Armadura ou Escudo. `);
      if (item.trim().toLowerCase() == 'armadura') {
        console.log('Voce pegou o item: Armadura');
        sujeitoPersonagem.itens.push({ nome: 'armadura', atrib: 3 });
      } else {
        console.log('Voce pegou o item: Escudo');
        sujeitoPersonagem.itens.push({ nome: 'escudo', atrib: 3 });
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
        sujeitoPersonagem.itens.push({ nome: 'espada', atrib: 3 });
      } else {
        console.log('Voce pegou o item: Foice');
        sujeitoPersonagem.itens.push({ nome: 'foice', atrib: 3 });
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
  var opcao = prompt(
    'Qual é a sua opcao pra essa rodada? Digite Azul, Vermelha, ou Verde: '
  );
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

console.log(sujeitoPersonagem);

// --------------------- FUNÇÕES --------------------- //

//Função Avançar
function avancar() {
  console.log();
  prompt('Pressione ENTER para continuar!');
  console.clear();
}

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

// Colinhas

//Teste para conferir objeto
// console.log(sujeitoPersonagem);

//Teste adiciona nova skill
// sujeitoPersonagem.skill = { nome: 'Bola de Fogo', ataque: 10 };
