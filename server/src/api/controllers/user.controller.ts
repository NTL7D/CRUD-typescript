import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUsers(req: Request, res: Response): Promise<Response> {
    const getUsers = await prisma.user.findMany();
    return res.json(getUsers);
}

export async function createUser(
    req: Request,
    res: Response
): Promise<Response> {
    const { name, password } = req.body;
    const createUser = await prisma.user.create({
        data: {
            name: String(name),
            password: String(password),
        },
    });
    return res.json(createUser);
}

export async function updateUserName(
    req: Request,
    res: Response
): Promise<Response> {
    const id = req.params.id;
    const { name } = req.body;
    const updateUserName = await prisma.user.update({
        where: {
            id: Number(id),
        },
        data: {
            name: String(name),
        },
    });
    return res.json(updateUserName);
}

export async function deleteUser(
    req: Request,
    res: Response
): Promise<Response> {
    const id = req.params.id;
    const deleteUser = await prisma.user.delete({
        where: {
            id: Number(id),
        },
    });
    return res.json(deleteUser);
}
