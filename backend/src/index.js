"use strict";
/*
** API SERVER for my personal website ⚡️
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8080;
app.get('/', (req, res) => res.send('Welcome to our Dashboard API :)'));
app.listen(PORT, () => {
    console.log(`⚡️[DASHBOARD_API]: API is running at http://127.0.0.1:${PORT}`);
});
