import { Router } from 'express';
import passport from 'passport'
const router = Router();

import {ArticleController} from '../controllers/article.controller';

export class ArticleRoutes {
    router: Router
    public articleController: ArticleController = new ArticleController()

    constructor() {
        this.router = Router()
        this.routes()
    }
    routes() {
        /* articles */
        this.router.post('/create', this.articleController.createArticle);
        this.router.get('/list', this.articleController.listArticles);
    }
}

export default router;