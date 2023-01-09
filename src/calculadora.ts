export class Calculadora {
  historico: string[];

  constructor() {
    this.historico = [];
  }

  soma(valor1: number, valor2: number) {
    let soma = valor1 + valor2;
    let resultado = `${valor1} + ${valor2} = ${soma}`;
    console.log(resultado);
    this.historico.push(resultado);
  }

  subtracao(valor1: number, valor2: number) {
    let subtracao = valor1 - valor2;
    const resultado = `${valor1} - ${valor2} = ${subtracao}`;
    console.log(resultado);
    this.historico.push(resultado);
  }

  multiplicacao(valor1: number, valor2: number) {
    let multiplicacao = valor1 * valor2;
    const resultado = `${valor1} * ${valor2} = ${multiplicacao}`;
    console.log(resultado);
    this.historico.push(resultado);
  }

  divisao(valor1: number, valor2: number) {
    let divisao = valor1 / valor2;
    const resultado = `${valor1} / ${valor2} = ${divisao}`;
    console.log(resultado);
    this.historico.push(resultado);
  }

  mostrarHistorico() {
    if (this.historico.length === 0) {
      console.log("Histórico vazio!");
      return;
    }
    this.historico.forEach((resultado) => {
      console.log(`Histórico: ${resultado}`);
    });
  }
}
