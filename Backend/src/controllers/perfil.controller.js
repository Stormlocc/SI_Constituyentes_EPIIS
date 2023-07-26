/**********  Este archivo es llamado de perfil.router.js **********/

//Importamos el modelo 
const Perfil = require('../models/perfil');

const perfilCtrl = {};
perfilCtrl.getPerfiles = async (req,res) => {
    const arregloPerfiles = await Perfil.find();
    res.json(arregloPerfiles);
};

//Tambien debe crear un usuario, es necesario crear un perfil?()
perfilCtrl.crearPerfil = async (req,res) => {
    //que recibe
    console.log(req.body);
    const {nombres, apellidos, tipo_user, fecha , user} = req.body;
    const newPerfil = new Perfil({
        nombres: nombres,
        apellidos: apellidos,
        tipo_user: tipo_user,
        fecha: fecha,
        user: {
          email: user.email,
          password: user.password,
        },
    });
    console.log(newPerfil);
    await newPerfil.save();
    res.json({message: 'guardado'});
};

// vulnerabilidad estamos devolviendo la constraseña esto xq el modelo es anidado
perfilCtrl.getPerfil = async (req,res) => {
    // Obtener el ID del perfil a buscar desde los parámetros de la ruta (URL)
    const perfilId = req.params.id;
    // Buscar el perfil por su ID en la base de datos
    const perfilEncontrado = await Perfil.findById(perfilId);
    res.json(perfilEncontrado);
};

perfilCtrl.updatePerfil = async(req,res) => {
    // Obtener el ID del perfil a buscar desde los parámetros de la ruta (URL)
    const {tipo_user} = req.body;
    console.log(req.body)
    await Perfil.findByIdAndUpdate(req.params.id, {
        tipo_user : tipo_user
    });
    console.log(tipo_user)
    res.json({message: 'perfil actualizado'});
};


perfilCtrl.deletePerfil = async(req,res) => {
    // Buscar el perfil por su ID en la base de datos y eliminar
    await Perfil.findByIdAndDelete(req.params.id);
    res.json({message: 'perfil eliminado'});
};

module.exports = perfilCtrl;