const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = { // isto é um objeto, o que estiver dentro vai ser variaveis que serão chamadas no server.js

    index(req, resp){ //outra forma de criar função no Js
        return resp.render('index')
    },

    createOrphanages(req, resp){ //outra forma de criar função no Js
        return resp.render('create-orphanage')
    },  

    async orphanages(req, resp){ //outra forma de criar função no Js
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return resp.render('orphanages', {orphanages})
        } catch (error) {
            console.log(error)
            return resp.send('Erro no banco de dados!')
        }
    },

    async orphanage(req, resp){ //outra forma de criar função no Js
        const id = req.query.id
        
        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = ${id}`)
            const orphanage = results[0]
            orphanage.images = orphanage.images.split(",")
            orphanage.fristImage = orphanage.images[0]
            orphanage.open_on_weekends == "0" ? orphanage.open_on_weekends == false : orphanage.open_on_weekends == true
            return resp.render('orphanage', {orphanage})
        } catch (error) {
            console.log(error)
            return resp.send('Erro no banco de dados, entre uma outra hora')
        }
           
    },

    async saveOrphanage(req, resp){
        const fields = req.body
        // validar se todos os campos estão preenchidos
        if (Object.values(fields).includes('')){
            return resp.send("Todos os campos devem ser preenchidos")
        }

        //Salvar um Orfanato
        try {
            const db = await Database
            await saveOrphanage (db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,
    
            })
            //redirecionar a pagina
            return resp.redirect('/orphanages')
        } catch (error) {
            console.log(error)
            return resp.send("Ocorreu um erro no banco de dados!")
        }
 
    }

}