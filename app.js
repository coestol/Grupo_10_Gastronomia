const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./src/routes/mainRouter');
const loginRouter = require('./src/routes/loginRouter');
const registroRouter = require('./src/routes/registroRouter');
const carritoRouter = require('./src/routes/carritoRouter');
const detalleProductoRouter = require('./src/routes/detalleProductoRouter');

app.listen(3000, ()=>{
    console.log('Servidor Levantado');
    });

app.use(express.static(path.join('public')));

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(mainRouter); 
app.use(loginRouter); 
app.use(registroRouter); 
app.use(carritoRouter); 
app.use(detalleProductoRouter);
