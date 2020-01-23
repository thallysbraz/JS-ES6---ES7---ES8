class Leitor {
  Ler(caminho) {
    return "Conteúdo do arquivo!";
  }
}

class Escritor {
  Escrever(arquivo, conteudo) {
    console.log("Conteudo escrito");
  }
}

class Criador {
  Criar(nome) {
    console.log("Arquivo criado!");
  }
}

class Destruidor {
  Deletar(nome) {
    console.log("Deletando arquivo!");
  }
}

class ManipulandorDeArquivo {
  //Composição = Criar classe com outras classes
  constructor(nome) {
    this.arquivo = nome;
    this.leitor = new Leitor();
    this.escritor = new Escritor();
    this.criador = new Criador();
    this.destruidor = new Destruidor();
  }
}

var manipulador = new ManipulandorDeArquivo("arquivo.txt");

manipulador.leitor.Ler();
manipulador.escritor.Escrever();
manipulador.criador.Criar();
manipulador.destruidor.Destruidor();
