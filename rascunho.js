
var prompt = require("prompt-sync")();
const sujeitoPersonagem = {
  nome: "julio",
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



var caminho = prompt(`Que caminho você gostaria de iniciar? Digite Bosque, Ferreiro ou Exercito`);

while (caminho != `bosque` && caminho != `ferreiro` && caminho != `exercito`);
switch (caminho) {
  case "bosque":
    console.log("Voce optou pelo bosque. Daqui vc tem duas opcoes de itens.");
    var itembosque = prompt(`Quer qual das duas opcoes, que leva a pocao ou o dinheiro?`);
    if(itembosque.toLowerCase == "pocao"){
      console.log("voce pegou a pocao de item");
      sujeitoPersonagem.itens.push({
        item: "pocao",
        valor: 5
      });
    }else {
      console.log("voce pegou o dinheiro de item");
      sujeitoPersonagem.itens.push({
        item: "dinheiro",
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
        item: "armadura",
        valor: 30
    });
  }else {
      console.log("voce pegou o escudo de item");
      sujeitoPersonagem.itens.push({
        item: "escudo",
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
        item: "espada",
        valor: 30
      });
    }else {
      console.log("voce pegou a foice de item");
      sujeitoPersonagem.itens.push({
        item: "foice",
        valor: 30
      });
    }
    break;
  default:
}