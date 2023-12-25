
const {response, request} = require('express')
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs')



const usersGet = async(req = request , res =response) => {
    const {limite=5,desde=0} = req.query
    const query = {estado: true}
      
      const [total,usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find()
        .limit(Number(limite))
        .skip(Number(desde))
      ]) 
        
      res.json({
        total,
       usuarios,
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
    const {_id,password,correo,google,...resto} = req.body;

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
  const usersDelete = async(req, res) => {
      const id = req.params.id;

      // Fisicamente lo borramos
      // const usuario = await Usuario.findByIdAndDelete(id);

      const usuario = await Usuario.findByIdAndUpdate(id,{estado:false});
    res.json({
       usuario
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