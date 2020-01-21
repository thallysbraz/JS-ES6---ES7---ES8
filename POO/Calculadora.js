class Calculadora {
  static Somar(a, b) {
    var result = a + b;
    console.log(`resultado da soma: ${result}`);
  }
  static Sub(a, b) {
    var result = a - b;
    console.log(`resultado da sub: ${result}`);
  }
}
Calculadora.Somar(10, 20);
Calculadora.Sub(20, 10);
