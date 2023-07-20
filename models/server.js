const express = require("express");
const cors = require("cors");
const {
    dbConnection
} = require("../database/config.bd");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.path = {
            users: "/api/users",
            hotels: "/api/hotels",
            reservations: "/api/reservations",
            rooms: "/api/rooms",
        }

        this.ConnectionBD();
        this.middlewares();
        this.routes();
    }

    async ConnectionBD() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }
    listen() {
        this.app.listen(this.port, () => [
            console.log(`URL: http://localhost:${this.port}/`)
        ])
    }
    routes() {
        this.app.use(this.path.users,require("../routes/users.routes"))
        this.app.use(this.path.hotels,require("../routes/users.routes"))
        this.app.use(this.path.reservations,require("../routes/reservations.routes"))
        this.app.use(this.path.rooms,require("../routes/rooms.routes"))
    }

}

module.exports = Server;