import express from 'express';
import clientRoutes from './routes/client.routes.js';
import orderRoutes from './routes/order.routes.js'

const app = express();

//middlewares
app.use( express.json() );

app.use( clientRoutes, orderRoutes );

export default app;