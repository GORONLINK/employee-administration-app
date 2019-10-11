const User = require('../models/User');

const jwt = require('jsonwebtoken');
const config = require('../config');

const authController = {};

//REGISTRO
authController.registro = async (req, res, next) => {
    const { user, email, password } = req.body;
    const username = new User({
        user,
        email,
        password
    });
    username.password = await username.encryptPassword(username.password);

    try{
        await username.save();
    }catch(error){
        console.error(error);
        res.json(error);
    }
    
    const token = jwt.sign({id: username._id}, config.secret, {
       expiresIn: 60*60*24 //24 horas en segundos 
    });

    console.log(username);
    res.json({auth: true, token: token});
}

//INICIO DE SESION
authController.iniciarSesion = async (req, res, next) => {
    const { user, password } = req.body;
    const username = await User.findOne({ user: user });

    if(!username) {
        return res.status(404).res.json("El usuario no existe");
    }
    
    const validPassword = await username.validatePassword(password);

    if(!validPassword) {
        return res.status(401).res.json({Auth: false, token: null});
    }

    const token = jwt.sign({ id: username._id }, config.secret, {
        expiresIn: 60*60*24 
    })
    console.log(validPassword);

    res.json({ auth: true, token });
}


authController.ver = async (req, res, next) =>{
   // Muestra los datos del usuario sin la contraseña
   const user = await User.findById(req.userId, { password: 0 }); 

   if(!user) {
       return res.status(404).json("No se encontró ningún usuario con ese ID");
   }
   res.json(user);
}

module.exports = authController;