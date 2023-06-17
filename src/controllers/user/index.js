const bcrypt = require("bcrypt");
const connection = require("../../database");

module.exports = {
  //crea un nuevo usuario
  createUser: async (req, res) => {
    const { username, password } = req.body;
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";

    // Genera el hash de la contraseña utilizando bcrypt
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error("Error al generar el hash de la contraseña:", err);
        res
          .status(500)
          .json({ error: "Error al generar el hash de la contraseña" });
        return;
      }

      connection.query(query, [username, hashedPassword], (err, results) => {
        if (err) {
          console.error("Error al crear el usuario:", err);
          res.status(500).json({ error: "Error al crear el usuario" });
          return;
        }
        res.json({ message: "Usuario creado exitosamente" });
      });
    });
  },
  //busca un usuario por nombre y validar la contraseña
  validate: async (req, res) => {
    const { username, password } = req.body;
    const query = "SELECT * FROM users WHERE username = ?";

    connection.query(query, [username], (err, results) => {
      if (err) {
        console.error("Error al buscar el usuario:", err);
        res.status(500).json({ error: "Error al buscar el usuario" });
        return;
      }

      if (results.length === 0) {
        res.status(404).json({ error: "Usuario no encontrado" });
        return;
      }

      const user = results[0];

      // Valida la contraseña utilizando bcrypt
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.error("Error al comparar las contraseñas:", err);
          res.status(500).json({ error: "Error al comparar las contraseñas" });
          return;
        }

        if (!isMatch) {
          res.status(401).json({ error: "Contraseña incorrecta" });
          return;
        }

        res.json({ message: "Inicio de sesión exitoso" });
      });
    });
  },
};
