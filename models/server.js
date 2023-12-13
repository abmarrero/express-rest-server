const express = require('express')

 class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use( express.static( 'public'));
    }
    routes(){
       this.app.get('/api', (req, res) => {
            res.send('Hello World')
          })
    }
    listen(){
        this.app.listen(process.env.PORT,() => {
            console.log('listening on port', process.env.PORT)
        })
    }
}

module.exports = Server;