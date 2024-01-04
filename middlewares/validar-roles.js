const { response } = require("express");

const esAdminRole = (req,res=response, next) => {

    if(!req.usuario){
      return res.status(400).json({
        msg: 'se quiere verificar el rol sin validar el token primero'
      })
    }

    const {rol, nombre} = req.usuario;
    if(rol != 'ADMIN_ROLE'){
      return res.status(400).json({
        msg: `${nombre} no es administrador - No puede hacer esto`
    })
    }

    next();
}




module.exports = {esAdminRole}