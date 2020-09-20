import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get(
  "/test/:name",
  (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params;
    res.send(`Hello ${name} from express test`);
  }
);

export const exampleRouter = router;
