import {NextFunction, Request, Response} from 'express';
import httpStatus from 'http-status-codes';
import bcrypt from 'bcrypt';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class ArticleController {
    public async createArticle(req: Request, res: Response) {
        const {title, description, content, author} = req.body;
        if (!title || !description || !content || !author)
            return (res.sendStatus(httpStatus.BAD_REQUEST));

        const article = await prisma.article.findFirst({
            where: {
                title,
            },
        });
        if (article)
            return (res.status(httpStatus.CONFLICT).json({message: "An article with this name is already in our database."}));
        try {
            const newArticle = await prisma.article.create({
                data: {
                    title: title,
                    description: description,
                    content: content,
                    author: author
                },
            })
            console.log('Created new article: ', newArticle)
        } catch (error: any) {
            console.log(error);
            return (res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR));
        }
        return (res.status(httpStatus.OK).json({message: 'The article has been created.'}));
    }

    public async listArticles(req: Request, res: Response) {
        try {
            const articles_list = await prisma.article.findMany();
            return (res.status(httpStatus.OK).json({message: 'All articles list.', articles: articles_list}));
        } catch (error: any) {
            console.log(error);
            return (res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR));
        }
    }
}