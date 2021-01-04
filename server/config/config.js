// / PUERTO
process.env.PORT = process.env.PORT || 3000;

// ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Caducidad del token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// seed de configuración
process.env.SEED = process.env.SEED || 'secret';

// DB
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.urlDB = urlDB;

// google
process.env.CLIENT_ID = process.env.CLIENT_ID || '598601207909-5ibtjise83mojnd4tng19n3lohqqkdkr.apps.googleusercontent.com';