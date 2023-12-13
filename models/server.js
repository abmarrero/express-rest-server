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
            res.json({
                msg: 'get API'
            })
          })
          this.app.put('/api', (req, res) => {
            res.json({
                msg: 'put API'
            })
          })
          this.app.post('/api', (req, res) => {
            res.json({
                msg: 'post API'
            })
          })
          this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'delete API'
            })
          })
          this.app.patch('/api', (req, res) => {
            res.json({
                msg: 'patch API'
            })
          })
    }
    listen(){
        this.app.listen(process.env.PORT,() => {
            console.log('listening on port', process.env.PORT)
        })
    }
}

module.exports = Server;