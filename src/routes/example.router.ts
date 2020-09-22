import { Router, Request, Response, NextFunction } from "express";
import * as mongoose from 'mongoose';
const router = Router();

router.get(
  "/test/:name",
  (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params;
    res.send(`Hello ${name} with mongoose withsdsd`);
  }
);

export const exampleRouter = router;
