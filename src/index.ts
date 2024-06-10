import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './routes/index';
import connectToMongoDB from './config/db';

dotenv.config();

//app
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

//routes
app.use('/api', router);

//mongo
connectToMongoDB().then(() => {
    console.log('Connected to MongoDB');
});

//server start
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

export default app;
