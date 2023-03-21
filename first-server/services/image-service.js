import cloudinary from "../config/cloudinary.js";

export async function uploadFile(req) {
  console.log("imagePath: ", req.file.path);
  console.log("data: ", JSON.parse(req.body.data));
  const res = cloudinary.uploader.upload(req.file.path, {
    use_filename: true,
    folder: "electon",
  });

  res
    .then((data) => {
      console.log(data);
      console.log("secureUrl: ", data.secure_url);
    })
    .catch((err) => {
      console.log(err);
    });
  return res.secure_url;
}
