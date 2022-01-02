const { response } = require("express");
const { validationResult } = require("express-validator");

/*

Una midleware es una funcion que recibe la request, la repsonse y el newxt (como un controlador pero con un next)

*/

const validarCampos = (req, res = response, next) =>{

    //Errores despues de la validacion
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        });
    }

    //Funcion para poder terminar la valiudacion
    next();
}


module.exports={
    validarCampos
}