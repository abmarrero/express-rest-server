
const jwt = require('jsonwebtoken');

const validarJWT =(req = request,res=response,next) => {

    const token = req.header('x-token');
    if (!token){
        return res.status(401).json({
            mes: 'No hay token en la peticion'
        });
    }

    try {
        jwt.verify(token,process.env.SECRETORPRIVATEKEY)
        req.uid = uid;

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            mes: 'Token no valido'
        });
    }
}


module.exports = {validarJWT}