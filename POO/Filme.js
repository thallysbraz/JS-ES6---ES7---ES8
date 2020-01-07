class Filme {
  /* 
  Atributos são como variáveis, só que pertencem a uma classe. Para criar um,
  é bem semelhante ao processo de criação de variável, com a adição do "this."
  antes do nome do atributo, exemplo: this.nomeDaVariavel.
  */
  constructor() {
    (this.titulo = ""),
      (this.ano = 0),
      (this.genero = ""),
      (this.diretor = ""),
      (this.atores = []),
      (this.duracao = 0);
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
}
