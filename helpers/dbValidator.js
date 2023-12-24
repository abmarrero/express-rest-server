
const Role = require('../models/role');

const isRoleValid = async(rol='') =>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
      throw new Error(`el rol ${rol} no esta registrado en la BD`);
    }
  }


  module.exports = { isRoleValid } 