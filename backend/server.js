const express = require('express');
const colors = require('colors');  
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();

// Conectar a la base de datos
connectDB();

const port = process.env.PORT || 5000;

const app = express();

// Middleware para parsear JSON y x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ruta principal de las API de persianas, actualizado para usar las rutas de persianas
app.use('/api/persianas', require('./routes/persianasRoutes'));

// Middleware para manejo de errores
app.use(errorHandler);

// Inicio del servidor
app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`.yellow));