import { v2 as cloudinary } from "cloudinary";

// Configuration
cloudinary.config({
  cloud_name: "dlnvbkfjb",
  api_key: "575239265526165",
  api_secret: "wCIcYd8xmK_acO0XKPpUUQav0T8",
});

// Generate
// const url = cloudinary.url("sony_camera", {
//   width: 100,
//   height: 150,
//   Crop: "fill",
// });

// The output url
// console.log("url: ", url);
// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag

export default cloudinary;
