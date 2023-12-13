const express = require('express')
const cors = require('cors')

 class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(cors())

        this.app.use( express.static( 'public'));
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