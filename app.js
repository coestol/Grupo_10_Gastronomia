const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./src/routers/mainRouter');
const loginRouter = require('./src/routers/loginRouter');
const registroRouter = require('./src/routers/registroRouter');
const carritoRouter = require('./src/routers/carritoRouter');
const detalleProductoRouter = require('./src/routers/detalleProductoRouter');

app.listen(3000, ()=>{
    console.log('Servidor Levantadoo');
    });

app.use(express.static(path.join('public')));

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(mainRouter); 
app.use(loginRouter); 
app.use(registroRouter); 
app.use(carritoRouter); 
app.use(detalleProductoRouter);
