const axios = require("axios");
const urlStocks = process.env.API_URL_STOCK;
module.exports = {
  //obtener lista de Stocks
  getStocks: async (req, res) => {
    console.log(urlStocks);
    try {
      const response = await axios.get(urlStocks, {
        params: {
          source: "docs",
          exchange: "NYSE",
        },
      });

      res.json(response.data);
    } catch (error) {
      console.error("Error al consultar la API de Twelve Data:", error);
      res
        .status(500)
        .json({ error: "Error al consultar la API de Twelve Data" });
    }
  },
  //obtener detalle de Stocks
  getDetailStock: async (req, res) => {
    const symbol = req.params.symbol.toUpperCase();
    console.log(symbol);
    try {
      const response = await axios.get(urlStocks, {
        params: {
          symbol: symbol,
          source: "docs",
        },
      });

      res.json(response.data);
    } catch (error) {
      console.error("Error al consultar la API de Twelve Data:", error);
      res
        .status(500)
        .json({ error: "Error al consultar la API de Twelve Data" });
    }
  },
};
