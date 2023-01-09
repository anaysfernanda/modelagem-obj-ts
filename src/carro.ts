export class Carro {
  consumo: number;
  nivelCombustivel: number;

  constructor(consumo: number) {
    this.consumo = consumo;
    this.nivelCombustivel = 0;
  }

  andar(distancia: number) {
    if (distancia > this.consumo * this.nivelCombustivel) {
      console.log(`Você não tem combustível!`);
      return;
    }

    let viagem = distancia / this.consumo;
    this.nivelCombustivel = -viagem;
    console.log(`Foi percorrido ${distancia} Km`);
  }

  obterGasolina() {
    console.log(
      `O nível atual de combustível é de ${this.nivelCombustivel} litros.`
    );
  }

  adicionarGasolina(novoNivel: number) {
    this.nivelCombustivel += novoNivel;
    console.log(
      `O novo nível de gasolina é de ${this.nivelCombustivel} litros`
    );
  }
}
