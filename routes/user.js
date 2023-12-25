
const {Router} = require('express');
const { usersGet, usersPut, usersPost, usersDelete, usersPath } = require('../controllers/users.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { isRoleValid, emailExiste, existeUsuarioPorId } = require('../helpers/dbValidator');


const router = Router();

  router.get('/', usersGet)

  router.put('/:id',[
    check('id','El id no es valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(isRoleValid),
    validarCampos
  ], usersPut) 

  router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password debe de ser de más de 6 letras').isLength({min: 6}),
    // check('rol','No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('correo','El correo no es valido').isEmail(),
    check('rol').custom(isRoleValid),
    // check('correo').custom( (correo) => emailExiste(correo) ),
      validarCampos
  ], usersPost)

  router.delete('/', usersDelete)

  router.patch('/', usersPath)


  module.exports = router;