/*
** API SERVER for my personal website ⚡️
*/

import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";

const app = express();
const PORT = 8080;

/* Server basic config */
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/* Server routes */
app.get('/', (req, res) => res.send('Welcome to the personal API of Anthoni Marie '));
app.listen(PORT, () => {
    console.log(`⚡️[DASHBOARD_API]: API is running at http://127.0.0.1:${PORT}`);
});