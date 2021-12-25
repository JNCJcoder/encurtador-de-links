import express from 'express';
import MongoDatabase from './database';
import errorHandler from './middlewares/error-handler.middleware';
import urlRoute from './routes/url.route';

const PORT = process.env.PORT || 3333;

// Aplicação
const app = express();

app.use(express.json());

// Database
const database = new MongoDatabase();
database.connect();

// Rotas
app.use(urlRoute);

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Executando na porta ${PORT}`));
