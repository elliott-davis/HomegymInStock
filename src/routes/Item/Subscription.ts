import express, { Request, Response } from 'express';
import { subscriptionController } from '../../controllers';
import { body, validationResult } from 'express-validator';
import { authCheck } from '../../auth';

export const router = express.Router({
    strict: true
});

router.post('/', [
    body('email').isEmail(),
    body('id').isNumeric(),
    body('name').exists()], (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    subscriptionController.create(req, res);
});

router.delete('/', [
    body('email').isEmail(),
    body('id').isNumeric(),
    body('name').exists()], (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    subscriptionController.delete(req, res);
});
