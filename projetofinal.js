var prompt = require("prompt-sync")();

console.log("Bem-vindo ao OuterWorld!");
const nome = prompt("Qual o nome do seu guerreiro? ");

console.log(`Introdução ${nome} `);

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



//----------------------------------------------------------------//



/*Reino 1 : Floresta Tropical / condado/ 
console.log(`Você chegou na Adega do Gnomo! Aqui muitos guerreiros vem para descansar e tomar uns drinks.
Papo vai, Papo vem e você foi desafiado para uma roleta russa com os drinks de um mago poderoso do local. 
São 3 rodadas de shots e duas das três bebidas não fazem bem para sua saude. Uma tirará meio ponto de vida
e a outra tirará um ponto. Espero que você escolha a certa todas as vezes, grande Guerreiro!`);

console.log(`Você chegou na Adega do Gnomo! Aqui muitos guerreiros vem para descansar e tomar uns drinks.
Papo vai, Papo vem e você foi desafiado para uma roleta russa com os drinks de um mago poderoso do local. 
São 3 rodadas de shots e duas das três bebidas não fazem bem para sua saude. Uma tirará meio ponto de vida
e a outra tirará um ponto. Espero que você escolha a certa todas as vezes, grande Guerreiro!`);

* Colheita com o Elfo Armador 
switch com 3 cases, cada um com mais duas opcoes por case que levam a itens
armadura 3 /escudo 2
foice 2 / espada 3
dinheiro/xxxxx


 var caminho = prompt(`Que caminho você gostaria de iniciar? Digite Bosque, Ferreiro ou Exercito`);

} while (caminho != `bosque` && caminho != `ferreiro` && caminho != `exercito`);

switch (caminho) {
  case "A":
    armadura1B = "pesada";
    break;
  case "B":
    armadura1B = "leve";
    break;
  case "C":
    armadura1B = "leve";
    break;
}



console.log(`Você chegou na Adega do Gnomo! Aqui muitos guerreiros vem para descansar e tomar uns drinks.
Papo vai, Papo vem e você foi desafiado para uma roleta russa com os drinks de um mago poderoso do local. 
São 3 rodadas de shots e duas das três bebidas não fazem bem para sua saude. Uma tirará meio ponto de vida
e a outra tirará um ponto. Espero que você escolha a certa todas as vezes, grande Guerreiro!`);


for (let i = 0; i < 3; i++){

        var opcao= prompt("Qual é a sua opcao pra essa rodada? Digite Azul, Vermelha, ou Verde: ")
        var resposta=Math.floor((Math.random() * 3) + 1);
    console.log(resposta)
        if(opcao.trim().toLowerCase()=="azul"){
            console.log("Você escolheu a bebida azul.");
            if(resposta == 1){
  console.log("Você perdeu uma vida.")
} else if (resposta == 2){
  console.log("Você perdeu meia vida.")
} else {
  console.log("Escapou! Não perdeu vida.")
}
        }
        else if(opcao.trim().toLowerCase()=="vermelha"){
            console.log("Você escolheu a bebida vermelha. ");
            if(resposta == 1){
  console.log("Você perdeu uma vida.")
} else if (resposta == 2){
  console.log("Você perdeu meia vida.")
} else {
  console.log("Escapou! Não perdeu vida.")
}
        }
        else if(opcao.trim().toLowerCase()=="verde"){
            console.log("Você escolheu a bebida verde.");
            if(resposta == 1){
            console.log("Você perdeu uma vida.")
} else if (resposta == 2){
  console.log("Você perdeu meia vida.")
} else {
  console.log("Escapou! Não perdeu vida.")
}}}



        * Luta chefão: Gigante da Colina -  vida - dinheiro/itens
console.log(`Você chegou na Adega do Gnomo! Aqui muitos guerreiros vem para descansar e tomar uns drinks.
Papo vai, Papo vem e você foi desafiado para uma roleta russa com os drinks de um mago poderoso do local. 
São 3 rodadas de shots e duas das três bebidas não fazem bem para sua saude. Uma tirará meio ponto de vida
e a outra tirará um ponto. Espero que você escolha a certa todas as vezes, grande Guerreiro!`);

Ataque turno/rodadas / vida gigante 50
Gigante é lento ataca a cada tres rodadas - tirando 1 de vida
*/

/*
let roundCount = 1;

while (true) {
  let playerDmgRandom = getRandomIntInclusive(playerDmgMin, playerDmgMax);
  let opponentDmgRandom = getRandomIntInclusive(opponentDmgMin, opponentDmgMax);

  let playerDmg = playerDmgRandom;
  let opponentDmg = opponentDmgRandom;

  playerDefense = playerDefense - opponentDmg;
  opponentDefense = opponentDefense - playerDmg;

  console.log(`\n\tROUND ${roundCount}
  
\tYou attack your opponent's argument for ${playerDmg} damage.
\tYour opponent attacks your argument for ${opponentDmg} damage.

\tYour defense:    ${playerDefense}
\tYour opponent's: ${opponentDefense}\n`);

  roundCount++;

  prompt(`    Press ENTER for next round `);

  if (playerDefense <= 0 || opponentDefense <= 0) {
    console.log(`\n    Oh, it looks like that was the last round...`);
    prompt(`    Press ENTER for results `);
    break;
  }
}

console.clear();

if (playerDefense > opponentDefense) {
  console.log(
    `\n[WIN] You carried yourself well. The positive attributes you have shown throughout this journey have earned you the title of Supreme Ruler. Congratulations.\n`
  );
} else if (playerDefense < opponentDefense) {
  console.log(
    `\n[LOSE] Your choices in life have led to your inevitable defeat.\n`
  );
} else if (playerDefense == opponentDefense) {
  console.log(
    `\n[DRAW] Neither you nor your opponent were able to convince the people that you are fit to rule... The search for a new leader continues.\n`
  );
}

*/

//----------------------------------------------------------------//

console.log(`Bem vindo à Montanha da Perdição.

Abandone toda a esperança, você que entra por esses portões.`);




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
  let velho = 0;
  let personagem = 0;
  let moeda = 0;

  do {
    console.log(`\nRodada ${i + 1}\n`);
    personagem = parseInt(prompt('Escolha uma opção: 1 - Cara | 2 - Coroa: '));
    if (personagem == 1) {
      velho = 2;
    } else if (personagem == 2) {
      velho = 1;
    } else {
      console.log('Opção inválida!! \n');
    }
    moeda = Math.floor(2 * Math.random() + 1);
  } while (personagem != 1 && personagem != 2);

  if (personagem == moeda) {
    vitoriaPersonagem++;
  } else {
    vitoriaVelho++;
  }

  console.log(
    `Placar: Velho: ${vitoriaVelho} Personagem: ${vitoriaPersonagem}`
  );
}

if (vitoriaPersonagem > vitoriaVelho) {
  console.log('\nParabens! \nVocê ganhou a disputa e recebeu uma rede de pesca!');
  //aqui o personagem adiciona a rede de pesca na sacola de itens
} else {
  console.log('\nQue pena! \nVocê perdeu a disputa!');
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
