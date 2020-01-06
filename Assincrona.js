function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    console.log(`
        Para: ${para}
        -----------------------
        ${corpo}
        -----------------------
        De: Thallys Braz
        `);
    callback("ok, email enviado", 3, "5s");
  }, 2000);
}
console.log("Inicio do envio de email");

enviarEmail(
  "Oi, seja bem-vindo",
  "thallysbraz3@gmail.com",
  (status, amount, time) => {
    console.log(`
    Status: ${status}
    -----------------------
    Quantidade de Pessoa: ${amount}
    -----------------------
    Tempo de envio: ${time}
    -----------------------
    `);
    console.log("Seu email foi enviado");
  }
);
console.log("tudo ok");
