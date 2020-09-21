import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);

//ROTAS
//http://localhost:3333/users
//http://localhost:3333/contacs

//METODOS
//GET: Buscar ou listar uma informação      app.get
//POST: Gravar uma informação               app.post
//PUT: Atualizar uma informação existente   app.put
//DELETE: Excluir uma informação existente  app.delete

//Corpo (Request Body) Dados para criação ou atualização de um regitro
//Route Params: Identificar qual recurso eu quero tualizar ou deletar "app.delete('users/:id', (......."
//Query Params: Paginação, listagem, filtros, ordenação

/*
ISSO AQUI PASSOU PARA DENTRO DO ARQUIVO ROUTES.TS
app.get('/users', (request, response) => {
    return response.json({MESSAGE: "BEM VINDO"});
});
*/

/*
//TUDO COMENTADO POR TER SIDO USADO NO INICIO DA AULA
app.get('/users', (request, response) => {
    //console.log('opa! rota users')
    const users = [
        {name: 'Diego', age: 25},
        {name: 'Wini', age: 34},
    ];
    return response.json(users);
})


app.post('/users', (request, response) => {
    //console.log('opa! rota users')

    console.log(request.body)

    const users = [
        {name: 'Diego', age: 25},
        {name: 'Wini', age: 34},
    ];
    return response.json(users);
})
*/

