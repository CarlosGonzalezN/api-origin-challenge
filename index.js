const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

const userRoutes = require("./src/routers/users/index");
const stocksRouter = require("./src/routers/stocks");
// Middleware para procesar datos en formato JSON
app.use(express.json());

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});

app.use("/users", userRoutes);
app.use("/stocks", stocksRouter);
