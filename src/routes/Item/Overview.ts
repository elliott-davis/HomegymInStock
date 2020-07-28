import express, {Request, Response} from "express";
import {overviewController} from "../../controllers";

export const router = express.Router({
  strict: true
});

router.get('/', (req : Request,res: Response) => {
  overviewController.read(req, res);
})
