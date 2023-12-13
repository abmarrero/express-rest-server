
const {response} = require('express')

const usersGet = (req, res) => {

    res.json({
        msg: 'get API - controller'
    })
  }
  const usersPost = (req, res) => {
    
    res.json({
        msg: 'post API - controller'
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