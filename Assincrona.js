function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    var error = true;
    if (error == true) {
      callback("falhou, error interno");
    } else {
      callback("ok, email enviado");
    }
  }, 2000);
}
console.log("Inicio do envio de email");

enviarEmail("Oi", "thallysbraz3@gmail.com", status => {
  if (status) {
    console.log(status);
  } else {
    console.log("Seu email foi enviado");
  }
});
console.log("tudo ok");
