import { Router, Request, Response, NextFunction } from "express";
import * as mongoose from 'mongqoose';
const router = Router();

router.get(
  "/test/:name",
  (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params;
    res.send(`Hello ${name} with mongoose with emsaicxl dd`);
  }
);

export const exampleRouter = router;
