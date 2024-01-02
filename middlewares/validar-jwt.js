
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario')

const validarJWT = async(req = request,res=response,next) => {

    const token = req.header('x-token');
    if (!token){
        return res.status(401).json({
            mes: 'No hay token en la peticion'
        });
    }

    try {
       const {uid} = jwt.verify(token,process.env.SECRETORPRIVATEKEY)
        const usuario = await Usuario.findById(uid);
        if(!usuario) {
            return res.status(401).json({
                msg: 'Token no válido usuario no existe en DB'
              });
        }
        if(!usuario.estado) {
            return res.status(401).json({
                msg: 'Token no válido usuario con estado false'
              });
        }

        req.usuario = usuario;

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            mes: 'Token no valido'
        });
    }
}


module.exports = {validarJWT}