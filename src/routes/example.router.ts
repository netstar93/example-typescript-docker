import { Router, Request, Response, NextFunction } from "express";
import * as mongoose from 'cron';
const router = Router();

router.get(
  "/test/:name",
  (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params;
    res.send(`Hello ${name} from ffd`);
  }
);

export const exampleRouter = router;
