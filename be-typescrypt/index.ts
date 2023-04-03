import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import theaterRouter from "./controller/theaterRouter";
import MongoDBConfig from "./config/MongoDB-config";

dotenv.config();
const app: Express = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;

app.use(theaterRouter);

app.listen(port, () => {
  MongoDBConfig;
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
