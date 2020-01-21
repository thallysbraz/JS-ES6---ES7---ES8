class Filme {
  /* 
  Atributos são como variáveis, só que pertencem a uma classe. Para criar um,
  é bem semelhante ao processo de criação de variável, com a adição do "this."
  antes do nome do atributo, exemplo: this.nomeDaVariavel.
  */
  constructor(titulo, ano, genero, diretor, duracao) {
    (this.titulo = titulo),
      (this.ano = ano),
      (this.genero = genero),
      (this.diretor = diretor),
      (this.duracao = duracao),
      (this.atores = []);
  }

  // MÉTODOS
  Reproduzir() {
    console.log("Reproduzir ...");
  }
  Pausar() {
    console.log("Pausar || ");
  }
  Avancar() {
    console.log("Avançar >>");
  }
  Fechar() {
    console.log("Fechar x");
  }

  ficha() {
    if (this.titulo == "Hulk") {
      this.titulo = "Não e Hulk";
      console.log("Titulo: ", this.titulo);
      console.log("---------------------------");
    } else {
      console.log("Titulo: ", this.titulo);
      console.log("---------------------------");
    }
    this.Reproduzir();
  }
}

var vingadores = new Filme("Vingadores", 2015, "Ação", "Eu", "2h");

var hulk = new Filme("Hulk", 2019, "Ação", "Eu", "2h");
var starWars = new Filme();

const array = [vingadores, hulk];

for (let i = 0; i < array.length; i++) {
  array[i].ficha();
}
console.log("hulk.titulo: ", hulk.titulo);
