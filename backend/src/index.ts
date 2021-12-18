/*
** API SERVER for my personal website ⚡️
*/

import express from 'express';
import cors from "cors";
import passport from 'passport';

const app = express();
const PORT = 8080;

import { UserRoutes } from './routes/users.routes';

/* Server basic config */
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(passport.initialize());

/* Server routes */
app.get('/', (req, res) => res.send('Welcome to the personal API of Anthoni Marie '));
app.use('/auth', new UserRoutes().router);
app.listen(PORT, () => {
    console.log(`⚡️[ANTHONIMARIE]: API is running at http://127.0.0.1:${PORT}`);
});