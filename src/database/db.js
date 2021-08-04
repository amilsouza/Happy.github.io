const database = require('sqlite-async');
/*database.open(__dirname + '/database.sqlite') // estou pedindo para que o meu banco (declarado na linha acima) de dados abra o meu diretorio local no momento (pasta database) e coloque nessa pasta um arquivo chamado database.sqlite 
.then(execute) // depois de criar o banco de dados, ele ira execultar a função "execute", mas só apos ler o banco de dados*/
database.open(__dirname + '/database.sqlite').then(execute)
function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}
module.exports = database.open(__dirname + '/database.sqlite').then(execute) //  estara passando o db para outra página


/*-------SUMARIO PARA SQL--------*/
//PRIMARY KEY = o primeiro dado que ela vai pegar e o da tabela. Ele será o cabeça da tabela e caracterizará toda a tabela 
//AUTOINCREMENT = vai ser criado e modificado altomaticamente


