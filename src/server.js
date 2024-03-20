// server.js
const sponsorRouter = require("./routes/sponsor.router");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use("/sponsors", sponsorRouter);

app.listen(PORT, () => console.log(`Servidor em execução na porta ${PORT}`));
