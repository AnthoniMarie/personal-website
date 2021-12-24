import passport from "passport";
const Auth0Strategy = require("passport-auth0");

import {AUTH0_CLIENT_ID, AUTH0_DOMAIN, AUTH0_CLIENT_SECRET, AUTH0_CALLBACK_URL} from "./constants/auth0.constants";

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user:any, done) => {
    done(null, user);
});

passport.use(
    new Auth0Strategy(
    {
        domain: AUTH0_DOMAIN,
        clientID: AUTH0_CLIENT_ID,
        clientSecret: AUTH0_CLIENT_SECRET,
        callbackURL: AUTH0_CALLBACK_URL
    },
    function(accessToken: any, refreshToken: any, extraParams: any, profile: any, done: (arg0: null, arg1: any) => any) {
        return done(null, profile);
    }
));