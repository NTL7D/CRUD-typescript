import { Request, Response } from "express";

export function helloWorld(req: Request, res: Response) {
    return res.send("Hello World!");
}
