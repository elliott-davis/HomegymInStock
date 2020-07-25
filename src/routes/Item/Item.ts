import express, { Request, Response } from 'express';
import { itemsController } from '../../controllers';
import { body, validationResult } from 'express-validator';
import { authCheck } from '../../auth';

export const router = express.Router({
    strict: true
});

router.get('/', (req: Request, res: Response) => {
    itemsController.list(req, res);
});

// router.post('/', [], (req: Request, res: Response) => {
//     userController.create(req, res);
// });
//
// router.get('/:id',[authCheck], (req: Request, res: Response) => {
//     userController.read(req, res);
// });
//
// router.patch('/', (req: Request, res: Response) => {
//     userController.update(req, res);
// });
//
// router.delete('/', (req: Request, res: Response) => {
//     userController.delete(req, res);
// });
