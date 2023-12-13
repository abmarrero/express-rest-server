
const {response, request} = require('express')


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
  const usersPost = (req, res) => {
    const body = req.body;

    res.json({
        msg: 'post API - controller',
        body
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