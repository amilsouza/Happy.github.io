const Database = require('./db');
const saveOphanage = require('./saveOrphanage');
//"async" possibilita colocar "await", que é um "then" colocado no início (bem mais bonito e facil) que segura o comando na linha até ele ser completamente feito
Database.then( async db => {
    // inerir dados na tabela
    // isso aqui cria uma tabela com outro Id
    // await saveOphanage(db,{
    //     name:"Lar do djonga",
    //     lat:"-12.8670569",
    //     lng: "-38.4760377",
    //     about:"Presta assistência a crianças de 06 a 15 anos que se encontra em situação de risco ou vunerabilidade social",
    //     whatsapp:"71993998843",
    //     images:[
    //         "https://images.unsplash.com/photo-1605999182551-96ab0c8ad8f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",

    //         "https://images.unsplash.com/photo-1580673787750-2c5ef81571dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
    //     ].toString(),
    //     instructions:"Venha com muito amor para dar a essas crianças",
    //     opening_hours:"Horario de visitas das 8h até 18h",
    //     open_on_weekends:"1"
    // })

    //consutar dados na tabela 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")// .all busca dados na tabela, e vai retornar na . * = Todos os campos (linhas e coluna)
    console.log(selectedOrphanages)

    //consultar orfanato pelo id dele
    //const orphanage = await db.all("SELECT * FROM orphanages WHERE id = 1")
    //console.log(orphanage)

    //deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages")) 
})