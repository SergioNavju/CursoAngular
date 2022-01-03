const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth.controller');
const { validarCampos } = require('../middleware/validar-campos');
const { validarJWT } = require('../middleware/validar-jwt');

const router = Router()

//Crear un nuevo usuario
//el callback (funcion de flecha) es el controlador de la ruta ('./new')
//El segundo atributo es el midleware

//Todas las validaciones:
//Crearemos un objeto que llevara el error
//Se ejecutan de manera secuencial, solo si una pasa va a la otra 

//Crear un nuevo Usuario

//Validaciones
router.post ('/new',[
    check('name','Dime tu nombre We').not().isEmpty(),
    check('email','Dame el correo We'). isEmail(),
    check('password','Y la contra?'). isLength({min: 6}),
    validarCampos
], crearUsuario);




//Login de usuario

//Validacion para el correo electronico (es una midlewae)
router.post ('/',[
    check('email','Dame el correo We'). isEmail(),
    check('password','Y la contra?'). isLength({min: 6}),
    validarCampos
], loginUsuario);

//Validar y revalidar el token
router.get ('/renew',validarJWT, revalidarToken);


//Necesitamos desestructurtarlo
module.exports = router;