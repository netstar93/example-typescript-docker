import { Router, Request, Response, NextFunction } from "express";
import * as nodemailer from 'nodemailer';
const router = Router();

router.get(
  "/test/:name",
  (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params;
    res.send(`Hello ${name} from final new`);
  }
);

export const exampleRouter = router;
