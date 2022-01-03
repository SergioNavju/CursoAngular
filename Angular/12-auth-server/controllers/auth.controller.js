const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

//---------------------------------------------//
const crearUsuario = async(req,res = response)=>{
    //Recbimos todo y lo desestructuramos
    const {email, name, password} = req.body;
    
    try{
        //Verificar que el correo sea unico
            //Buscamos encontrar algo como el email 
        const usuario = await Usuario.findOne({email});

        //Validacion
        if( usuario ){
            return res.status(400).json ({
                ok: false,
                msg: 'Un usuario ya fue regitrado con ese correo  UnU'
            });
        }


        //Creas usuario con el modelo
            //Solo se asignanlos valores de email, name y password
        const dbUser = new Usuario (req.body)

        
        //Hasheo de la contraseña 
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password,salt);

        //Generar el Json Web Token (JWT)
        const token = await generarJWT(dbUser,name);

        //Crear usuario en la base de datos
            //Usamos el await para indicar que debe de esperar a ter todos los datos
        await dbUser.save();

        //Generar la respuesta 
            //Si todo se ha cumplido con exito 
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name
        });

        //Respuesta
    }catch (error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Favor de comunicarse con el administrador'
        });
    }

    
    
}

//---------------------------------------------//
const loginUsuario = async(req,res= response)=>{
    //Recbimos todo y lo desestructuramos
    const {email,password} = req.body;

    try {

        const dbUser = await Usuario.findOne({email});

        //Que el correo exista
        if(!dbUser){
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
            });
        }
        
        //Confirmas que el correo hace match
        const validPassword = bcrypt.compareSync(password,dbUser.password);
        if( !validPassword){
            return res.status(400).json({
                ok: false,
                msg:'la contra no coincidee'
            });
        }

        //Gneeramos el JWT
        const token = await generarJWT(dbUser.id,dbUser.name);

        //Respuestas finales del servicio
        return res.json({
            ok:true,
            uid: dbUser.id,
            name: dbUser.name,
            token
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Corre!! ve por el Admin !!"
        });
    }
}

//---------------------------------------------//
const revalidarToken = async(req,res = response)=>{

    //leer uid y name de la token
    const {uid, name} = req;

    //Gneeramos el NUEVO JWT
        const token = await generarJWT(uid,name);

    return res.json({
        ok: true,
        uid,
        name
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}