import {NextFunction, Request, Response} from 'express';
import httpStatus from 'http-status-codes';
import bcrypt from 'bcrypt';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class UserController {
    public async redirectAuthentication(req: Request, res: Response) {
        try {
            const user:any = req.user;
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                console.log(user);
                console.log(req.session);
                res.redirect("/");
            });
            //console.log(res);
            //return (res.sendStatus(httpStatus.OK).json("OK"));
        } catch (error: any) {
            console.log(error);
            return (res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR));
        }
    }

    public async listUsers(req: Request, res: Response) {
        try {
            const users_list = await prisma.user.findMany();
            return (res.status(httpStatus.OK).json({message: 'All users list.', users: users_list}));
        } catch (error: any) {
            console.log(error);
            return (res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR));
        }
    }
}

function next(err: any): void {
    throw new Error('Function not implemented.');
}
