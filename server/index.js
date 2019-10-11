const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

//Configuraciones
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Rutas
app.use('/api/employees', require('./routes/employee.routes'));
app.use('/api/user', require('./routes/signin.routes'));

//Start Server
app.listen(app.get('port'), () =>{
    console.log("Listening on port", app.get('port'));
});