const { response } = require("express");
const Usuario = require("../models/usuario");
const bcryptjs = require('bcryptjs');

const login = async(req, res = response) => {
    
    const { correo, password} = req.body;
    try {
        const usuario = await Usuario.findOne({correo})
        if(!usuario){
           return res.status(400).json({
                mes: 'Usuario / contraseña no son correctos - correo'
            });
        }
        if(!usuario.estado){
           return res.status(400).json({
                mes: 'Usuario / contraseña no son correctos - estado:false'
            });
        }
        const validPassword = bcryptjs.compareSync(password,usuario.password)
        if(!validPassword){
            return res.status(400).json({
                 mes: 'Usuario / contraseña no son correctos - contraseña'
             });
         }

        res.json({
            msg: 'login ok'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mes: 'hable con el administrador'
        });    
    }
  }


  module.exports = {login}