
const Role = require('../models/role');
const Usuario = require('../models/usuario');

const isRoleValid = async(rol='') =>{
    const existeRol = await Role.findOne({rol});
   
    if(!existeRol){
      throw new Error(`el rol ${rol} no esta registrado en la BD`);
    }
  }

  // const emailExiste = async(correo = '') => {
  //   const existeEmail = await Usuario.findOne({correo});
    
  //   if (existeEmail){
      
  //       throw new Error(`El correo ${correo}, ya está registrado`);
  //   }
  // }

  const existeUsuarioPorId = async(id) => {
    
    const existeId = await Usuario.findById(id);
   
    if (!existeId){
        throw new Error(`El id ${id}, no existe`);
    }
  }


  module.exports = { isRoleValid, existeUsuarioPorId } 