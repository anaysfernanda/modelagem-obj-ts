export enum Combustivel {
  Gasolina = "G",
  Alcool = "A",
}

export class BombaCombustivel {
  tipoCombustivel: Combustivel;
  valorLitro: number;
  qtdCombustivel: number;

  constructor(
    qtdCombustivel: number,
    valorLitro: number,
    tipoCombustivel: Combustivel
  ) {
    this.qtdCombustivel = qtdCombustivel;
    this.valorLitro = valorLitro;
    this.tipoCombustivel = tipoCombustivel;
  }

  abastecerPorValor(valorASerAbastecido: number) {
    const litros = valorASerAbastecido / this.valorLitro;
    if (this.qtdCombustivel < litros) {
      console.log("Não tem combustível suficiente!");
      return;
    }
    this.qtdCombustivel -= litros;
    console.log(
      `O valor a ser abastecido é de R$${valorASerAbastecido} e a quantidade de combustível é de ${litros} litros`
    );
  }

  abastecerPorLitro(quantidadeASerAbastecido: number) {
    if (this.qtdCombustivel < quantidadeASerAbastecido) {
      console.log("Não tem combustível suficiente!");
      return;
    }

    const valor = quantidadeASerAbastecido * this.valorLitro;
    this.qtdCombustivel -= quantidadeASerAbastecido;
    console.log(
      `Foi abastecido ${quantidadeASerAbastecido} litros, e o total a ser pago é de R$${valor}`
    );
  }

  alterarValor(novoValor: number) {
    this.valorLitro = novoValor;
    console.log(`O novo valor do combustível é de ${this.valorLitro}`);
  }

  alterarCombustivel() {
    this.tipoCombustivel =
      this.tipoCombustivel === Combustivel.Gasolina
        ? Combustivel.Alcool
        : Combustivel.Gasolina;

    console.log(this.tipoCombustivel);
  }

  alterarQuantidadeCombustivel(novaQtdBomba: number) {
    if (novaQtdBomba < 0) {
      console.log("Não tem combustível suficiente!");
      return;
    }
    this.qtdCombustivel = novaQtdBomba;
    console.log(
      `A nova quantidade de combustível da bomba é de ${this.qtdCombustivel}`
    );
  }
}
