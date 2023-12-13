
const {response} = require('express')

const usersGet = (req, res) => {

    res.json({
        msg: 'get API - controller'
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
    
    res.json({
        msg: 'put API - controller'
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