const mongoose = require('mongoose');

const connectDatabase = async () => {

    try {
        const uri = 'mongodb://localhost:27017/tdb';
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        mongoose.set('strictQuery', false);
        await mongoose.connect(uri, options);
        console.log("conectado com sucesso");
    } catch (err) {
        console.log("Erro ao se conectar com o banco de dados :" + err);
    }

}

module.exports = connectDatabase;