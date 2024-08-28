require('dotenv').config();

// Configuración y conexión a la base de datos
try {
    require('./database');
} catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);  // Salir del proceso si la conexión falla
}

// Cargar la aplicación del servidor
const app = require('./server');

// Iniciar el servidor
const port = app.get('port');
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}).on('error', (err) => {
    console.error('Failed to start server:', err);
    process.exit(1);  // Salir del proceso si el servidor no se inicia correctamente
});
