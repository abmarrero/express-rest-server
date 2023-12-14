
const {response, request} = require('express')
const Usuario = require('../models/usuario')

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
    const body = req.body;
    const usuario = new Usuario( body );

    await usuario.save();
    res.json({
        msg: 'post API - controller',
        usuario
    })
  }
  const usersPut = (req, res) => {
    const { id } = req.params;  
    // const id = req.params.id;
    res.json({
        msg: 'put API - controller',
        id
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