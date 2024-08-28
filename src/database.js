const mongoose = require('mongoose');

// Obtener las variables de entorno con valores predeterminados
const {
    NOTES_APP_MONGODB_HOST = 'localhost',
    NOTES_APP_MONGODB_DATABASE = 'test'
} = process.env;

// Construir el URI de MongoDB
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

// Opciones de conexión para Mongoose
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Espera un máximo de 5 segundos para la conexión inicial
};

// Conectar a la base de datos MongoDB con Mongoose
mongoose.connect(MONGODB_URI, mongooseOptions)
    .then(() => console.log('Database is connected'))
    .catch(err => {
        console.error('Database connection error:', err);
        process.exit(1);  // Salir del proceso si no se puede conectar a la base de datos
    });
