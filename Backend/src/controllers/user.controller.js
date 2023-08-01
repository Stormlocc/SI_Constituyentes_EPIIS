/**********  Este archivo es llamado de user.router.js **********/

//Importamos el modelo 
const User = require('../models/user');

const userCtrl = {};
// Este archivo es llamado de Users.router.js
userCtrl.getUsersLogin = async (req,res) => {
    const arregloUsers = await User.find();
    res.json(arregloUsers);
};

// Crea usuario
userCtrl.crearUser = async(req,res) => {
    //que recibe
    console.log(req.body);
    const {email, password} = req.body;

    const newUser = new User({
        email: email,
        password: password,
        
    });
    await newUser.save();
    res.json({message: 'guardado'})

};

userCtrl.getUser = (req,res) => res.json({usuario: 'Users de pepito'});

//Esto tiene que ser una consulta con mongo
userCtrl.updateUser = (req,res) => res.json({message: 'Users actualizado'});

userCtrl.deleteUser = (req,res) => res.json({message: 'Users eliminado'});

module.exports = userCtrl;