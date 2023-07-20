const mongoose = require("mongoose")

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log("Base de datos conectada con exito.")
    } catch (error) {
        console.log("Hubo un error al conectar la base de datos.")
    }
}

module.exports ={ dbConnection}