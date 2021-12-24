import {get} from 'env-var';

require('dotenv').config()

const env = (name: string, required: boolean = true) => get(name).required(required);

const AUTH0_CLIENT_ID: string = env('AUTH0_CLIENT_ID', true).asString();
const AUTH0_DOMAIN: string = env('AUTH0_DOMAIN', true).asString();
const AUTH0_CLIENT_SECRET: string = env('AUTH0_CLIENT_SECRET', true).asString();
const AUTH0_CALLBACK_URL: string = env('AUTH0_CALLBACK_URL', true).asString();
const SESSION_SECRET: string = env('SESSION_SECRET', true).asString();

export {AUTH0_CLIENT_ID, AUTH0_DOMAIN, AUTH0_CLIENT_SECRET, AUTH0_CALLBACK_URL, SESSION_SECRET};