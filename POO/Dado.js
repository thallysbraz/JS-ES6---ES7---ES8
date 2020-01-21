class Dado {
  constructor(faces) {
    this.face = faces;
  }

  Rolar() {
    console.log("Resultado do dado: " + this.getRandom(this.face));
    console.log("------------------------");
  }
  /*
  getRandom(max) {
    return Math.floor(Math.random() * max + 1);
  }*/
  getRandom(max) {
    /*min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;*/
    return Math.floor(Math.random() * max + 1);
  }
}

var d6 = new Dado(6);
var d12 = new Dado(12);

d6.Rolar();
