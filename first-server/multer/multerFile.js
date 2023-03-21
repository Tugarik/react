import multer from "multer";
import { nanoid } from "nanoid";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp");
  },
  filename: (req, file, cb) => {
    const ext = getExtensions(file.originalname);
    const newFileName = nanoid() + "." + ext;
    console.log("newFileName: ", newFileName);

    cb(null, newFileName);
  },
});

function getExtensions(name) {
  const arr = name.split(".");
  return arr[arr.length - 1];
}

const upload = multer({ storage: storage });

export default upload;
