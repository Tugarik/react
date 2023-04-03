import express from "express";
import { getTheatres } from "../services/theater-service";

const theaterRouter = express.Router();

theaterRouter.get("/theater", getTheatres);

export default theaterRouter;
