const {Router} = require('express');
const router = Router();
const {getUsers, crearUser, getUser, deleteUser} = require('../controllers/user.controller')

// instanciamos Router() 

// funciona como si fuese la ruta origen una vez se require
//                .get .post . put .delete (creo se llama rest api)
// podemos responder con  res.send res.json etc esto esta en controller
router.route('/')
    .get(getUsers)
    .post(crearUser);

router.route('/:id')
    .get(getUser)
    .delete(deleteUser);



module.exports = router;