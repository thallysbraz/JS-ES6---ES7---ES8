function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    console.log(`
        Para: ${para}
        -----------------------
        ${corpo}
        -----------------------
        De: Thallys Braz
        `);
    callback();
  }, 2000);
}
console.log("Inicio do envio de email");

enviarEmail("Oi, seja bem-vindo", "thallysbraz3@gmail.com", () => {
  console.log("Seu email foi enviado");
});
console.log("tudo ok");
