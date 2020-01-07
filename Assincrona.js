function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var error = false;

      if (error) {
        reject("404");
      } else {
        resolve({ time: 2, to: "thallys" });
      }
    }, 2000);
  });
}
console.log("Inicio do envio de email");

enviarEmail("olá", "thallys")
  .then(({ time, to }) => {
    console.log(`
    Times: ${time}
    ---------------------
    To: ${to}
    ---------------------
    `);
  })
  .catch(Error => {
    console.log("Error: " + Error);
  });

console.log("tudo ok");
