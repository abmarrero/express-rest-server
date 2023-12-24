
const Role = require('../models/role');
const Usuario = require('../models/role');

const isRoleValid = async(rol='') =>{
    const existeRol = await Role.findOne({rol});
   
    if(!existeRol){
      throw new Error(`el rol ${rol} no esta registrado en la BD`);
    }
  }

  // const emailExiste = async(correo = '') => {
  //   const existeEmail = await Usuario.findOne({correo});
  //   console.log('the same'+existeEmail);
  //   if (existeEmail){
  //     console.log('the same'+existeEmail);
  //       throw new Error(`El correo ${correo}, ya está registrado`);
  //   }
  // }ssss


  module.exports = { isRoleValid } 