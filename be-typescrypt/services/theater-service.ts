import { Request, Response } from "express";
import Theater from "../models/Theater";

export async function getTheatres(req: Request, res: Response) {
  const query = req.query.query;
  console.log("GET query recieved");
  console.log(query);
  try {
    const result: any = await Theater.find({ theaterId: query }).limit(1);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
}
