const axios = require("axios");
const urlStocks = process.env.API_URL_STOCK;
const urlDataTime = process.env.API_URL_TIME;
const apiKey = process.env.SECRET;
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
  //obtener data_time de Stocks
  getDataTime: async (req, res) => {
    const symbol = req.params.symbol.toUpperCase();
    const interval = req.params.interval;
    const startDate = req.params.startDate.toUpperCase();
    const endDate = req.params.endDate.toUpperCase();
    const Key = apiKey;
    try {
      const response = await axios.get(urlDataTime, {
        params: {
          symbol: symbol,
          interval: interval,
          start_date: startDate,
          end_date: endDate,
          apikey: Key,
        },
      });
      console.log(response.data);
      res.json(response.data);
    } catch (error) {
      console.error("Error al consultar la API de Twelve Data:", error);
      res
        .status(500)
        .json({ error: "Error al consultar la API de Twelve Data" });
    }
  },
  //obtener data_time de Stocks
  getDataRealTime: async (req, res) => {
    const symbol = req.params.symbol.toUpperCase();
    const interval = req.params.interval;
    const Key = apiKey;
    try {
      const response = await axios.get(urlDataTime, {
        params: {
          symbol: symbol,
          interval: interval,
          apikey: Key,
        },
      });
      console.log(response.data);
      res.json(response.data);
    } catch (error) {
      console.error("Error al consultar la API de Twelve Data:", error);
      res
        .status(500)
        .json({ error: "Error al consultar la API de Twelve Data" });
    }
  },
};
