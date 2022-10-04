import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: "../../../upload",
    filename: (req, file, cb) => {
        cb(null, path.extname(file.originalname));
    },
});

export default multer({ storage });
