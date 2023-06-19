# API-Origin-Challenge

Este proyecto es una API que proporciona endpoints para crear y validar usuarios, así como obtener datos de acciones de la bolsa de valores.

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org) instalado.

1. Clona este repositorio: `git clone https://github.com/tu-usuario/tu-repositorio.git`
2. Ve al directorio del proyecto: `cd tu-repositorio`
3. Instala las dependencias: `npm install`

## Uso

Para utilizar este proyecto, sigue los siguientes pasos:

1. Inicia el servidor de la API usando el comando `npm start`.
2. El servior estara diponible en (http://localhost:3000)
3. Realiza solicitudes a los diferentes endpoints disponibles.

### Endpoints disponibles

- `POST /users`: Crea un nuevo usuario.
- `POST /users/validate`: Valida un usuario existente.

- `GET /stocks`: Obtiene una lista de acciones de la bolsa de valores.
- `GET /stocks/{symbol}`: Obtiene detalles de una acción específica.
- `GET /symbol/{symbol}/interval/{startDate}/{endDate}`: Obtiene las variaciones de una acción en un período de tiempo específico.
- `GET /symbol/{symbol}/{interval}`: Obtiene las variaciones de una acción en un intervalo de tiempo específico.




