import {NextFunction, Request, Response} from 'express';
import httpStatus from 'http-status-codes';
import bcrypt from 'bcrypt';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class UserController {
    public async createUser(req: Request, res: Response) {
        const {nickname, firstname, lastname, email, password, role = "ROLE_USER"} = req.body;
        if (!nickname || !firstname || !lastname || !email || !password)
            return (res.sendStatus(httpStatus.BAD_REQUEST));

        const user = await prisma.user.findFirst({
            where: {
                OR: [{ nickname }, { email }],
            },
        });
        if (user)
            return (res.status(httpStatus.CONFLICT).json({message: "This user is already registered in our database."}));
        try {
            const newUser = await prisma.user.create({
                data: {
                    nickname: nickname,
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: bcrypt.hashSync(password, 10),
                    role: role
                },
            })
            console.log('Created new user: ', newUser)
        } catch (error: any) {
            console.log(error);
            return (res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR));
        }
        return (res.status(httpStatus.OK).json({message: 'The user has been added.'}));
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