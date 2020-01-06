function enviarEmail(corpo, para) {
  setTimeout(() => {
    console.log(`
        Para: ${para}
        -----------------------
        ${corpo}
        -----------------------
        De: Thallys Braz
        `);
  }, 5000);
}
console.log("Inicio do envio de email");

enviarEmail("Oi, seja bem-vindo", "thallysbraz3@gmail.com");

console.log("Seu email foi enviado");
console.log("tudo ok");
