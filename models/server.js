const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

 class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        // Conectar a base de datos
        this.conectarDB();
        // Middlerswares
        this.middlewares();
        // Rutas de mi aplicacion
        this.routes();
    }
    middlewares(){
        // CORS
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
        // Directorio Publico
        this.app.use( express.static( 'public'));
    }

    async conectarDB() {
        await dbConnection();
    }

    routes(){
      this.app.use(this.usuariosPath, require('../routes/user'))
    }
    listen(){
        this.app.listen(process.env.PORT,() => {
            console.log('listening on port', process.env.PORT)
        })
    }
}

module.exports = Server;