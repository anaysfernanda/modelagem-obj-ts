export class ContaCorrente {
  conta: number;
  nome: string;
  saldo: number;

  constructor(conta: number, nome: string) {
    this.conta = conta;
    this.nome = nome;
    this.saldo = 0;
  }

  alterarNome(nome: string) {
    this.nome = nome;
    console.log(
      `Nome: ${this.nome} - Conta: ${this.conta} - Saldo - ${this.saldo} `
    );
  }

  deposito(valor: number) {
    this.saldo += valor;
    console.log(
      `Nome: ${this.nome} - Conta: ${this.conta} - Deposito: ${valor} - Saldo: ${this.saldo} `
    );
  }

  saque(valor: number) {
    this.saldo -= valor;
    if (this.saldo < 0) {
      console.log("Saldo insuficiente!");
      return;
    }
    console.log(
      `Nome: ${this.nome} - Conta: ${this.conta} - Saque: ${valor} - Saldo: ${this.saldo} `
    );
  }
}
