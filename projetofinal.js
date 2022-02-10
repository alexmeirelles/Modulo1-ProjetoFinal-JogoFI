var prompt = require("prompt-sync")();
console.log();
console.log("/--------------------------------------------/");
console.log("***        Bem-vindo ao OuterWorld!        ***");
console.log("/--------------------------------------------/");
console.log();
const nome = prompt("Qual o nome do seu, guerreiro? ");
console.log();
console.log(`Ah Nobre Guerreiro ${nome}!! Eu já lhe aguardava! A Princesa Astrid já havia me dito de sua chegada.. `);
console.log(`Seu nome por essas bandas já é famoso e sei que você veio para provar as aventuras de nosso Vale. Ele não é brincadeira não, muitos aventureiros já ficaram pelo caminho. Mas, você, eu sei que você é de uma graduação diferente!`);
console.log(`Como você viajou o dia todo, peço que você se junte ao nosso salão principal, hoje é dia de Cordeiro e do vinho das Montanhas de Ziu! Um espetáculo, embalará o seu sono.. `);
console.log(`Amanha você partirá, após nosso café Imperial. Uma dose de carboidrato e proteínas lhe deixarão pronto para desfiladeiros e Dragões `);

var danoRecebido = 0;

const sujeitoPersonagem = {
  nome: nome,
  vida: 5,
  stamina: 10,
  itens: [],
  porrada: function () {
      // caso ache melhor um retorno com mais casas decimais, basta aumentar argumento de toFixed
    const dano =
      0.3 * this.vida + 0.5 * parseFloat((this.stamina * Math.random()).toFixed(1)) + 0.2 * this.itens;
    return dano;
  },
};
console.log(sujeitoPersonagem.nome);

//a função porrada retorna o valor de dano. Nao é possivel invocar a variável dano

console.log(sujeitoPersonagem.porrada());

// Adicionando nova skill
sujeitoPersonagem.bolaDeFogo = function bolaDeFogo() {
    // caso ache melhor um retorno com mais casas decimais, basta aumentar argumento de toFixed
  const dano =
    0.7 * this.vida + 0.5 * parseFloat((this.stamina * Math.random()).toFixed(1)) + 0.2 * this.itens;
  return dano;
},


console.log(sujeitoPersonagem);
console.log(`Dano bola de fogo= ${sujeitoPersonagem.bolaDeFogo()}`);

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
          break;
      }
  }
}

sleep(500);


//----------------------------------------------------------------//



//Reino 1 : Floresta Tropical / condado/ 
console.log(`Caminhada do caralho Você chegou na Adega do Gnomo! Aqui muitos guerreiros vem para descansar e tomar uns drinks.
Papo vai, Papo vem e você foi desafiado para uma roleta russa com os drinks de um mago poderoso do local. 
São 3 rodadas de shots e duas das três bebidas não fazem bem para sua saude. Uma tirará meio ponto de vida
e a outra tirará um ponto. Espero que você escolha a certa todas as vezes, grande Guerreiro!`);

console.log(`Caminhada do caralho Você chegou na Adega do Gnomo! Aqui muitos guerreiros vem para descansar e tomar uns drinks.
Papo vai, Papo vem e você foi desafiado para uma roleta russa com os drinks de um mago poderoso do local. 
São 3 rodadas de shots e duas das três bebidas não fazem bem para sua saude. Uma tirará meio ponto de vida
e a outra tirará um ponto. Espero que você escolha a certa todas as vezes, grande Guerreiro!`);

/* Colheita com o Elfo Armador 
switch com 3 cases, cada um com mais duas opcoes por case que levam a itens
armadura 3 /escudo 2
foice 2 / espada 3
dinheiro/xxxxx*/


var caminho = prompt(`Que caminho você gostaria de iniciar? Digite Bosque, Ferreiro ou Exercito`);

while (caminho != `bosque` && caminho != `ferreiro` && caminho != `exercito`);
switch (caminho) {
  case "bosque":
    console.log("Voce optou pelo bosque. Daqui vc tem duas opcoes de itens.");
    var itembosque = prompt(`Quer qual das duas opcoes, que leva a pocao ou ao xxx?`);
    if(itembosque.toLowerCase == "pocao"){
      console.log("voce pegou a pocao de item");
      sujeitoPersonagem.itens.push({
        nome: "pocao",
        valor: 30
      });
    }else {
      console.log("voce pegou o dinheiro de item");
      sujeitoPersonagem.itens.push({
        nome: "dinheiro",
        valor: 30
      });
    }
    break;
  case "ferreiro":
    console.log("Voce optou pelo Ferreiro. Não é uma caminhada longa, ele faz muitos adornos as elites e não pode se distanciar muito do palácio do Rei. Daqui vc tem duas opcoes..");
    var itemferreiro = prompt(`Quer qual das duas opcoes, Armadura ou Escudo?`);
    if(itemferreiro.toLowerCase == "armadura"){
      console.log("voce pegou a armadura de item");
      sujeitoPersonagem.itens.push({
        nome: "armadura",
        valor: 30
    })else {
      console.log("voce pegou o escudo de item");
      sujeitoPersonagem.itens.push({
        nome: "escudo",
        valor: 30
      });
    }
    break;
  case "exercito":
    console.log("Voce optou ir visitar a artilharia pesada. Você considera que é bom estar armado para sua jornada. Bem pensado, afinal, quais desafios você pode encontrar pelo caminho!? E como transpo-los sem nada na mão!?");
    var itemexercito = prompt(`Você chega e é recepcionado pelo Sargeto Orveu, ele é o responsável pelas armas de combate e já aguardava a sua chegada. Orveu tem uma presença dominante e não é de muitas palavras. Pergunta rapidamente qual será a sua jornada, o que possivelmente você irá enfrentar e pega dos itens a mão. Uma espada e uma foice. Quer qual das duas opcoes, digite foice ou espada: `);
    if(itemexercito.toLowerCase == "espada"){
      console.log("voce pegou a espada de item");
      sujeitoPersonagem.itens.push({
        nome: "espada",
        valor: 30
      });
    }else {
      console.log("voce pegou a foice de item");
      sujeitoPersonagem.itens.push({
        nome: "foice",
        valor: 30
      });
    }
    break;
  default:
}

console.log(`Você chegou na Adega do Gnomo! Aqui muitos guerreiros vem para descansar e tomar uns drinks.
Papo vai, Papo vem e você foi desafiado para uma roleta russa com os drinks de um mago poderoso do local. 
São 3 rodadas de shots e duas das três bebidas não fazem bem para sua saude. Uma tirará meio ponto de vida
e a outra tirará um ponto. Espero que você escolha a certa todas as vezes, grande Guerreiro!`);


for (let i = 0; i < 3; ) {
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
    console.log('Opção inválida! Digite a palavra!\n');
    continue;
  }
  i++;
}

