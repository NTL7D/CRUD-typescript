import express from "express";
import cors from "cors";
import router from "./api/routes/router";

const main = async () => {
    const app = express();
    require("dotenv").config();
    const port = process.env.PORT || 5001;

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api", router);

    app.listen(port, () => {
        console.log(`Listen on port ${port} - url: http://localhost:${port}`);
    });
};

main().catch((err) => {
    console.error(err);
});
