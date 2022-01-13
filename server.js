const express = require("express");
const { resolve } = require("path");
const app = express();

app.use("/", express.static(resolve(__dirname, "./build")));

app.listen(process.env.PORT || 3000, (erro) => {
  if (erro) {
    return console.log(erro);
  }
  console.log("deu certo direitinho");
});
