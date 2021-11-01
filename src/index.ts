import { app } from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.LISTEN_PORT || 5000;

const server = app.listen(
    PORT,
    () => console.log(`Server is up and runngin on http://localhost:${PORT}`)
);
