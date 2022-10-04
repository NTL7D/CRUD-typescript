import { Router } from "express";
import { helloWorld } from "../controllers/test.controller";
import {
    getUsers,
    createUser,
    updateUserName,
    deleteUser,
} from "../controllers/user.controller";
// import multer from "../libs/multer";

const router = Router();

router.route("/test").get(helloWorld);
router.route("/users").get(getUsers);
router.route("/user").post(createUser);
router
    .route("/user/:id")
    .put(updateUserName)
    .delete(deleteUser);

export default router;
