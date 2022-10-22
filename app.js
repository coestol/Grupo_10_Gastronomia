const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

let port = 3000;

app.listen(port, () => {
    console.log("Levantando un servidor con Express");
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html' ));
});
app.get("/DetalleProducto", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/DetalleProducto.html' ));
});
app.get("/carritoCompras", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/carritoCompras.html' ));
});
app.get("/registro", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/registro.html' ));
});
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html' ));
});
