export class Bola {
  cor: string;
  circunferencia: string;
  material: string;

  constructor() {
    this.cor = "Branca";
    this.circunferencia = "68cm";
    this.material = "couro sintético";
  }

  mostrarCor() {
    console.log(
      `Cor: ${this.cor} - Circunferência: ${this.circunferencia} - Material: ${this.material} `
    );
  }

  trocarCor() {
    this.cor = "Preto";
    console.log(`Nova cor: ${this.cor}`);
  }
}
