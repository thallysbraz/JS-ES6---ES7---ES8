function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var error = true;
      console.log("fora da validação");
      if (error) {
        reject();
      } else {
        resolve();
      }
    }, 2000);
  });
}
console.log("Inicio do envio de email");

enviarEmail("olá", "thallys")
  .then(() => {
    console.log("email enviado com sucesso");
  })
  .catch(Error => {
    console.log("deu error");
  });

console.log("tudo ok");
