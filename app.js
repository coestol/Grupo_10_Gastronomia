const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./src/routes/mainRouter');
const usersRouter = require('./src/routes/usersRouter');
const carritoRouter = require('./src/routes/carritoRouter');
const productoRouter = require('./src/routes/productoRouter');
const methodOverride =  require('method-override'); //Para poder pisar el method="post" en el formulario por PUT y DELETE

app.listen(3000, ()=>{
    console.log('Servidor Levantado');
    });

app.use(express.static(path.join('public')));

//---Para que podamos editar productos/users----//

app.use(methodOverride('method')) //Para poder pisar el method="post" en el formulario por PUT y DELETE

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(mainRouter); 
app.use(usersRouter); 
app.use(carritoRouter); 
app.use(productoRouter);
