import { Router } from 'express';
const router = Router();
import passport from 'passport'

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
        this.router.post('/register', this.userController.createUser);
        this.router.get('/users/list', this.userController.listUsers);
    }
}

export default router;