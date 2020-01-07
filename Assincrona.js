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
/*
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

/* ------------------ ASYNC - AWAIT ------------------ */
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
