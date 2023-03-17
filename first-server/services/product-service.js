import fs from "fs";

export function getProducts() {
  const result = fs.readFile("./database/products.json", (err, data) => {
    let savedData = JSON.parse(data);
    err ? { message: err } : savedData;
  });
  return result;
}
