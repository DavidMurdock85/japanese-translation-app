import express from 'express';
import bodyParser from 'body-parser';
import corsMiddleware from './middleware/cors';
import indexRoutes from './routes/index';
import dataRoutes from './routes/data';
import translateRoutes from './routes/translate';

const app = express();

// Middleware
app.use(corsMiddleware);
app.use(bodyParser.json());

// Routes
app.use('/', indexRoutes);
app.use('/', dataRoutes);
app.use('/', translateRoutes);

export default app;