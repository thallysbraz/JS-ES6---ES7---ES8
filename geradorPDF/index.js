const pdf = require("html-pdf");
const ejs = require("ejs");

var nome = "Thallys";
var sobreNome = "Braz";

ejs.renderFile(
  "./index.ejs",
  { nome: nome, sobreNome: sobreNome },
  (err, html) => {
    if (err) {
      console.log("erro");
    } else {
      pdf.create(html, {}).toFile("./Meupdf.pdf", (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res);
        }
      });
    }
  }
);
