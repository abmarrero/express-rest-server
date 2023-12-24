
const {response, request} = require('express')
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs')



const usersGet = (req = request , res =response) => {
    const {q,nombre='no name',page,limit} = req.query
    res.json({
        msg: 'get API - controller',
        q,
        page,
        nombre,
        limit,
    }) 
  }
  const usersPost = async(req, res) => {


    const {nombre,correo,password, rol} = req.body;
    const usuario = new Usuario( {nombre,correo,password, rol} );

    const salt = bcryptjs.genSaltSync(11);
    usuario.password =bcryptjs.hashSync(password, salt);
    
    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail){
      return res.status(400).json({
        msg: 'Ese correo ya está registrado'
      });
}

    await usuario.save();
    res.json({
        msg: 'post API - controller',
        usuario
    })
  }
  const usersPut = async(req, res=response) => {
    const { id } = req.params;  
    // const id = req.params.id;
    const {password,correo,google,...resto} = req.body;

    if(password){
      const salt =bcryptjs.genSaltSync(11);
      resto.password = bcryptjs.hashSync(password,salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id,resto);

    res.json({
        msg: 'put API - controller',
        usuario
    })
  }
  const usersDelete = (req, res) => {
    
    res.json({
        msg: 'delete API - controller'
    })
  }
  const usersPath = (req, res) => {
    
    res.json({
        msg: 'path API - controller'
    })
  }

  module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPath
  }