import express from 'express';
import ClassesController from './controllers/ClassesController';

const routes = express.Router();
const classesControllers = new ClassesController();

routes.get('/', (request, response) => {
    console.log('BEM VINDO');
    return response.json({ MESSAGE: "BEM VINDO" });
});

routes.post('/classes', classesControllers.create);


export default routes;