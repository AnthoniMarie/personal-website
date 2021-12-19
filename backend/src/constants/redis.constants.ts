import {get} from 'env-var';

require('dotenv').config()

const env = (name: string, required: boolean = true) => get(name).required(required);

const REDIS_HOST: string = env('REDIS_HOST', true).asString();
const REDIS_PORT: number = env('REDIS_PORT', true).asPortNumber();
const REDIS_SESSION_SECRET: string = env('REDIS_SESSION_SECRET', true).asString();

export {REDIS_HOST, REDIS_PORT, REDIS_SESSION_SECRET};