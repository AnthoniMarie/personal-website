import { Router } from 'express';
import passport from 'passport'
const router = Router();

import {AuthController} from '../controllers/auth.controller';

export class AuthRoutes {
    router: Router
    public authController: AuthController = new AuthController()

    constructor() {
        this.router = Router()
        this.routes()
    }
    routes() {
        /* auth */
        //this.router.post('/register', this.authController.createUser);
        this.router.get('/login', passport.authenticate('auth0', {scope: "openid email profile"}));
        this.router.get('/redirect', passport.authenticate('auth0', {scope: "openid email profile"}), this.authController.redirectAuthentication);
        this.router.get('/private', (err, user, info) => {
            passport.authenticate("auth0");
        });
    }
}

export default router;