const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {

    beforeEach(async () => {
        //rollback(); - faço isso para zerar o banco de dados para que um teste
        //não influencie outro
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD2",
                email: "contato2@gmail.com",
                whatsapp: "62982441661",
                city: "Goiânia",
                uf: "GO"
            });

        //console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(6);
    });
});

//ABAIXO PARA PASSAR UM TESTE COM DADOS NO HEADER
/*
            .post('/ongs')
            .set('Authorization', 'id valido de uma ong')
            .send({
                name: "APAD2",
                email: "contato2@gmail.com",
                whatsapp: "62982441661",
                city: "Goiânia",
                uf: "GO"
            });
*/