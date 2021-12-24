import { Router } from 'express';
import passport from 'passport'
const router = Router();

import {UserController} from '../controllers/users.controller';

export class UserRoutes {
    router: Router
    public userController: UserController = new UserController()

    constructor() {
        this.router = Router()
        this.routes()
    }
    routes() {
        /* auth */
        //this.router.post('/register', this.userController.createUser);
        this.router.get('/users/list', this.userController.listUsers);

        this.router.get('/login', passport.authenticate('auth0', {scope: "openid email profile"}));
        this.router.get('/redirect', passport.authenticate('auth0', {scope: "openid email profile"}), this.userController.redirectAuthentication);
        this.router.get('/private', (err, user, info) => {
            passport.authenticate("auth0");
        });
    }
}

export default router;