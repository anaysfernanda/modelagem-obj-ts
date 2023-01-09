export class Contador {
  valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  incrementar() {
    this.valor += 1;
    console.log(`Valor: ${this.valor}`);
  }

  zerar() {
    this.valor = 0;
    console.log(`Valor: ${this.valor}`);
  }

  retornar() {
    console.log(`Valor: ${this.valor}`);
  }
}
