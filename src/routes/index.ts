import { Router } from 'express';
import homeRouter from './homeRouter';
import usersRouter from './userRouter';

const router = Router();

router.use('/home', homeRouter);
router.use('/users', usersRouter);

export default router;
