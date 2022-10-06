import express from "express";
import multer from "multer";
import { extname } from "path";

const storage = multer.diskStorage({
    destination: (
        req: express.Request,
        file: Express.Multer.File,
        callback: (err: Error | null, destination: string) => void
    ) => {
        callback(null, `../upload`);
    },
    filename: (
        req: express.Request,
        file: Express.Multer.File,
        callback: (err: Error | null, filename: string) => void
    ) => {
        callback(null, extname(file.originalname));
    },
});

export default multer({ storage });
