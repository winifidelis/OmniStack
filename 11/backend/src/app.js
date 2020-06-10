const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate')
const routes = require('./routes');

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados e enviados na rota após o "?" (servem para filtros, paginação)
 * /user?nome=winicius&page=2
 * const params = request.query
 * console.log(params)
 * 
 * Route Params: Parâmetros utilizados para identificar recursos
 * significa que o que está depois da barra é o ID do usuários, não preciso nomear por já está nomeado na rota
 * /users/:id
 * const params = request.params
 * console.log(params)
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * const body = request.body
 * console.log(body)
 * 
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table ('users').select('*').where()
 * 
 */

const app = express();

//quais aplicações poderão utilizar o meu backend
app.use(cors());

//abaixo estou informando ao express que devo transformar o json em algo intendivel a aplicação
app.use(express.json());

app.use(routes);

app.use(errors());

//app.listen(3333);
module.exports = app;