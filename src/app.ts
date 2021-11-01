import express from 'express';
import postsRouter from './routes/posts.routes';
import usersRouter from './routes/users.routes'

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api', usersRouter);
app.use('/api', postsRouter);

/**
 * Configured server ready to go
 */
export { app }
