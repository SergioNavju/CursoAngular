const { response } = require('express');

//---------------------------------------------//
const crearUsuario = (req,res = response)=>{
    //Recbimos todo y lo desestructuramos
    const {email, name, password} = req.body;
    console.log(email, name, password);
    
    //Respuesta
    return res.json({
        ok: true,
        msg: 'Para crear un usuario /new'
    });
}

//---------------------------------------------//
const loginUsuario = (req,res= response)=>{
    //Recbimos todo y lo desestructuramos
    const {email,password} = req.body;
    console.log(email, password);

    //Respuesta
    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    });
}

//---------------------------------------------//
const revalidarToken = (req,res = response)=>{
    return res.json({
        ok: true,
        msg: 'Renew'
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}