function bebidaEscolhida(opcao, resposta) {
  console.log(`\nVocê escolheu a bebida ${opcao}. `);
  if (resposta == 1) {
    console.log('Você perdeu uma vida.\n');
  } else if (resposta == 2) {
    console.log('Você perdeu meia vida.\n');
  } else {
    console.log('Escapou! Não perdeu vida.\n');
  }
}

         
console.log(`Luta chefão: Gigante da Colina -  vida - dinheiro/itens Você chegou na Adega do Gnomo! Aqui muitos guerreiros vem para descansar e tomar uns drinks.
Papo vai, Papo vem e você foi desafiado para uma roleta russa com os drinks de um mago poderoso do local. 
São 3 rodadas de shots e duas das três bebidas não fazem bem para sua saude. Uma tirará meio ponto de vida
e a outra tirará um ponto. Espero que você escolha a certa todas as vezes, grande Guerreiro!`);

//Ataque turno/rodadas / vida gigante 50
//Gigante é lento ataca a cada tres rodadas - tirando 1 de vida


let r = false
let vida = 50
let dano

while (r == false);

do{
    dano = +prompt(`Digite o Dano do herói (5 a 10): `);
    
    if (dano < 5|| dano > 10 ){;
        console.log(`Digite um valor entre 5 e 10.`);
        r = false;
    }
    
    else if (dano >= 5 && dano <= 10){;
        r = true;
    }}while (r == false);

let calculo

if(vida%dano == 0){
    calculo = vida / dano
}
else if (vida%dano != 0 ){
    calculo = (vida/dano) + 1
}

console.log(`A vida do Troll é de ${vida}Hp`)
console.log(`O dano do Herói causa -${dano}Hp`)


//----------------------------------------------------------------//
console.clear();
console.log(`
"Abandone toda a esperança, você que entra por esses portões."

Você encontra uma figura raquítica, um senhor, que diz: Antes de mais nada você tem que responder 
algumas perguntas (nunca se sabe, de repente você ganha algo)! Será que conhece o inferno?!?!?
Você se parece muito com Dante. Boa sorte!`);

var p1r2= prompt('Quantos níveis tem nessa montanha?');
var p2r2= prompt('Qual o crime mais grave desta região?');
var p3r2= prompt('Quem sou eu?');

//se responder correto dar a skill boladefogo

console.log(`Você deve ter conhecido Caronte, o barqueiro. Sujeito grave, taciturno, "poucas ideias".

Neste reino tudo o que te aguarda são desafios e desventuras. Prepare-se.`)

sleep(20000);
console.clear();
console.log(`${sujeitoPersonagem.nome}`)


/*
- Dentro Vulcão/montanha
* Labirinto - pasagem de tempo
*
* Luta chefão minotauro - vida - dinheiro/itens



//----------------------------------------------------------------//


- Reino Gelo
* Velho Misterioso - Jogar cara ou coroa para ganhar uma rede de pesca
* Pescar pela sobrevivencia - Se tiver a rede de pesca pega peixes que restauram de 60% a 80%
se não tiver a rede de pescar ele pesca so um peixe que restaura até 20%
* Luta chefão Dragão de gelo - vida - dinheiro/itens

//Reino de Gelo
// O personagem se depara com um velho misterioso que lhe oferece uma rede de pesca para
// pegar peixes e se alimentar recuperando um pouco de vida/energia
// Mas para conseguir rede o personagem deve jogar cara ou coroa com o velho
// O jogo tem 3 rodas

let vitoriaPersonagem = 0;
let vitoriaVelho = 0;

for (let i = 0; i < 3; i++) {
  let escolhaVelho = 0;
  let escolhaPersonagem = 0;
  let faceMoeda = 0;

  do {
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

  console.log(
    `Placar: Velho: ${vitoriaVelho} Personagem: ${vitoriaPersonagem}`
  );
}

if (vitoriaPersonagem > vitoriaVelho) {
  console.log('\nParabens! \nVocê ganhou o duelo e recebeu uma rede de pesca!');
} else {
  console.log('\nQue pena! \nVocê perdeu o duelo!');
}



// Pescar pela sobrevivencia - Se tiver a rede de pesca pega peixes que restauram de 50% a 70%
// da vida/energia. Se não tiver a rede de pescar ele usa outro item e pesca so um peixe que restaura até 20%

// if(iten existe na sacola de itens){
//     faz um random para recuperar de 50% a 70% da vida/energia
// }else{
//     faz um randon para recuperar até 20%
// }


// Luta chefão Dragão de gelo - vida - dinheiro/itens

//Implementar aqui a mesma logica dos outros chefões
*/
