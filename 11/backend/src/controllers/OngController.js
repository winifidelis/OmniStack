
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        console.log(email);

        /**
         * Eu irei criar o meu ID personalizado
         * meu ID é uma string
         * usando o pacote crypto
         * 
         */
        const id = crypto.randomBytes(50).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
}