function pegarId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 1500);
  });
}

function busca(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("thallysbraz3@gmail.com");
    }, 2000);
  });
}

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

/* Promisse Hell
pegarId().then(id => {
  busca(id).then(email => {
    enviarEmail("Olá", email)
      .then(() => {
        console.log("Email enviado para o id: ", id);
      })
      .catch(error => {
        console.log("Falha: ", error);
      });
  });
});

*/

/*
 ------------------ ASYNC - AWAIT ------------------ 
function pegarUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: "Thallys", lang: "JS" },
        { name: "Braz", lang: "C" },
        { name: "Silva", lang: "HTML" }
      ]);
    }, 3000);
  });
}

async function principal() {
  var user = await pegarUser();
  console.log(user);
  console.log("Olá");
}

principal();
*/

/* --------------------------------------------------------
// Resolvendo promisse Hell com Async/Await
async function principal() {
  var id = await pegarId();

  var email = await busca(id);

  enviarEmail("olá", email)
    .then(() => {
      console.log("email enviado");
    })
    .catch(error => {
      console.log("error");
    });
}

principal();
// -------------------------------------------------------- */

/* Tratamento de erros com Async e Await
async function principal() {
  try {
    var id = await pegarId();
    var email = await busca(id);
    await enviarEmail("olá", email);
    console.log("deu certo");
  } catch (error) {
    console.log("deu error");
  }
}

principal();
// -------------------------------------------------------- */
