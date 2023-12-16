
const {Router} = require('express');
const { usersGet, usersPut, usersPost, usersDelete, usersPath } = require('../controllers/users.controller');
const { check } = require('express-validator');

const router = Router();

  router.get('/', usersGet)

  router.put('/:id', usersPut)

  router.post('/',[check('correo','El correo no es valido').isEmail()], usersPost)

  router.delete('/', usersDelete)

  router.patch('/', usersPath)


  module.exports = router;