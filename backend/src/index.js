const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);






app.listen(3333);

/**
 * Metodos HTTP:
 * GET: Buscar/Listar uma informação do backend
 * POST: Cria uma informação no back-end
 * PUT: Altera uma informação no backend
 * DELETE: Deletar uma informação mo backend
 */

/**
 * Tipos de Paramentros
 * Query Param:Parametros nomeado enviado na rota apos "?" (filtros , paginação   )
 * Route Param: Parametros utilizados para indetificar recursos
 * request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
