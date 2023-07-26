const {Router} = require('express');
const router = Router();
const {getPerfiles, crearPerfil, getPerfil, updatePerfil, deletePerfil} = require('../controllers/perfil.controller')

// instanciamos Router() 

// funciona como si fuese la ruta origen una vez se require
//                .get .post . put .delete (creo se llama rest api)
// podemos responder con  res.send res.json etc esto esta en controller
router.route('/')
    .get(getPerfiles)
    .post(crearPerfil);

router.route('/:id')
    .get(getPerfil)
    .put(updatePerfil)
    .delete(deletePerfil);



module.exports = router;