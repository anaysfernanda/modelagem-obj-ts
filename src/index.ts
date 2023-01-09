import { Contador } from "./contador";
import { Bola } from "./cor";
import { ContaCorrente } from "./conta";
import { Calculadora } from "./calculadora";
import { BombaCombustivel, Combustivel } from "./combustivel";
import { Carro } from "./carro";

// //exercicio 1
// let valor1 = new Contador(10);

// valor1.incrementar();
// valor1.retornar();
// valor1.zerar();

// //exercicio 2
// let cor = new Bola();

// cor.mostrarCor();
// cor.trocarCor();

// //exercicio 3
// let conta = new ContaCorrente(1, "João");

// conta.alterarNome("Maria");
// conta.deposito(100);
// conta.saque(50);
// conta.saque(80);

//exercicio 4

// let calculadora = new Calculadora();

// calculadora.mostrarHistorico();
// calculadora.soma(2, 2);
// calculadora.divisao(10, 2);
// calculadora.subtracao(20, 7);
// calculadora.multiplicacao(3, 3);
// calculadora.mostrarHistorico();

// let bomba = new BombaCombustivel(40, 5, Combustivel.Alcool);
// bomba.abastecerPorLitro(10);
// bomba.abastecerPorValor(7);
// bomba.alterarValor(10);
// bomba.alterarQuantidadeCombustivel(30);
// bomba.abastecerPorLitro(40);

let carro = new Carro(8);
carro.andar(2);
carro.adicionarGasolina(10);
carro.obterGasolina();
carro.andar(4);
carro.adicionarGasolina(10);
