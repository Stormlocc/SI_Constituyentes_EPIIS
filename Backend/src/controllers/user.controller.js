const userCtrl = {};
// Este archivo es llamado de Users.router.js
userCtrl.getUsers = (req,res) => res.json({message: [ ]});

userCtrl.crearUser = (req,res) => res.json({message: 'guardado'});

userCtrl.getUser = (req,res) => res.json({usuario: 'Users de pepito'});

//Esto tiene que ser una consulta con mongo
userCtrl.updateUser = (req,res) => res.json({message: 'Users actualizado'});

userCtrl.deleteUser = (req,res) => res.json({message: 'Users eliminado'});

module.exports = userCtrl;