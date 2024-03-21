// server.js
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sponsorRouter = require("./routes/sponsor.router");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());

  app.use(cookieParser());
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  app.use("/sponsors", sponsorRouter);

  app.get("/setcookie", (req, res) => {
    res.setHeader("set-cookie", "foo=bar");
    res.send("setCookie");
  });

  next();
});

app.listen(PORT, () => console.log(`Servidor em execução na porta ${PORT}`));
