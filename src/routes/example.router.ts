import { Router, Request, Response, NextFunction } from "express";
import * as mongoose from 'nconf';
const router = Router();

router.get(
  "/test/:name",
  (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params;
    res.send(`Hello ${name}abcd`);
  }
);

export const exampleRouter = router;
