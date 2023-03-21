import multer from "multer";
import { nanoid } from "nanoid";

function getExtensions(name) {
    const arr = name.split(".");
    return arr[arr.length - 1];
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "/tmp")
    },
    filename: (reg, file, cb) => {
        const ext = getExtensions(file.originalname);
        const newFileName = nanoid() + "." + ext;
        cb(null, newFileName);
    }
})

const upload = multer({ storage: storage });
export default upload;