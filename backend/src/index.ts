/*
** API SERVER for my personal website ⚡️
*/

import express from 'express';
import cors from "cors";
import passport from 'passport';
import { createClient } from 'redis';

const session = require('express-session');
const redisStore = require('connect-redis')(session);
const app = express();
const PORT = 8080;

import {REDIS_HOST, REDIS_PORT, REDIS_SESSION_SECRET} from "./constants/redis.constants";
import {SESSION_SECRET} from "./constants/auth0.constants";
import { UserRoutes } from './routes/users.routes';
import "./passport";

(async () => {
    /* Redis initialization */
    const redisClient = createClient({
        url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
        legacyMode: true
    });;
    redisClient.on('error', (err) => console.log('Redis Client Error', err));
    await redisClient.connect();

    /* Server basic config */
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(cors());

    /* Session initialization */
    try {
        app.use(session({
            store: new redisStore({client: redisClient}),
            secret: REDIS_SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: {
                secure: false,
                httpOnly: false,
                maxAge: 1000 * 60 * 10
            }
        }))
    } catch (error: any) {
        console.log(error);
    }

    /* Passport initialization */
    app.use(passport.initialize());
    app.use(passport.session());

    /* Server routes */
    app.get('/', (req, res) => res.send('Welcome to the personal API of Anthoni Marie '));
    app.use('/auth', new UserRoutes().router);
    app.listen(PORT, () => {
        console.log(`⚡️[ANTHONIMARIE]: API is running at http://127.0.0.1:${PORT}`);
    });
})();