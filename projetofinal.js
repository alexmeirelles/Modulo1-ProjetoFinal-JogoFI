var prompt = require("prompt-sync")();

console.log("Bem-vindo ao OuterWorld!");
const nome = prompt("Qual o nome do seu guerreiro? ");

console.log(`Introdução ${nome} `);

//let vida = 5;
//let stamina = 10;
//const itens = [];

//function golpe() {
//  var porrada = 0.3 * vida + 0.5 * stamina + 0.2 * itens;
//}

var danoRecebido = 0;


const sujeitoPersonagem = {
  nome: nome,
  vida: 5,
  stamina: 10,
  itens: [0],
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

/*Reino 1 : Floresta Tropical / condado/ 

* Colheita com o Elfo Armador 
switch com 3 cases, cada um com mais duas opcoes por case que levam a itens
armadura/escudo
foice/espada
dinheiro/xxxxx

* Jogo bebida - adega do gnomo
3 rodadas de bebida - tres bebidas - azul vermelha verda
escolhida qual faz o que com random
uma tira uma vida
outra tira meia
outra faz nada

* Luta chefão: Gigante da Colina -  vida - dinheiro/itens

Ataque turno/rodadas / vida gigante 50
Gigante é lento ataca a cada tres rodadas - tirando 1 de vida
*/

/*
- Dentro Vulcão/montanha
* Labirinto - pasagem de tempo
*
* Luta chefão minotauro - vida - dinheiro/itens



- Reino Gelo
* Velho Misterioso - Jogar cara ou coroa para ganhar uma rede de pesca
* Pescar pela sobrevivencia - Se tiver a rede de pesca pega peixes que restauram de 60% a 80%
se não tiver a rede de pescar ele pesca so um peixe que restaura até 20%
* Luta chefão Dragão de gelo - vida - dinheiro/itens

Como essas escolhas vão impactar na história e nas possibilidades de 
escolha futuras?



Como você irá controlar o passar do tempo?

Com isso pronto você já pode começar a colocar em código:
Crie variáveis para armazenar os status do personagem (Fome? Dinheiro? 
    Saúde? Força?). Que tipo de variável seria a mais adequada para isso?
Crie perguntas que alterarão esses status para testar sua funcionalidade;
Crie um laço de repetição que determinará os ciclos em que a história vai 
se passar. O que acontecerá ao final do ciclo? Como ficarão os status?



Lembre-se: Use sua criatividade, mas cuidado para não criar um projeto 
megalomaníaco! Vocês terão um bom tempo para fazer o projeto, mas durante 
esse tempo com certeza novas ideias surgirão e você precisará fazer várias 
alterações. A tentação pode ser grande, mas cuidado para não deixar o 
projeto tomar proporções de modo que não seja possível de ser executado 
dentro do prazo dado.
*/
